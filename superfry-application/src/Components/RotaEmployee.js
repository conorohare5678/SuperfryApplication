import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ActionPage = () => {
    // Initialize state for each day's shifts
    const [rotaData, setRotaData] = useState({
        Monday: { startTime: '', endTime: '', notes: '' },
        Tuesday: { startTime: '', endTime: '', notes: '' },
        Wednesday: { startTime: '', endTime: '', notes: '' },
        Thursday: { startTime: '', endTime: '', notes: '' },
        Friday: { startTime: '', endTime: '', notes: '' },
        Saturday: { startTime: '', endTime: '', notes: '' }
    });

    // Handle input changes
    const handleChange = (day, field, value) => {
        setRotaData(prev => ({
            ...prev,
            [day]: {
                ...prev[day],
                [field]: value
            }
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted Rota Data:', rotaData);
        // Here you would typically send the data to your backend
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Weekly Rota Schedule</h2>
            <Form onSubmit={handleSubmit}>
                <Table responsive bordered hover>
                    <thead className="bg-light">
                        <tr>
                            <th>Day</th>
                            <th>Start Time</th>
                            <th>End Time</th>
                            <th>Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(rotaData).map((day) => (
                            <tr key={day}>
                                <td className="align-middle">{day}</td>
                                <td>
                                    <Form.Control
                                        type="time"
                                        value={rotaData[day].startTime}
                                        onChange={(e) => handleChange(day, 'startTime', e.target.value)}
                                    />
                                </td>
                                <td>
                                    <Form.Control
                                        type="time"
                                        value={rotaData[day].endTime}
                                        onChange={(e) => handleChange(day, 'endTime', e.target.value)}
                                    />
                                </td>
                                <td>
                                    <Form.Control
                                        type="text"
                                        placeholder="Add notes..."
                                        value={rotaData[day].notes}
                                        onChange={(e) => handleChange(day, 'notes', e.target.value)}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <div className="d-flex justify-content-end">
                    <Button type="submit" variant="primary">
                        Save Rota
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default ActionPage;