import React from "react";

const HigherOrderCompo = (props) => {
    return (
        <>
            <h1 style={{color:'blue'}}>Higher Order Component</h1>
            <div style={{display:'flex', justifyContent:'space-around', width:'850px'}}>
                <div style={{backgroundColor:"orchid", width: "200px", color:'green'}}>
                    <props.data />
                </div>
                <div style={{backgroundColor:"coral", width: "200px", color:'green'}}>
                    <props.data />
                </div>
            </div>
        </>
    );
};

export default HigherOrderCompo;