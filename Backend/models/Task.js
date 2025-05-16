const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
    title: { type: String, required: true },
    description: { type: String },
    dueDate: { type: Date },
    assigneeId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    status: { type: String, default: 'To Do' },
    badges: [{ type: String }],
});

module.exports = mongoose.model('Task', taskSchema);
