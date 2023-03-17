import React from 'react';
import HocExampleCompo from './HOC';

const ClickCompo = ({count,increment}) => {
    return(
        <>  
            <h2> {count} </h2>
            <button onClick = {increment}> clicked {count} times </button> 
        </>
    );
};

export default HocExampleCompo(ClickCompo);