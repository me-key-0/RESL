const express = require('express');
const connectDB = require('./config/db');
const employeeRoutes = require('./routes/employeeRoutes');
const loanRoutes = require('./routes/loanRoutes');


const app = express();

const PORT = process.env.PORT || 3040;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

connectDB();

app.use(express.json());

app.use('/employees', employeeRoutes);
app.use('/loans', loanRoutes);


