import { useState } from "react";
import './style.css';
import DisplayBox from "./DisplayBox";
const Form = () => {

    const [formState, setFormState] = useState({
        name:"",
        department:"",
        rating: 0
    });

    const handleOnSubmit = (event) => {
        const {name, value} = event.target;
        setFormState({...formState, [name]:value});
    };

    const buttonFunc = () => {
        formState.map( (item,index)=>{
            return(
                <DisplayBox Name={item.name} Department={item.department} Rating={item.rating} />
            );  
        });
    };

    return(
        <div>
            <h1>Employee Feedback Form</h1>
            <form>
                <label> Name:
                    <input type={"text"} name={"fullname"} value={formState.name} onSubmit={handleOnSubmit} />
                </label>
                <br/><br/>
                <label> Department:
                    <input type={"text"} name={"department"} value={formState.department} onSubmit={handleOnSubmit} />
                </label>
                <br/><br/>
                <label> Rating:
                    <input type={"number"} name={"rating"} value={formState.rating} onSubmit={handleOnSubmit} />
                </label>
                <br/><br/><br/><br/>
                <button type="submit" onClick={buttonFunc}>Submit</button>
            </form>
            <hr/>
        </div>
    );
}

export default Form;