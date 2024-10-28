import { ChevronLeft } from 'lucide-react';
import { ChevronRight } from 'lucide-react';



export const CalenderHeader = () => {
    return (
        <header className="px-4 py-2 flex items-center">
            <h1 className="mr-10 text-xl text-gray-500 font-bold">
                Calender
            </h1>
            <button className="border rounded py-2 px-4 mr-5">
                Today
            </button>
            <button cursor-pointer text-gray-600 mx-2>
                <ChevronLeft />
            </button>
            <button cursor-pointer text-gray-600 mx-2>
                <ChevronRight />
            </button>
        </header>
    )
}