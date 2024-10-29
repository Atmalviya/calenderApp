import React, { useEffect, useReducer, useState } from "react";
import GlobalContext from "./globalContext";
import dayjs from "dayjs";
import api from "@/api/api";


export default function ContextWrapper(props) {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [smallCalendarMonth, setSmallCalendarMonth] = useState(null);
  const [daySelected, setDaySelected] = useState(dayjs());
  const [showEventModal, setShowEventModal] = useState(false);

  const [savedEvents, setSavedEvents] = useState([]);
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await api.get("/events");
        console.log({ response });
        setSavedEvents(response.data);
      } catch (error) {
        return error;
      }
    };
    fetchEvents();
  }, []);

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
