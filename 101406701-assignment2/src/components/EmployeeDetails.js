import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EmployeeDetails = () => {
    const { id } = useParams();
    const [employee, setEmployee] = useState(null);

    useEffect(() => {
        const fetchEmployee = async () => {
            try {
                const response = await axios.get(`/api/employees/${id}`, {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
                });
                setEmployee(response.data);
            } catch (error) {
                console.error(error.response?.data?.message || 'Error fetching employee');
            }
        };
        fetchEmployee();
    }, [id]);

    if (!employee) return <p>Loading...</p>;

    return (
        <div>
            <h2>Employee Details</h2>
            <p>Name: {employee.name}</p>
            <p>Position: {employee.position}</p>
        </div>
    );
};

export default EmployeeDetails;
