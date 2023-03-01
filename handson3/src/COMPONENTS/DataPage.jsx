import './style.css';
const DataPage = (props) => {
    return(
        <>
        <h1>EMPLOYEE FEEDBACK DATA</h1>

        <div className="dataBox">
            {
                props.empData.map( (item,index)=>{
                return(
                    <div className="displayBox">
                        <span>Name: {item.name} | </span>
                        <span>Department: {item.department} | </span>
                        <span>Rating: {item.rating}</span>
                    </div>
                );
                })
            }
        </div>
        <button onClick={props.goBack}> GO BACK </button>
        </>
    );
}

export default DataPage;