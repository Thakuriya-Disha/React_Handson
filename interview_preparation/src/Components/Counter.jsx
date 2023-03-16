import React, {useState} from 'react';

const CounterCompo = () => {
    const[count,setCount] = useState(0);

    const increaseBy1 = () => {
        setCount(count+1);
    };

    const decreaseBy2 = () => {
        setCount(count-2);
    };

    return(
        <>
        <h1> COUNTER </h1>
        <h2> {count} </h2>
        <br/>
        <button onClick = {() => { setCount(count+5) }}> INCREASES BY 5 </button> &nbsp; &nbsp; &nbsp; &nbsp;
        <button onClick = {increaseBy1}> INCREASES BY 1 </button> <br/><br/>
        <button onClick = {() => { setCount(count-1) }}> DECREASES BY 1 </button> &nbsp; &nbsp; &nbsp; &nbsp;
        <button onClick = {decreaseBy2}> DECREASES BY 2 </button>
        </>
    );
}

export default CounterCompo;