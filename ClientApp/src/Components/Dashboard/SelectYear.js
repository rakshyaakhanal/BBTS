import React, { useState } from "react";


const minOffset = 0;
const maxOffset = 60;

const SelectYear = () => {
    const thisYear = (new Date()).getFullYear();
    const [selectedYear, setSelectedYear] = useState('');

    const onHandleChange = (event) => {
        setSelectedYear(event.target.value);
    };


    const options = [];
    for (let i = minOffset; i <= maxOffset; i++) {
        const year = thisYear - i;
        options.push(<option value={year}>{year}</option>);
    }

    return (
        <div>
            <select value={selectedYear} onChange={onHandleChange}>
                {options}
            </select>
        </div>
    );
}
export default SelectYear;