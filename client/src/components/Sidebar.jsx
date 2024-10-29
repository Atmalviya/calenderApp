import { CreateEventButton } from "./CreateEventButton"
import {Calendar} from "@nextui-org/calendar";
import { SmallCalendar } from "./SmallCalendar";
export const Sidebar = () => {
    return (
        <aside className="border p-5 w-64">
            <CreateEventButton />
            <SmallCalendar />
        </aside>
    )
}