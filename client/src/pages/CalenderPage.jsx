// HomePage.jsx

import { Calendar } from "@nextui-org/calendar";
import { EventList } from "../components/EventList";
import { useState } from "react";
import EventForm from "../components/EventForm";
import { getMonth } from "../../utils";
import { CalenderHeader } from "@/components/CalenderHeader";
import { Sidebar } from "@/components/Sidebar";
import { Month } from "@/components/Month";


export const CalenderPage = () => {
  // console.table(getMonth()) 
  const [currentMonth, setCurrentMonth] = useState(getMonth())

  return (
    <>
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
