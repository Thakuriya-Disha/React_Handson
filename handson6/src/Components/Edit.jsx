import React from 'react';
import { useContext } from 'react';
import ContextData from '../ContextData';
import { useNavigate, useLocation } from 'react-router-dom';
import NavBar from "./Nav";
import './styles.css';

const Edit = () => {

  const editDetail = useContext(ContextData);
  const index = useLocation().state.data;
  const nav = useNavigate();

  const updateObj = {
    name: editDetail.entries[index].name,
    age: editDetail.entries[index].age,
    course: editDetail.entries[index].course,
    batch: editDetail.entries[index].batch
  }

  const handleOnChange = (event) => {
    updateObj[event.target.name] = [event.target.value];
  }

  const handleOnUpdate = () => {
    editDetail.entries[index] = updateObj;
    nav('/student');
  }

  const handleOnCancel = () => {
    nav('/student');
  }

  return (
    <>
    <NavBar />
    
      <fieldset>
        <legend> Name </legend>
        <input type='text' name='Name' onChange={handleOnChange} placeholder={ editDetail.entries[index].name} />
      </fieldset> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <fieldset>
        <legend> Age </legend>
        <input type='text' name='Age' placeholder={ editDetail.entries[index].age} onChange={handleOnChange}/>
      </fieldset>
      <br/><br/><br/>
      <fieldset>
        <legend> Course </legend>
        <input type='text' name='Course' placeholder={ editDetail.entries[index].course} onChange={handleOnChange}/>
      </fieldset> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <fieldset>
        <legend> Batch </legend>
        <input type='text' name='Batch' placeholder={ editDetail.entries[index].batch} onChange={handleOnChange}/>
      </fieldset>
      <br/><br/><br/>
      <div className='buttons'>
        <button onClick={handleOnCancel}> Cancel </button>
        &nbsp; &nbsp; &nbsp;
        <button onClick={handleOnUpdate}> Update </button>
      </div>

    </>
  );
};

export default Edit;
