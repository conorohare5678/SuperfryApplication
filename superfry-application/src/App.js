import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SuperfryNavbar from './Components/navbar';
import Login from './Pages/Login';
import Homepage from './Pages/Homepage';
import EmployeePage from './Pages/employeePage';
import ActionPage from './Pages/actionPage';

function App() {
  return (
    <>
      <SuperfryNavbar />
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path='/EmployeePage' element={<EmployeePage />} />
          <Route path='/ActionPage' element={<ActionPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
