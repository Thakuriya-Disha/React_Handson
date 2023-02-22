import {Component} from "react";

class ClassCompo extends Component{
    render(){
        return(
            <div className="Box" id="rightBox">
                <h2>This is created using Class<br></br>Component</h2>
                <p className="lineOne">
                    This is done using external CSS
                </p>
                <p className="lineTwo">
                    This is done using inline CSS
                </p>
            </div>
        );
    }
}

export default ClassCompo;