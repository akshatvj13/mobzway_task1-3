import React from "react";
import { useState } from "react";

export const SearchBox=()=>{


    const data = [
        "United States",
        "New Zealand",
        "China",
        "India",
        "Indonesia",
        "Pakistan",
        "Brazil",
        "Nigeria",
        "Bangladesh",
        "Russia",
        "Mexico",
        "Japan",
        "Ethiopia",
        "Philippines",
        "Egypt",
        "Vietnam",
        "DR Congo",
        "Turkey",
        "Iran",
        "Germany",
        "Thailand"
    ];

    const [query,setQuery]=useState('');

    const handleQuery=(e)=>{
        setQuery(e.target.value)
    }

    const filteredData = data.filter(item =>
        item.toLowerCase().includes(query.toLowerCase())
    );

    return(
        <div>
            <input
            type="text"
            placeholder="Search here"
            value={query}
            onChange={handleQuery}
            />
            <ul style={{listStyleType:"none"}}>
                {
                    filteredData.map((i)=>(
                        <li>{i}</li>
                    ))
                }
            </ul>
        </div>
    )

}