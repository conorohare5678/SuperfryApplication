import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SuperfryNavbar from './Components/navbar';
import Login from './Pages/Login';
import Homepage from './Pages/Homepage';
import EmployeePage from './Pages/employeePage';

function App() {
  return (
   <>
     <SuperfryNavbar />
      <Router>
            <Routes>
                <Route path="/" element={<Homepage/>} />
                <Route path="/login" element={<Login/>} />
                <Route path='/EmployeePage' element={<EmployeePage/>}/>
            </Routes>
        </Router>
   </>
  );
}

export default App;
