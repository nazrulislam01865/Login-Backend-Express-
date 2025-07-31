const mongoose = require('mongoose');
const connect = mongoose.connect('mongodb://localhost:27017/ECommerce');

connect.then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB:', err);
});

const loginSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
});


const login = new mongoose.model('users', loginSchema);
module.exports = login;
