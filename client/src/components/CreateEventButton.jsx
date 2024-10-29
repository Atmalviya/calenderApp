import GlobalContext from "@/context/globalContext"
import { Plus } from "lucide-react"
import { useContext } from "react"

export const CreateEventButton = () => {
    const { setShowEventModal } = useContext(GlobalContext)
    
    return (
        <button className="border p-2 rounded-full flex items-center shadow-md hover:shadow-xl" onClick={()=> {setShowEventModal(true)}}>
            <Plus className='w-7 h-7'/>
            <span className="pl-3 pr-7">Create</span>
        </button>
    )
}