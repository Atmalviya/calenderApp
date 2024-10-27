// EventCard.jsx

export const EventCard = ({ event }) => {
    const formattedDate = new Date(event.eventDate).toLocaleString("en-US", {
        dateStyle: "medium",
        timeStyle: "short",
    });

    return (
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">{event.title}</h3>
            <p className="text-gray-600 text-sm">{event.description}</p>
            <p className="text-gray-500 text-xs mt-2">{formattedDate}</p>
        </div>
    );
};
