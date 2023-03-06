import React, { useState } from "react";

const CounterComponent = () => {

    const [count, setCount] = useState(0);
    return (
        <>
            <h1 style={{textAlign:'center',color:'blue'}}>COUNTER {count}</h1>
            <div style={{textAlign:'center'}}>
                <button onClick={()=>{setCount(count+1)}} >Icrease</button> &nbsp; &nbsp; &nbsp;
                <button onClick={()=>{setCount(count-1)}}>Decrease</button> <br/>
                <button onClick={()=>{setCount(0)}}>Reset</button>
            </div>
        </>
    );
};

export default CounterComponent;