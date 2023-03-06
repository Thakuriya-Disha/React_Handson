import React, { useState } from "react";

const CounterComponent = () => {

    const [count, setCount] = useState(0);
    return (
        <>
            <div style={{textAlign:'center'}}>
                <h1 style={{color:'white'}}> COUNTER </h1><hr/><br/>
                <h2 style={{border:'1px solid brown', width:'70px',marginLeft:'115px'}}>{count}</h2>
                <button onClick={()=>{setCount(count+1)}}>
                    <em>Increase</em>
                </button> &nbsp; &nbsp; &nbsp;
                <button onClick={()=>{if(count>0){setCount(count-1)}}}>
                    <em>Decrease</em>
                </button> <br/><br/>
                <button onClick={()=>{setCount(0)}}>
                    <strong>Reset</strong>
                </button>
            </div>
        </>
    );
};

export default CounterComponent;