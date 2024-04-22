import React from "react";

import { useState } from "react";

export const Sum=()=>{
    const [num1 , setNum1] = useState(null)
    const [num2 , setNum2] = useState(null)
    const [result , setResult] = useState(null)

    const handleNum1=(e)=>{
        setNum1(e.target.value)
    }

    const handleNum2=(e)=>{
        setNum2(e.target.value)
    }

    return(
        <div>
            <input
            type="number"
            placeholder="Enter number"
            value={num1}
            onChange={handleNum1}
            />
            <input
            type="number"
            placeholder="Enter number"
            value={num2}
            onChange={handleNum2}
            />
            <button onClick={()=>{setResult(parseInt(num1)+parseInt(num2))}}>Sum</button>
            <p>Result : {result}</p>
            
        </div>
    )

}