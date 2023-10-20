import React, { useReducer, useState } from "react";

const Hook =(props)=>{
 const [count,setCount] = useState(0);
 const [name,setName] = useState("Webbrain");


 // use reduser 
 const [counter,dispatch]= useReducer((state,action)=>{
    switch (action.type) {
        case "plus" : return state +1 ;
        case "minus" : return state +1 ;
        case "byamont" : return state + action.payload;
        default : return state;
            
    }
    
 },0 )



 
 return(
    
    <div>
        <h1>Hook Components</h1>
        <h1>Count: {count}</h1>
        <h1>Counter:{counter}</h1>
        <button onClick={()=>dispatch({type:"plus"})}>+</button>
        <button onClick={()=>dispatch({type:"minus"})}>-</button>
        <button onClick={()=>dispatch({type:"byamont",payload : 5})}>5</button>

        <br />
        <input type="text" value={name} onChange={({target})=>setName(target.value)} />
        <button onClick={()=>setCount(count + 1)}>+</button>
        <button onClick={()=>setCount(count - 1)}>-</button>

    </div>
 )
};
export default Hook;