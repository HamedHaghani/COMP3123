import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import EditEmployee from './components/EditEmployee'; 
import Navbar from './components/Navbar';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/employees" element={<EmployeeList />} />
                <Route path="/add-employee" element={<EmployeeForm />} />
                <Route path="/employees/edit" element={<EditEmployee />} /> {/* Edit route */}
            </Routes>
        </Router>
    );
};

export default App;
