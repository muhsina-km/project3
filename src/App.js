import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Student from "./components/student/Student";
import Home from "./components/home/Home";
import StudentView from "./components/student/StudentView";
import Certificate from "./components/student/Certificate";
import Certificateview from "./components/student/Certificateview";


function App() {
  return (
    <div>
      
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/student' element={<Student method='post'/>}></Route>
      <Route path='/studentview' element={<StudentView method='get'/>}></Route>
      <Route path='/certificate' element={<Certificate method='post'/>}></Route>
      <Route path='/certificateview' element={<Certificateview/>}></Route>
    </Routes>
    </BrowserRouter>

    
    </div>
  );
}

export default App;
