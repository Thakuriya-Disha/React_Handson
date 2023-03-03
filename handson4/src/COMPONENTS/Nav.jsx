import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const NavBar = () => {
  return (
   <>
   <div className='flex'>
   <Link to='/' style={{textDecoration:'none'}}> <h2> Home </h2> </Link>
   <Link to='/student' style={{textDecoration:'none'}}> <h2> Student </h2> </Link>
   <Link to='/contact' style={{textDecoration:'none'}}> <h2> Contact Us </h2> </Link>
   </div>
   </>
  );
};

export default NavBar;