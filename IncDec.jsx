import React from "react";
import { useState } from "react";

export const IncDec=()=>{
    const[Counter,SetCounter] = useState(0);

    const Increment=()=>{
        SetCounter(Counter+1)
    }
    const Decrement =()=>{
        SetCounter(Counter-1)
    }

    return(
        <div>

        <h2>{Counter}</h2>

        <button onClick={Increment} >Increment</button>
        <button onClick={Decrement} >Decrement</button>

        </div>
    )
}