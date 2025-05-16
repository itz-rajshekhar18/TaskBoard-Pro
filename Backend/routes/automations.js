const express = require('express');
const router = express.Router();
const Automation = require('../models/Automation');

// GET /projects/:projectId/automations
router.get('/:projectId/automations', async (req, res) => {
    const automations = await Automation.find({ projectId: req.params.projectId });
    res.json(automations);
});

// POST /projects/:projectId/automations
router.post('/:projectId/automations', async (req, res) => {
    const newAutomation = new Automation({ ...req.body, projectId: req.params.projectId });
    await newAutomation.save();
    res.status(201).json(newAutomation);
});

// Additional automation routes (GET, PUT, DELETE) can be added here

// GET /automations/:automationId
router.get('/:automationId', async (req, res) => {
    const automation = await Automation.findById(req.params.automationId);
    if (!automation) return res.status(404).send('Automation not found');
    res.json(automation);
});

// PUT /automations/:automationId
router.put('/:automationId', async (req, res) => {
    const updatedAutomation = await Automation.findByIdAndUpdate(req.params.automationId, req.body, { new: true });
    if (!updatedAutomation) return res.status(404).send('Automation not found');
    res.json(updatedAutomation);
});

// DELETE /automations/:automationId
router.delete('/:automationId', async (req, res) => {
    const deletedAutomation = await Automation.findByIdAndDelete(req.params.automationId);
    if (!deletedAutomation) return res.status(404).send('Automation not found');
    res.status(204).send();
});

module.exports = router;
