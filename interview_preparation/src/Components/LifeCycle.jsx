import React, { Component } from 'react';
class LifeCycleExampleCompo extends Component {
    
    constructor(){
        super();
        this.state={
            num:26,
            show:true
        }
        console.log('the constructor method gets called first');
    }

    componentDidMount(){
        console.log('componentDidMount is called in the mounting phase after the render method');
    }

    componentDidUpdate(){
        console.log('componentDidUpdate method got called after render');
    }

    shouldComponentUpdate(){
        console.log('shouldComponentUpdate method called');
        return(true);
    }

    render(){
        console.log('render method got called');
        return(
            <>
                Current Value of the State Variable: {this.state.num}
                <br/><br/>
                <button onClick={ () => {this.setState( {num: this.state.num + 1} ) }}> Click Here </button>
                <br/><br/>
                {this.state.show ? <ChildLifeCycle /> : null} <br/><br/>
                <button onClick = { ()=>{this.setState( {show: !this.state.show}) }}> Click Here to Unmount / Mount </button>
            </>
        )
    }
}
export default LifeCycleExampleCompo;

class ChildLifeCycle extends Component{
    componentWillUnmount(){
        console.log('component will unmount');
    }

    render(){
        return(
            <>
                I am the Child Component
            </>
        )
    }
}