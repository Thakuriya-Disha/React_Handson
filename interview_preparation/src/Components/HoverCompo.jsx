import React from 'react';
import HocExampleCompo from './HOC';

const HoverCompo = ({count,increment}) => {
    return(
        <>
            <h2> {count} </h2>
            <button onMouseOver = {increment}> hovered {count} times </button> 
        </>
    );
};

export default HocExampleCompo(HoverCompo);