const mongoose = require('mongoose');

const calendarSchema = new mongoose.Schema({
    event: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Calendar', calendarSchema);