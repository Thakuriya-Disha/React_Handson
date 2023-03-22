import { useReducer } from "react";

const ReducerHookExample = () => {
    const initial = 0;
    const reducer = (state,action) => {
        switch(action){
            case "add": return state+1;
            case "sub": return state-1;
            case "reset": return 0;
            default: return 0;
        }
    }

    const [value,dispatch] = useReducer(reducer,initial);
    
    return(
        <>
            <h2>useReducer hook example</h2>
            <h3> Value: {value} </h3>
            <button onClick={()=>{dispatch('add')}}> ADD </button> <br/><br/>
            <button onClick={()=>{dispatch('sub')}}> MINUS </button> <br/><br/>
            <button onClick={()=>{dispatch('reset')}}> RESET </button>
        </>
    );
}

export default ReducerHookExample;