import React from 'react'
import { Day } from './Day'

export const Month = ({month}) => {

    return (
        <div className="flex-1 grid grid-cols-7 grid-rows-5">
            {month.map((row, rowI) => (
                <React.Fragment key={rowI}>
                    {row.map((day, dayI) =>(
                        <Day day={day} key={dayI} rowIndex={rowI} />
                    ))}
                </React.Fragment>
            ))}
        </div>
    )
}