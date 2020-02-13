const mongoose = require('mongoose');

module.exports = function() {
    const Schema = new mongoose.Schema({
        nome: {
            type: String,
            required: true,
            index: { unique: true }
        },
        celular: {
            type: String,
            required: true,
            index: { unique: true }
        }
    }, { timestamps: true });

    return mongoose.model('CornoContato', Schema, 'contato-dos-cornos');
}