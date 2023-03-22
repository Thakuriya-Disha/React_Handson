import React from "react";
import { useState, useEffect } from "react";

const CounterApp = (props) => {

    const [counterVal, setCounterVal] = useState(0);
    const handleClick = () => {
        setCounterVal(counterVal + 5);
    }
    const [unmountt, setUnmount] = useState(true);
    const handleUnmount = () => {
        setUnmount(!unmountt);
    }

    useEffect( ()=>{
        console.log("without dependency array");
      })
    
      useEffect( ()=>{
        console.log("useEffect hook acts like componentDidMount(). Empty dependency array passed");
      },[])
    
      useEffect( ()=>{
        console.log("useEffect hook acts like componentDidUpdate(). Dependency array passed");
      },[counterVal])

    useEffect(()=>{
        return(
            console.log("useEffect HOOK AS componentWillUnmount()")
        );
    },[unmountt])

    return(
        <>
            <h1>COUNTER USING PROPS</h1>
            <h2> {props.value.count} </h2>
            <button onClick={()=>{ props.value.setCount(props.value.count + 1)}}> INCREMENT using props by 1</button>
            <br/><br/>
            <h1>COUNTER USING STATE</h1>
            {unmountt ? <h2> {counterVal} </h2> : null}
            <button onMouseOver={handleClick}> INCREMENT using state by 5</button> <br/>
            <button onClick={handleUnmount}> Click to Unmount </button>
        </>
    );
}

export default CounterApp;