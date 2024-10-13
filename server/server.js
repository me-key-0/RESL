const express = require('express');
const connectDB = require('./config/db');
const employeeRoutes = require('./routes/employeeRoutes');
const loanRoutes = require('./routes/loanRoutes');
const managerRoutes = require('./routes/managerRoutes');

const app = express();
connectDB();

app.use(express.json());

app.use('/api/employees', employeeRoutes);
app.use('/api/loans', loanRoutes);
app.use('/api/managers', managerRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
