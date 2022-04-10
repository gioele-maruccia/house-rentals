import React, {useState} from 'react';
import '../assets/scss/Search.scss';
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from 'react-date-range';

function Search(){

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    };

    /*: { selection: { startDate: React.SetStateAction<Date>; endDate: React.SetStateAction<Date>; }; }*/
    function handleSelect(ranges:any) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    // @ts-ignore
    return(
        <div className='search'>
            <DateRangePicker 
                ranges={[selectionRange]} onChange={handleSelect}
            />
        </div>
    )
}

export default Search