const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const login = require('./config'); 


const app = express();

app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.render('login', { title: 'Login' });
});

app.get('/signup', (req, res) => {
    res.render('signup', { title: 'Register' });
});






const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});




