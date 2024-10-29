import GlobalContext from "@/context/globalContext";
import { X } from "lucide-react";
import { Clock } from "lucide-react";
import { Menu } from "lucide-react";
import { ListCollapse } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import api from "@/api/api";

export const EventModal = () => {
  const {
    setShowEventModal,
    daySelected,
    savedEvents,
    setSavedEvents,
    selectedEvent,
    setSelectedEvent,
  } = useContext(GlobalContext);
  const [title, setTitle] = useState(selectedEvent ? selectedEvent.title : "");
  const [description, setDescription] = useState(
    selectedEvent ? selectedEvent.description : ""
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const calenderEvent = {
      title,
      description,
      day: daySelected.valueOf(),
      id: selectedEvent ? selectedEvent.id : Date.now(),
    };
    if (selectedEvent) {
      const updatedEvents = savedEvents.map((event) =>
        event.id === selectedEvent.id ? calenderEvent : event
      );
      setSavedEvents(updatedEvents);
      await api.put(`/events/${selectedEvent.id}`, calenderEvent);
      setShowEventModal(false);
    } else {
      setSavedEvents([...savedEvents, calenderEvent]);
      const response = await api.post("/events", calenderEvent);
      setShowEventModal(false);
      if (response.status === 200) {
        setSavedEvents([...savedEvents, calenderEvent]);
      }
    }
  };

  const handleDelete = async () => {
    if (!selectedEvent) return;

    try {
      const response = await api.delete(`/events/${selectedEvent.id}`);
      if (response.status === 200) {
        setSavedEvents(
          savedEvents.filter((evt) => evt.id !== selectedEvent.id)
        );
        setShowEventModal(false);
      }
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
      <form className="bg-white rounded-lg shadow-2xl w-1/4">
        <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
          <span className="text-gray-400 flex flex-row gap-1">
            <Menu /> Create Event
          </span>
          <button
            className="text-gray-400"
            onClick={() => {
              setShowEventModal(false);
            }}
          >
            <X />
          </button>
        </header>
        <div className="p-3">
          <div className="grid grid-cols-1/5 items-end gap-y-7">
            <div className=""></div>
            <Input
              type="text"
              className="p-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              name="title"
              placeholder="Add title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <span className="text-gray-400">
              <Clock />
            </span>
            <p>{daySelected.format("DD, MMMM,  YYYY")}</p>
            <span className="text-gray-400">
              <ListCollapse />
            </span>
            <Input
              type="text"
              className="p-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              name="description"
              placeholder="Add description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
        </div>
        <footer className="flex gap-2 justify-end border-t p-3 mt-5">
          {selectedEvent && (
            <Button
              className="bg-red-500 hover:bg-red-600 px-6 py-2 rounded text-white"
              onClick={handleDelete}
            >
              Delete
            </Button>
          )}

          <Button
            className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white"
            onClick={handleSubmit}
          >
            Save
          </Button>
        </footer>
      </form>
    </div>
  );
};
