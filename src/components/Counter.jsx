import { useState } from "react";

export function Counter(){
    const [counter, setCounter]  = useState(4);
    
    function increment(){ 
        setCounter(counter + 1);
    }
    function decrement(){ 
        setCounter(counter - 1);
    }


    return(
       <div>
           <h2>{counter}</h2>
           <button type="button" onClick={increment}>increment</button>
           <button type="button" onClick={decrement}>decrement</button>
       </div> 
    )
}