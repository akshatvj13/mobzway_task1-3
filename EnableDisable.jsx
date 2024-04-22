import React from "react";
import { useState } from "react";

export const EnableDisable=()=>{
    const [isEnable , setIsEnable] = useState(true);

    return(
        <div>
            <button onClick={()=>setIsEnable(!isEnable)} disabled={isEnable}>Enable</button>
            <button onClick={()=>setIsEnable(!isEnable)} disabled={!isEnable}>Disable</button>
        </div>
    )
}