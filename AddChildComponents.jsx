import React from "react";
import { useState } from "react";

export const AddChildComponent=()=>{
    const [component , setComponent] = useState([]);
    const [item , setItem] = useState('');

    const handleInputChange=(e)=>{
        setItem(e.target.value);
    }

    const addItem=()=>{
        setComponent([...component,item])
        setItem('');
    }

    return(
        <div>
            <input 
            type="text"
            value={item}
            onChange={handleInputChange}
            placeholder="Enter Item"
            />
            <button onClick={addItem}>Add</button>
            <ul style={{listStyleType:"none"}}>
                {component.map((i) => (
                    <li >{i}</li>
                ))
            }
            </ul>
        </div>
    )
}