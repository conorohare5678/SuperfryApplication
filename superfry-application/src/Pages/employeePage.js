import React, { useEffect, useState } from "react";
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const EmployeePage = () => {

    const navigate = useNavigate();
    const token = window.localStorage.getItem('token');
    const userName = window.localStorage.getItem('userName');
    const [employee, setEmployee] = useState([])

    const logoutButton = () => {
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('userName')
        navigate("/Login");
    }

    const navigateActionPage = () => {
        navigate('/ActionPage')
    }
    useEffect(() => {

        axios.get('http://localhost:5322/getEmployeeInfo')
            .then(employee => setEmployee(employee.data))
            .catch(err => console.log(err))


        if (!token || !userName) {
            navigate("/Login")
        }


    })

    return (
        <>
            <div className="logout-button">
                <Button onClick={logoutButton}>Log out</Button>
            </div>
            <div className="cardContainer">
                {employee.map(EmployeePage => (
                    <Card key={EmployeePage._id} style={{ width: '18rem' }}>
                        <Card.Img className="cardIMG" variant="top" src={EmployeePage.imageURL} />
                        <Card.Body>
                            <Card.Title>{EmployeePage.name}</Card.Title>
                            <Card.Text>
                                {EmployeePage.text}
                            </Card.Text>
                            <Button variant="primary" onClick={navigateActionPage}>Go somewhere</Button>
                        </Card.Body>
                    </Card>
                ))}

            </div>
        </>
    )
}

export default EmployeePage;