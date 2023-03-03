import ContactUs from "./COMPONENTS/Contact";
import HomePage from "./COMPONENTS/Home";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import StudentTable from "./COMPONENTS/Table";
import { useState } from "react";
import ContextData from "./ContextData";
import Edit from "./Component/Edit";

function App() {
  const [data, setData] = useState(
      [ {name :"John", age:23, course:"MERN", batch:"November"},
      {name :"Stacy", age:25, course:"MERN", batch:"November"},
      {name :"Sofia", age:23, course:"MERN", batch:"December"},
      {name :"Stephen", age:22, course:"MERN", batch:"October"},
      {name :"Lily", age:23, course:"MERN", batch:"November"},
      {name :"Harry", age:26, course:"MERN", batch:"September"},
      {name :"Ron", age:23, course:"MERN", batch:"November"} ]
    );
  
  return (
  <>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/contact' element={<ContactUs />}/>
      <Route path='/student' element={
        <ContextData.Provider value={{entries: data, updateFunction: setData}}>
          <StudentTable />
        </ContextData.Provider>
      }/>
      <Route path='/editStudent' element={
        <ContextData.Provider value={{entries:data,updateFunction:setData}}>
          <Edit />
        </ContextData.Provider>
      }/>
    </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;