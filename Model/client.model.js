const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    nom: String,
    email: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);