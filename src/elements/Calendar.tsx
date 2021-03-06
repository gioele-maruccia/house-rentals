import React, {useState} from 'react';
import '../assets/scss/Calendar.scss';
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import {DateRange} from 'react-date-range';

function Calendar() {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    };

    function handleSelect(ranges: any) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    return (
        <div className='search'>
            <DateRange
                ranges={[selectionRange]} onChange={handleSelect}
            />
        </div>
    )
}

export default Calendar

