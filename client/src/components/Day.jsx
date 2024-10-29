import GlobalContext from "@/context/globalContext"
import dayjs from "dayjs"
import { useContext, useEffect, useState } from "react"

export const Day = ({ day, rowIndex }) => {
    const { setDaySelected, setShowEventModal, setSelectedEvent, savedEvents } = useContext(GlobalContext)
    const [dayEvents, setDayEvents] = useState([])

    useEffect(() => {
        const events = savedEvents.filter(event => 
            dayjs(Number(event.day)).format("DD-MM-YY") === day.format("DD-MM-YY")
        );
        setDayEvents(events);
    }, [savedEvents, day]);
    


    const getCurrentDayClass = ()=> {
        return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY") ? 'bg-blue-600 text-white rounded-full w-7' : ''
    }
    return (
        <div className="border border-gray-200 flex flex-col">
            <header className="flex flex-col items-center">
                {rowIndex === 0 && (
                    <p className="text-sm mt-1 ">{day.format('ddd').toUpperCase()} </p>
                )}
                <p className={`text-sm p-1 my-1 text-center ${getCurrentDayClass()}`}>
                    {day.format('DD')}
                </p>
            </header>
            <div className="flex-1 cursor-pointer" onClick={() => {
                setSelectedEvent(null);
                setDaySelected(day)
                setShowEventModal(true)
            }}>
                {dayEvents.map((evt, index) => (
                    <div className={`bg-blue-400 p-1 mr-3 text-gray-600 text-sm rounded mb-1 truncate`} key={index} onClick={(e) => {
                        e.stopPropagation();  
                        setSelectedEvent(evt);
                        setDaySelected(day)
                        setShowEventModal(true);
                    }}>
                        {evt.title}
                    </div>
                ))}
            </div>
        </div>
    )
}

