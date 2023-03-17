import React, { useState } from 'react';

const CounterTwo = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count+1);
    }
    const decrement = () => {
        setCount(count-1);
    }
    
    return(
        <>
            <h1> COUNTER II</h1>
            <h2> This is a function-based component</h2>
            <h3> {count} </h3>
            <button onClick={increment}> Increment (onClick button)</button>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <button onMouseOver={decrement}> Decrement (onMouseOver button)</button>
        </>
    );
}
export default CounterTwo;