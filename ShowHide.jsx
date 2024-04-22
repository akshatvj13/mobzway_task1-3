import React from "react";
import { useState } from "react";

export const ShowHide =()=>{
     const [isVisible,setIsVisisble] = useState(true);

     return(
        <div>

            { isVisible && <h2> Element is Visible</h2>}
            <button onClick={()=>{setIsVisisble(!isVisible)}}>Show/Hide</button>
        </div>
     )
}