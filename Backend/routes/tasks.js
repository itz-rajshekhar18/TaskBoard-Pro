const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// GET /projects/:projectId/tasks
router.get('/:projectId/tasks', async (req, res) => {
    const tasks = await Task.find({ projectId: req.params.projectId });
    res.json(tasks);
});

// POST /projects/:projectId/tasks
router.post('/:projectId/tasks', async (req, res) => {
    const newTask = new Task({ ...req.body, projectId: req.params.projectId });
    await newTask.save();
    res.status(201).json(newTask);
});

// GET /tasks/:taskId
router.get('/:taskId', async (req, res) => {
    const task = await Task.findById(req.params.taskId);
    if (!task) return res.status(404).send('Task not found');
    res.json(task);
});

// PUT /tasks/:taskId
router.put('/:taskId', async (req, res) => {
    const updatedTask = await Task.findByIdAndUpdate(req.params.taskId, req.body, { new: true });
    if (!updatedTask) return res.status(404).send('Task not found');
    res.json(updatedTask);
});

// DELETE /tasks/:taskId
router.delete('/:taskId', async (req, res) => {
    const deletedTask = await Task.findByIdAndDelete(req.params.taskId);
    if (!deletedTask) return res.status(404).send('Task not found');
    res.status(204).send();
});

module.exports = router;
