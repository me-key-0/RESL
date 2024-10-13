const Manager = require('../models/Manager');

exports.createManager = async (req, res) => {
  try {
    const manager = new Manager(req.body);
    await manager.save();
    res.status(201).send(manager);
  } catch (error) {
    res.status(400).send('Error creating manager: ' + error.message);
  }
};
