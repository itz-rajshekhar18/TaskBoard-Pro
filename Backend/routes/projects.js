const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// GET /projects
router.get('/', async (req, res) => {
    const projects = await Project.find();
    res.json(projects);
});

// POST /projects
router.post('/', async (req, res) => {
    const newProject = new Project(req.body);
    await newProject.save();
    res.status(201).json(newProject);
});

// GET /projects/:projectId
router.get('/:projectId', async (req, res) => {
    const project = await Project.findById(req.params.projectId);
    if (!project) return res.status(404).send('Project not found');
    res.json(project);
});

// PUT /projects/:projectId
router.put('/:projectId', async (req, res) => {
    const updatedProject = await Project.findByIdAndUpdate(req.params.projectId, req.body, { new: true });
    if (!updatedProject) return res.status(404).send('Project not found');
    res.json(updatedProject);
});

// DELETE /projects/:projectId
router.delete('/:projectId', async (req, res) => {
    const deletedProject = await Project.findByIdAndDelete(req.params.projectId);
    if (!deletedProject) return res.status(404).send('Project not found');
    res.status(204).send();
});

// Additional project routes (GET, PUT, DELETE) can be added here

module.exports = router;
