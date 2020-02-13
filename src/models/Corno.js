const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    ip: {
        type: String,
        required: true,
        index: true,
        unique: true
    },
    country: {
        type: String,
        required: true
    },
    countryCode: {
        type: String,
        required: true
    },
    regionName: {
        type: String,
        required: true
    },
    region: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    timezone: {
        type: String
    },
    zip: {
        type: String
    },
    lat: {
        type: Number
    },
    lon: {
        type: Number
    },
    isp: {
        type: String
    },
    org: {
        type: String
    },
    as: {
        type: String
    }
}, { timestamps: true });

module.exports = mongoose.model('Corno', Schema);
