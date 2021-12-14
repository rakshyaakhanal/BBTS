import React, { useState } from "react";

const SelectShow = () => {
    const [selectedClient,setSelectedClient] = useState([]);

    function handleSelectChange(event) {
        setSelectedClient(event.target.value);
    }

    return (
        <select value={selectedClient} onChange={handleSelectChange}> 
            <option value="all">All</option>
            <option value="1month">1 Month</option>
            <option value="2month">2 Month</option>
            <option value="3month">3 Month</option>
            <option value="4month">4 Month</option>
            <option value="5month">5 Month</option>
            <option value="6month">6 Month</option>
            <option value="7month">7 Month</option>
            <option value="8month">8 Month</option>
            <option value="9month">9 Month</option>
            <option value="10month">10 Month</option>
            <option value="11month">11 Month</option>
            <option value="1year">1 Year</option>
            <option value="2year">2 Year</option>
            <option value="3year">3 Year</option>
            <option value="4year">4 Year</option>
            <option value="5year">5 Year</option>
        </select>
    )
}

export default SelectShow;