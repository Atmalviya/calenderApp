import GlobalContext from '@/context/globalContext';
import dayjs from 'dayjs';
import { ChevronLeft } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import { useContext } from 'react';
import { Button } from './ui/button';



export const CalenderHeader = () => {
    const { monthIndex, setMonthIndex,  } = useContext(GlobalContext)
    const handlePrevMonth = () => {
        setMonthIndex(monthIndex - 1)
    }
    const handleNextMonth = () => {
        setMonthIndex(monthIndex + 1)
    }
    const handleReset = () => {
        setMonthIndex(dayjs().month())
    }
    return (
        <header className="px-4 py-2 flex items-center">
            <h1 className="mr-10 text-xl text-gray-500 font-bold">
                Event Calender
            </h1>
            <Button variant="outline"  className="border-gray-300 rounded py-2 px-4 mr-5" onClick={handleReset}>
                Today
            </Button>
            <Button variant="ghost" className='cursor-pointer text-gray-600 mx-2' onClick={handlePrevMonth}>
                <ChevronLeft />
            </Button>
            <Button variant="ghost" className='cursor-pointer text-gray-600 mx-2' onClick={handleNextMonth}> 
                <ChevronRight />
            </Button>
            <h2 className='ml-4 text-xl text-gray-500 font-bold'>
                {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
            </h2>
        </header>
    )
}