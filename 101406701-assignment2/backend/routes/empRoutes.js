const express = require('express');
const Employee = require('../models/Employee');
const router = express.Router();


router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, position, department, email } = req.body;

    try {
        const updatedEmployee = await Employee.findByIdAndUpdate(
            id,
            { name, position, department, email },
            { new: true, runValidators: true } 
        );

        if (!updatedEmployee) {
            return res.status(404).json({ message: 'Employee not found' });
        }

        res.status(200).json(updatedEmployee);
    } catch (error) {
        console.error('Error updating employee:', error.message);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;
