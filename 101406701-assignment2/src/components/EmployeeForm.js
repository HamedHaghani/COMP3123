import React, { useState } from 'react';
import axios from 'axios';

const EmployeeForm = () => {
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [department, setDepartment] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const token = localStorage.getItem('token');
            const response = await axios.post(
                `${process.env.REACT_APP_API_BASE_URL}/api/v1/emp`,
                { name, position, department, email },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            console.log('Employee added:', response.data);
            alert('Employee added successfully!');
        } catch (error) {
            console.error('Error adding employee:', error.response?.data?.message || error.message);
            alert(error.response?.data?.message || 'Error adding employee');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Employee</h2>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Position"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                required
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <button type="submit">Add Employee</button>
        </form>
    );
};

export default EmployeeForm;
