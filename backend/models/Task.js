const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    frequency: {
        type: String,
        enum: [
            'daily', 'weekly', 'monthly', 'once'
        ],
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Task', taskSchema);

