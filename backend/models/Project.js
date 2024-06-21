const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    deadline: { type: Date, required: true },
    completed: { type: Boolean, default: false }
});

module.exports = mongoose.model('Task', projectSchema);