import {Link} from 'react-router-dom';
const NavBar = () => {
    return(
        <>
        <div style={{backgroundColor:'black'}}>
            <Link to={'/'} style={{color:'white'}}> <span> HOME </span> </Link> &nbsp; &nbsp; &nbsp;
            <Link to={'/about'} style={{color:'white'}}> <span> ABOUT </span></Link> &nbsp; &nbsp; &nbsp;
            <Link to={'/contact'} style={{color:'white'}}> <span> CONTACT </span></Link> &nbsp; &nbsp; &nbsp;
            <Link to={'*'} style={{color:'white'}}> <span> COURSES </span></Link>
        </div>
        </>
    );
}

export default NavBar;