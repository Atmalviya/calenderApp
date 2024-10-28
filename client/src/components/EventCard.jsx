import { useState } from 'react';
import { Pencil, Trash } from 'lucide-react';
import EditEventModal from './EditEventModal';

export const EventCard = ({ event }) => {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const formattedDate = new Date(event.eventDate).toLocaleString("en-US", {
        dateStyle: "medium",
        timeStyle: "short",
    });

    const handleEditClick = () => {
        setIsEditModalOpen(true);
    };

    return (
        <>
            <div className="bg-white p-5 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <div className="flex justify-between items-center">
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800">{event.title}</h3>
                        <p className="text-gray-600 text-sm mt-1">{event.description}</p>
                        <p className="text-gray-500 text-xs mt-2">{formattedDate}</p>
                    </div>
                    <div className="flex space-x-3 text-gray-400">
                        <button
                            className="hover:text-blue-600 transition-colors duration-200"
                            aria-label="Edit event"
                            onClick={handleEditClick}
                        >
                            <Pencil className="w-5 h-5" />
                        </button>
                        <button
                            className="hover:text-red-600 transition-colors duration-200"
                            aria-label="Delete event"
                        >
                            <Trash className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
            {isEditModalOpen && (
                <EditEventModal
                    event={event}
                    onClose={() => setIsEditModalOpen(false)}
                />
            )}
        </>
    );
};
