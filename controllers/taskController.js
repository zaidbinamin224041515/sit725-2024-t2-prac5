// controllers/taskController.js
const Task = require('../models/taskModel');

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).send('Server Error');
  }
};

exports.addTask = async (req, res) => {
  try {
    const newTask = new Task({ name: req.body.name });
    await newTask.save();
    res.status(201).send('Task added');
  } catch (error) {
    res.status(500).send('Server Error');
  }
};
