import React from "react";
import {Link, useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import NavBar from './Nav';
import './styles.css';

function StudentDetailsTable() {
    const nav = useNavigate();

    const studentList = useSelector( (state) => state.StudentReducer.studentList );

    return(
        <>
        <NavBar />
        <br/><br/>
        <div className='flex2'>
            <h1>Student Details</h1> 
            <Link to='/editForm'> <button>Add New Student</button> </Link>
        </div>

        <table className='table'>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Batch</th>
            <th>Change</th>
        </tr>
        
        </table>
        </>
    );
}

export default StudentDetailsTable;