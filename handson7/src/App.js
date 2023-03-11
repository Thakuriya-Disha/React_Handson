import ContactUs from "./COMPONENTS/Contact";
import HomePage from "./COMPONENTS/Home";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import StudentDetailsTable from "./Components/StudentTable";
import DetailsForm from "./Components/DetailsForm";

function App() {
  
  return (
  <>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/contact' element={<ContactUs />}/>
      <Route path='/student' element={<StudentDetailsTable />}/>
      <Route path='/editForm' element={<DetailsForm />}/>
      <Route path='/editForm/:id' element={<DetailsForm />}/>
    </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;