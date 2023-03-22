import axios from "axios";
import React, { useMemo, useState, useRef, useEffect } from "react";
import { Routes,Route,Link } from "react-router-dom";
import HomeComponent from "./Components/Home";
import ContactComponent from './Components/Contact';
import AboutUsComponent from './Components/About';
import CompoNotFound from './Components/NotFound';
import CallbackExample from "./Examples/useCallBackEg";
import ReducerHookExample from './Examples/useReducerExample';

function App() {

  fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((response) => {
        if(!response.ok){
          throw new Error('Network response not ok');
        }
        return response.json();
      })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  })

  axios.get('https://jsonplaceholder.typicode.com/todos/2')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  })

  const [num1,setNumOne] = useState(0);
  const [num2,setNumTwo] = useState(0);
  const result = useMemo(()=>{
    console.log("Calculating product of squares...")
    return num1*num1*num2*num2;
  },[num1,num2]);

  const [inputValue,setInputValue] = useState("");
  const count = useRef(0);

  useEffect(()=>{
    count.current = count.current + 1;
  })

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  }

  return (
    <div className="App">
      <ul>
        <li><Link to='/'> HOME </Link></li>
        <li><Link to='/about'> ABOUT </Link></li>
        <li><Link to='/contact/1'> CONTACT </Link></li>
      </ul>

        <Routes>
          <Route path='/' element={<HomeComponent />} />
          <Route path='/about' element={<AboutUsComponent />} />
          <Route path='/contact' element={<ContactComponent />} />
          <Route path='*' element={<CompoNotFound />} />
        </Routes>

        <div>Final Answer: ({num1}^2) * ({num2}^2) = {result}</div>
        <button onClick={()=>setNumOne(num1+1)}>INCREMENT NUM 1</button> &nbsp; &nbsp; &nbsp;
        <button onClick={()=>setNumTwo(num2+1)}>INCREMENT NUM 2</button>
        <hr/>
        <CallbackExample/>
        <hr/>
        <h1>useRef Example</h1>
        <input type='text' value={inputValue} onChange={handleOnChange} /> <br/>
        <h3>No. of Renders = {count.current} </h3>
        <hr/>
        <ReducerHookExample />
    </div>
  );
}

export default App;