const express = require('express');
const { createEmployee, getEmployees } = require('../controllers/employeeController');

const router = express.Router();

// Route to create a new employee
router.post('/', createEmployee);

// Route to get all employees
router.get('/', getEmployees);

module.exports = router;
