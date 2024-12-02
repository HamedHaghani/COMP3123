import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const EditEmployee = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { employee } = location.state; 

    const [name, setName] = useState(employee.name);
    const [position, setPosition] = useState(employee.position);
    const [department, setDepartment] = useState(employee.department);
    const [email, setEmail] = useState(employee.email);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const token = localStorage.getItem('token');
            await axios.put(
                `${process.env.REACT_APP_API_BASE_URL}/api/v1/emp/${employee._id}`,
                { name, position, department, email },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            alert('Employee updated successfully!');
            navigate('/employees'); 
        } catch (err) {
            console.error('Error updating employee:', err.response?.data?.message || err.message);
            alert(err.response?.data?.message || 'Error updating employee');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Edit Employee</h2>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Position:</label>
                <input
                    type="text"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Department:</label>
                <input
                    type="text"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Save Changes</button>
        </form>
    );
};

export default EditEmployee;
