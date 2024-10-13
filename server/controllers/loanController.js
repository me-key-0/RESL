const Loan = require('../models/Loan');

exports.applyForLoan = async (req, res) => {
  try {
    const loan = new Loan(req.body);
    await loan.save();
    res.status(201).send(loan);
  } catch (error) {
    res.status(400).send('Error applying for loan: ' + error.message);
  }
};

exports.approveLoan = async (req, res) => {
  const { managerId } = req.body;

  try {
    const loan = await Loan.findById(req.params.loanId);
    if (!loan) {
      return res.status(404).send('Loan not found');
    }
    loan.managerId = managerId;
    await loan.save();
    res.status(200).send('Loan approved successfully');
  } catch (error) {
    res.status(500).send('Error approving loan: ' + error.message);
  }
};
