import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate(); 

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/v1/emp`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                setEmployees(response.data);
            } catch (err) {
                console.error('Error fetching employees:', err.response?.data?.message || err.message);
                setError(err.response?.data?.message || 'Error fetching employees');
            }
        };

        fetchEmployees();
    }, []);

    const handleDelete = async (id) => {
        try {
            const token = localStorage.getItem('token');
            await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/api/v1/emp/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            
            setEmployees(employees.filter((employee) => employee._id !== id));
        } catch (err) {
            console.error('Error deleting employee:', err.response?.data?.message || err.message);
            alert(err.response?.data?.message || 'Error deleting employee');
        }
    };

    const handleEdit = (employee) => {
        
        navigate('/employees/edit', { state: { employee } });
    };

    return (
        <div>
            <h2>Employee List</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {employees.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Department</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee) => (
                            <tr key={employee._id}>
                                <td>{employee.name}</td>
                                <td>{employee.position}</td>
                                <td>{employee.department}</td>
                                <td>{employee.email}</td>
                                <td>
                                    <button onClick={() => handleEdit(employee)}>Edit</button> 
                                    <button onClick={() => handleDelete(employee._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No employees to display.</p>
            )}
        </div>
    );
};

export default EmployeeList;
