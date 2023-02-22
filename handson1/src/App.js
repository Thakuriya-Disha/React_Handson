import './COMPONENTS/styling.css'
import {useState} from 'react';
import FuncCompo from './COMPONENTS/functionComponent';
import ClassCompo from './COMPONENTS/classComponent';

function App() {
  const [clickFunc, setClickFunc] = useState(false);

  const [functClick, setFunctClick] = useState(false);

  return (
    <div>
      <h1>Styling using Functional and Class Components</h1>
      <br></br><br></br><br></br>
      <button id="btn1" onClick={()=>{setClickFunc(!clickFunc);}}>
        <span>To see styling in functional component</span>
      </button>
      <button id="btn2" onClick={()=>{setFunctClick(!functClick);}}>
      <span>To see styling in class component</span>
      </button>
      <div className="row">
        {clickFunc && <FuncCompo />}
        {functClick && <ClassCompo />}
      </div>
    </div>
  );
}

export default App;