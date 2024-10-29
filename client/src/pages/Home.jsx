
import { Calendar } from "@nextui-org/calendar";
import { EventList } from "../components/EventList";
import { useContext, useEffect, useState } from "react";
import EventForm from "../components/EventForm";
import { Navbar } from "@/components/Navbar";
import { EventModal } from "@/components/EventModal";
import { SmallCalendar } from "@/components/SmallCalendar";
import { Sidebar } from "@/components/Sidebar";
import { CreateEventButton } from "@/components/CreateEventButton";
import GlobalContext from "@/context/globalContext";
import dayjs from "dayjs";

export const HomePage = () => {
    
    const { setSelectedEvent, savedEvents } = useContext(GlobalContext)
    const [datePicked, setDatePicked] = useState(null);
    const [formattedEvents, setFormattedEvents] = useState([]);

    useEffect(() => {
        const data = savedEvents.map(event => ({
            ...event,
            day: dayjs(Number(event.day)).format("DD-MM-YYYY") // format the date
        }));
        setFormattedEvents(data);
        
    }, [savedEvents])

  const { showEventModal } = useContext(GlobalContext)

    return (
        <>
            { showEventModal && <EventModal />}
            <Navbar />
            <div className="flex h-screen p-6 bg-gray-100" style={{ height: "calc(100vh - 60px)" }}>
                <div className="w-full md:w-1/3 lg:w-1/4">

                    <aside className="">
                        <CreateEventButton />
                        <SmallCalendar />
                    </aside>
                </div>
                <div className="w-full md:w-2/3 lg:w-3/4 p-4 bg-white rounded-lg shadow-lg ml-4">
                    <EventList eventList={formattedEvents} datePicked={datePicked} />
                </div>
            </div>
        </>
    );
};
