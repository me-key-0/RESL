const express = require('express');
const { applyForLoan, approveLoan } = require('../controllers/loanController');

const router = express.Router();

// Route to apply for a loan
router.post('/', applyForLoan);

// Route to approve a loan
router.post('/approve/:loanId', approveLoan);

module.exports = router;
