import { useState } from "react";
import './style.css';
import DisplayBox from "./DisplayBox";
const Form = () => {

    const [formState, setFormState] = useState({
        name:"",
        department:"",
        rating: 0
    });

    const handleOnChange = (event) => {
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
                <label> Name: &nbsp; &nbsp;
                    <input type={"text"} name={"fullname"} value={formState.name} onChange={handleOnChange} />
                </label>
                <br/><br/>
                <label> Department: &nbsp; &nbsp;
                    <input type={"text"} name={"department"} value={formState.department} onChange={handleOnChange} />
                </label>
                <br/><br/>
                <label> Rating: &nbsp; &nbsp;
                    <input type={"number"} name={"rating"} value={formState.rating} onChange={handleOnChange} />
                </label>
                <br/><br/><br/><br/>
                <button type="submit" onClick={buttonFunc}>Submit</button>
            </form>
            <hr/>
        </div>
    );
}

export default Form;