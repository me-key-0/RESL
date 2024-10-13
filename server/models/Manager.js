const mongoose = require('mongoose');

const ManagerSchema = new mongoose.Schema({
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
  },
  loansGuaranteed: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Loan',
  }],
});

const Manager = mongoose.model('Manager', ManagerSchema);
module.exports = Manager;
