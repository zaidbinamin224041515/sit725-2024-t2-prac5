// controllers/dbController.js
const mongoose = require('mongoose');

exports.connectToDb = async (req, res) => {
  const dbUri = req.body.dbUri;
  try {
    await mongoose.connect(dbUri);
    res.json({ status: 'Connected to MongoDB' });
  } catch (error) {
    console.error('Connection error:', error);
    res.json({ status: 'Failed to connect to MongoDB', error: error.message });
  }
};
