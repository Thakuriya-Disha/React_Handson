import React, { useState } from 'react';
import axios from 'axios';
const CounterTwo = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count+1);
    }
    const decrement = () => {
        setCount(count-1);
    }

    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
        if(!response.ok){
            throw new Error('network response not okay');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    })

    axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
        console.log(response.data)
    })
    .catch(error => {
        console.log(error);
    })
    
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