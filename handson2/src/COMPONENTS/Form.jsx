import { useState } from "react";
import './style.css';

const Form = () => {

    const [formState, setFormState] = useState({
        name:"",
        department:"",
        rating: 0,
        data:[]
    });

    const handleOnChange = (event) => {
        const {name, value} = event.target;
        setFormState({...formState, [name]:value});
    };

    const buttonFunc = () => {
        const saveData = {
            name: formState.name,
            department: formState.department,
            rating: formState.rating
        }
        const arr = formState.data;
        arr.push(saveData);
        setFormState({data : arr});

        formState.map( (item,index)=>{
            return(
                <div className="dataBox">
                    <div className="displayBox">
                        <span>Name: {item.name} | </span>
                        <span>Department: {item.department} | </span>
                        <span>Rating: {item.rating}</span>
                    </div>
                </div>
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
        </div>
    );
}

export default Form;