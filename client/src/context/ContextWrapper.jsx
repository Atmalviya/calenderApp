import React, { useEffect, useState } from "react";
import GlobalContext from "./globalContext";
import dayjs from "dayjs";
import api from "@/api/api";
import { useAuth } from "./AuthContext";

export default function ContextWrapper(props) {
  const { user } = useAuth(); // Use the useAuth safely
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [smallCalendarMonth, setSmallCalendarMonth] = useState(null);
  const [daySelected, setDaySelected] = useState(dayjs());
  const [showEventModal, setShowEventModal] = useState(false);
  const [savedEvents, setSavedEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      if (user) {
        try {
          const response = await api.get("/events");
          setSavedEvents(response.data);
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchEvents(); // Call the function
  }, [user]);

  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    if (smallCalendarMonth !== null) {
      setMonthIndex(smallCalendarMonth);
    }
  }, [smallCalendarMonth]);

  return (
    <GlobalContext.Provider
      value={{
        monthIndex,
        setMonthIndex,
        smallCalendarMonth,
        setSmallCalendarMonth,
        daySelected,
        setDaySelected,
        showEventModal,
        setShowEventModal,
        setSavedEvents,
        savedEvents,
        selectedEvent,
        setSelectedEvent,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}
