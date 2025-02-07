import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SuperfryNavbar from './Components/navbar';
import Login from './Pages/Login';
import Homepage from './Pages/Homepage';

function App() {
  return (
   <>
     <SuperfryNavbar />
      <Router>
            <Routes>
                <Route path="/" element={<Homepage/>} />
                <Route path="/login" element={<Login/>} />
            </Routes>
        </Router>
   </>
  );
}

export default App;
