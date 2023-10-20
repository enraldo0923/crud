import React, { useEffect, useState } from "react";

const Hook =(props)=>{
 const [count,setCount] = useState(props.count);
 const [name,setName] = useState("Webbrain");

 useEffect(()=>{
    console.log("case 1");
 })

useEffect(()=>{
    console.log('case 2');
},[]);
useEffect(()=>{
    setCount(props.count)
},[props.count]);

useEffect(()=>{
        console.log('case 4');
    },[name,count])
 return(
    
    <div>
        <h1>Hook Components</h1>
        <h1>Count: {count}</h1>
        <h1>Name:{name}</h1>
        <input type="text" value={name} onChange={({target})=>setName(target.value)} />
        <button onClick={()=>setCount(count + 1)}>+</button>
        <button onClick={()=>setCount(count - 1)}>-</button>

    </div>
 )
};
export default Hook;