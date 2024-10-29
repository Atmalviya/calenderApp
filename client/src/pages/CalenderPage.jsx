
import { Calendar } from "@nextui-org/calendar";
import { EventList } from "../components/EventList";
import { useState, useContext, useEffect } from "react";
import EventForm from "../components/EventForm";
import { getMonth } from "../../utils";
import { CalenderHeader } from "@/components/CalenderHeader";
import { Sidebar } from "@/components/Sidebar";
import { Month } from "@/components/Month";
import GlobalContext from "@/context/globalContext";
import { EventModal } from "@/components/EventModal";


export const CalenderPage = () => {
  const [currentMonth, setCurrentMonth] = useState(getMonth())
  const { monthIndex, showEventModal } = useContext(GlobalContext)

  useEffect(()=> {
    setCurrentMonth(getMonth(monthIndex))
  }, [monthIndex])

  return (
    <>
    { showEventModal && <EventModal />}
      
        <div className=" flex flex-col h-screen">
          <CalenderHeader />
          <div className="flex flex-1">
            <Sidebar />
            <Month month={currentMonth} />
          </div>
        </div>
    </>
  );
};
