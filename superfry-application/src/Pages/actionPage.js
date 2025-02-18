import Button from 'react-bootstrap/Button';
import React from "react";
import Table from 'react-bootstrap/Table';
import { useNavigate } from "react-router-dom";

const ActionPage = () => {
    const navigate = useNavigate();

    const navigatePage = () => {
        navigate('/EmployeePage')
    }

    return (
        <>
            <div>
                <div style={{ marginLeft: '50px' }}>
                    <Button variant="primary" onClick={navigatePage}> Go Back </Button>
                </div>
                <Table responsive="sm">
                    <thead>
                        <tr>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Status</th>
                            <th>Create Schedule</th>
                        </tr>
                    </thead>
                </Table>
            </div >
        </>
    )

}

export default ActionPage;