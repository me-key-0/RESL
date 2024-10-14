const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
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
    password: {
      type: String,
      required: true,
    },
    pwdToken: {
      type: String,
      required: false,
    },
    refToken: {
      type: String,
    },
    role:{
      type:String,
      enum: ["admin", "user"],
      default: "user"
      
    }
  },
  employmentHistory: [
    {
      employer: {
        type: String,
      },
      position: {
        type: String,
      },
      startDate: {
        type: Date,
      },
      endDate: {
        type: Date,
      },
    },
  ],
});

const Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = Employee;
