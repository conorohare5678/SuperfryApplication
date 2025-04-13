import Button from 'react-bootstrap/Button';
import React, { useState } from "react";
import Table from 'react-bootstrap/Table';
import { useNavigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';

const ActionPage = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigatePage = () => {
        navigate('/EmployeePage')
    }

    return (
        <>
            <div>
                <div style={{ display: 'flex', marginLeft: '20px', gap:'10px'}}>
                    <Button variant="primary" onClick={navigatePage}> Go Back </Button>
                    <Button variant="primary" onClick={handleShow}>Add Employee</Button>
                </div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Employee</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                        <label>Firstname</label>
                        <input required/>
                        <label>Lastname</label>
                        <input required/>
                        <label>Status</label>
                        <select required>
                            <option value="" disabled selected>Please select one</option>
                            <option>Avaliable</option>
                            <option>Unavaliable</option>
                            <option>Unknown</option>
                        </select>
                        </div>
                       
                        
                    </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                                </Button>
                            <Button variant="primary" onClick={handleClose}>
                                Save Changes
                                </Button>
                        </Modal.Footer>
                </Modal>

                <Table responsive="sm">
                    <thead>
                        <tr>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Status</th>
                            <th>Create Schedule</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user.map(DisplayEmp =>{
                            <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            </tr>
                        })}
                    </tbody>
                </Table>
            </div >
        </>
    )

}

export default ActionPage;