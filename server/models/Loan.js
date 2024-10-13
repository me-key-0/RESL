const mongoose = require('mongoose');

const LoanSchema = new mongoose.Schema({
  employeeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee',
    required: true,
  },
  loanAmount: {
    type: Number,
    required: true,
  },
  interestRate: {
    type: Number,
    required: true,
  },
  loanTerm: {
    type: String,
    required: true,
  },
  repaymentSchedule: {
    type: String,
    required: true,
  },
  purpose: {
    type: String,
    required: true,
  },
  guarantor: {
    name: {
      type: String,
      required: true,
    },
    contact: {
      phone: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
    },
    relationship: {
      type: String,
      required: true,
    },
    employmentDetails: {
      employer: {
        type: String,
        required: true,
      },
      position: {
        type: String,
        required: true,
      },
    },
    signature: {
      type: String,
    },
  },
  managerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Manager',
    required: true,
  },
});

const Loan = mongoose.model('Loan', LoanSchema);
module.exports = Loan;
