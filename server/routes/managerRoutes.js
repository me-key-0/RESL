const express = require('express');
const { createManager } = require('../controllers/managerController');

const router = express.Router();

// Route to create a new manager
router.post('/', createManager);

module.exports = router;
