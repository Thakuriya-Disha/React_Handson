import HomeComponent from './Components/Home';
import ContactComponent from './Components/Contact';
import AboutUsComponent from './Components/About';
import CoursesComponent from './Components/Courses';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const RoutesFile = () => {
    return(
        <>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeComponent/>} />
          <Route path='/contact' element={<ContactComponent/>} />
          <Route path='/about' element={<AboutUsComponent/>} />
          <Route path='*' element={<CoursesComponent/>} />
        </Routes>
        </BrowserRouter>
        </>
    );
}
export default RoutesFile;