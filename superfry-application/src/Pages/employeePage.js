import React, { useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useNavigate} from 'react-router-dom';

const EmployeePage = () =>{

    const navigate = useNavigate();
    const token = window.localStorage.getItem('token');
    const userName = window.localStorage.getItem('userName');

    const logoutButton = () =>{
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('userName')
        navigate("/Login");
    }

    useEffect(() =>{
        if(!token || !userName){
            navigate("/Login")
        }
    })

    return(
        <>
        <div className="logout-button">
            <Button onClick={logoutButton}>Log out</Button>
        </div>
    <div className="cardContainer">
       <Card style={{ width: '18rem' }}>
         <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content. test
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
        </div>
        </>
    )
}

export default EmployeePage;