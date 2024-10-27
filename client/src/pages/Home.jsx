// HomePage.jsx

import { Calendar } from "@nextui-org/calendar";
import { EventList } from "../components/EventList";
import { useState } from "react";

export const HomePage = () => {
    const [datePicked, setDatePicked] = useState(null);
    const setAbc = (e) => {
        console.log(e)
        setDatePicked(e)    
    }
    console.log(datePicked)
    const eventList = [
        {
            title: "Meet with CTO",
            description: "This meeting is about future plans.",
            eventDate: '2024-10-20 21:02:00',
        },
        {
            title: "Seminar",
            description: "This seminar is about future plans.",
            eventDate: '2024-10-20 21:02:00',
        },
    ];

    return (
        <div className="flex h-screen p-6 bg-gray-100">
            <div className="w-full md:w-1/3 lg:w-1/4">
                <Calendar className="rounded-lg shadow-lg bg-white border border-gray-200" onChange={setAbc} calendarWidth='512' value={datePicked} />
            </div>
            <div className="w-full md:w-2/3 lg:w-3/4 p-4 bg-white rounded-lg shadow-lg ml-4">
                <EventList eventList={eventList} datePicked={datePicked} />
            </div>
        </div>
    );
};
