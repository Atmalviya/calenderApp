// EventList.jsx

import { EventCard } from "./EventCard";

export const EventList = ({ eventList, datePicked}) => {
    console.log("datePicked",datePicked)
    if(datePicked){
        return (
            <p>
                There no event on {datePicked.day}/{datePicked.month}/{datePicked.year}
            </p>
        )
    }
    return (
        <>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">Upcoming Events</h2>
            <div className="space-y-4 cursor-pointer">
                {eventList.map((event, index) => (
                    <EventCard event={event} key={index}  />
                ))}
            </div>
        </>
    );
};
