import React from "react";
import { useState } from "react";

export const TwoWayBinding = ()=>{

    const [inputValue , setInputValue] = useState('');

    const handleInputChange=(e)=>{

        setInputValue(e.target.value);

    };
    
    return(
        <div>
            <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            
            />
            <p>Value : {inputValue}</p>
        </div>
    )
}