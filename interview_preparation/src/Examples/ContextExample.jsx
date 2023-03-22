import React, {useState, useContext, createContext} from "react";

let context = createContext();

const Parent = () => {
    const [fname,setFname] = useState('Taylor');
    const [lname,setLname] = useState('Swift');
    
    return(
        <context.Provider value={{fname,lname}}>
            <h1> This is the Parent component </h1>
            <ChildA />
        </context.Provider>
    );
}

function ChildA() {
    return(
        <>
            <h2> This is Child A component </h2>
            <ChildB />
        </>
    );
}

function ChildB() {
    return(
        <>
            <h2> This is Child B component </h2>
            <ChildC />
        </>
    );
}

function ChildC() {
    const {fname,lname} = useContext(context);

    return(
        <>
            <h2> This is Child C component </h2>
            <h3> Data from Parent component inside Child C:<br/>
                {fname} {lname}
            </h3>
        </>
    );
}

export default Parent;