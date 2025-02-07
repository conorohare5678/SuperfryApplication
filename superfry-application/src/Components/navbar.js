import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/Superfry.PNG";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const SuperfryNavbar = () => {
    return (
        <div className="NavBar-header">
            
            <Navbar data-bs-theme="light" className="background-custom-g">
        <Container>
        <img src={Logo} alt="Logo" />
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Login">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </div>
    
  
    );
};

export default SuperfryNavbar;
