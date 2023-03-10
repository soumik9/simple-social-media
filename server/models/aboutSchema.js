const mongoose = require('mongoose');

const aboutSchema = mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },    
    university: {
        type: String,
    },    
    address: {
        type: String,
    },
}, { timestamps: true });

const About = new mongoose.model("About", aboutSchema);
module.exports = About