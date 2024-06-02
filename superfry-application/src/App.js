import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/navbar';
import Login from './Pages/Login';
import Homepage from './Pages/Homepage';

function App() {
  return (
   <>
      <Router>
            <Navbar />
            <Routes>
                <Route path="/" component={Homepage} />
                <Route path="/login" component={Login} />
            </Routes>
        </Router>
   </>
  );
}

export default App;
