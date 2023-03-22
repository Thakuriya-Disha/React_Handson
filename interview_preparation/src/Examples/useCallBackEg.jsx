import {useState,useCallback} from 'react';

const CallbackExample = () => {
    const [count,setCount] = useState(0);
    const handleClick = useCallback(()=>{
        setCount(count+2);
    },[count])

    return(
        <>
        <h2>COUNT VALUE: {count}</h2>
        <button onClick={handleClick}>INCREASE BY 2</button> <br/>
        <ChildCompo handleClick={handleClick} />
        </>
    );
}

const ChildCompo = (props) => {
    return(
        <>
        <h2>This is the Child component</h2>
        <button onClick={props.handleClick}>Click here to Increase</button>
        </>
    );
}

export default CallbackExample;