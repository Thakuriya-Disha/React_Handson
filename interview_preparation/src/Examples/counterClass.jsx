import React, { Component } from 'react';

class CounterOne extends Component {
    
    constructor(props){
        super(props);
        this.state={
            count:0,
            name:"Taylor"
        }
    }

    handleClick = () => {
        this.setState( {count: this.state.count + 10} )
    }

    changeName = () => {
        this.setState( {name: "Alison"} )
    }



    render(){
        return(
            <>
            <h1> CLASS COMPONENT COUNTER </h1>
            <h2 style={{color:'green'}}> {this.state.count} </h2>
            <button onClick={this.handleClick}> INCREASE </button> <br/> <br/>
            <button onClick={()=>{this.setState({count: this.state.count-10})}}> DECREASE </button>
            <ChildClass newName={this.state.name} />
            <button onClick = {this.changeName}> CHANGE NAME </button>
            <hr/><hr/>
            <h1>PROPS VALUE: {this.props.value.count}</h1>
            <button onClick={()=>{this.props.value.setCount(this.props.value.count + 5)}}> INCREASE BY 5 </button>
            </>
        );
    }
}

class ChildClass extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <h2> {this.props.newName} </h2>
        );
    }
}

export default CounterOne;