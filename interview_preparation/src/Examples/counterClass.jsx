import React, { Component } from 'react';

export class CounterOne extends Component {
    
    constructor(){
        super();
        this.state={
            count:0
        };
    }

    render(){
        return(
            <>
            <h1> COUNTER I</h1>
            <h2> This is a class-based component</h2>
            <h3> {this.state.count} </h3>
            <button onClick={() => {this.setState({count: this.state.count + 1}) }}> Increment (onClick button)</button>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <button onMouseOver={()=>{this.setState({count: this.state.count - 1}) }}> Decrement (onMouseOver button)</button>
            </>
        );
    }
}