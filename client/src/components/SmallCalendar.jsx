import React, { useContext, useEffect, useState } from 'react'
import { getMonth } from '../../utils'
import dayjs from 'dayjs'
import { Button } from './ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import GlobalContext from '@/context/globalContext'

export const SmallCalendar = () => {
    const [currentMonthIndex, setCurrentMonthIndex] = useState(dayjs().month())
    const [currentMonth, setCurrentMonth] = useState(getMonth())
    const { monthIndex, setSmallCalendarMonth, daySelected, setDaySelected } = useContext(GlobalContext)

    useEffect(() => {
        setCurrentMonth(getMonth(currentMonthIndex))
    }, [currentMonthIndex])

    useEffect(() => {
        setCurrentMonthIndex(monthIndex)
    }, [monthIndex])

    const handlePrevMonth = () => {
        setCurrentMonthIndex(currentMonthIndex - 1)
    }
    const handleNextMonth = () => {
        setCurrentMonthIndex(currentMonthIndex + 1)
    }
    const getDayClass = (day) => {
        const nowDay = dayjs().format('DD-MM-YY')
        const currDay = day.format('DD-MM-YY')
        const selectedDay = daySelected && daySelected.format('DD-MM-YY')
        if (nowDay === currDay){
            return 'bg-blue-600 text-white rounded-full'
        }else if(currDay === selectedDay){
            return 'bg-blue-100 text-blue-600 rounded-full font-bold'
        }else {
            return null
        }
    }
    return (
        <div className='mt-9'>
            <header className='flex items-center justify-between'>
                <p className='text-gray-500 font-bold'>
                    {dayjs(new Date(dayjs().year(), currentMonthIndex)).format("MMMM YYYY")}
                </p>
                <div>
                    <Button variant="ghost" className='cursor-pointer text-gray-600' onClick={handlePrevMonth}>
                        <ChevronLeft />
                    </Button>
                    <Button variant="ghost" className='cursor-pointer text-gray-600' onClick={handleNextMonth}>
                        <ChevronRight />
                    </Button>
                </div>
            </header>
            <div className="grid grid-cols-7 grid-rows-6">
                {currentMonth[0].map((day, dayI) => (
                    <span key={dayI} className='text-sm py-1 text-center'>
                        {day.format('dd').charAt(0)}
                    </span>
                ))}
                {currentMonth.map((row, rowI) => (
                    <React.Fragment key={rowI}>
                        {row.map((day, dayI) => (
                            <Button 
                                variant='ghost' 
                                key={dayI} 
                                className={` py-1 w-full ${getDayClass(day)}`} 
                                onClick={() => {
                                    setSmallCalendarMonth(currentMonthIndex)
                                    setDaySelected(day)
                                    }}>
                                <span className='text-sm'>{day.format('D')}</span>
                            </Button>
                        ))}
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}