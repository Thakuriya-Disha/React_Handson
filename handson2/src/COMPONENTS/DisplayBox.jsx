
const DisplayBox = (props) => {
    return(
        <div className="dataBox">
            <div className="displayBox">
                <p>
                    Name : {props.name} | Department : {props.department} | Rating : {props.rating}
                </p>
            </div>
        </div>    
    );
}

export default DisplayBox;