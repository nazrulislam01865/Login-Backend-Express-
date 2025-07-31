const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const login = require('./config'); 


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.render('login', { title: 'Login' });
});

app.get('/signup', (req, res) => {
    res.render('signup', { title: 'Register' });
});

app.post('/signup', async (req, res) => {
    const data = {
        email : req.body.email,
        password : req.body.password,
    }

    const existingUser = await login.findOne({ email: data.email });
    if (existingUser) {
        return res.status(400).send('User already exists');
    }else if(!existingUser){
        const hashedPassword = await bcrypt.hash(data.password, 10);
        data.password = hashedPassword;
        const userdata = await login.insertMany(data);
        console.log(userdata);

    }


});


app.post('/login', async (req, res) => {
    try{
        const check = await login.findOne({ email: req.body.email });
        if (check) {
            const isMatch = await bcrypt.compare(req.body.password, check.password);
            if (isMatch) {
                res.status(200).send('Login successful');
            } else {
                res.status(400).send('Invalid password');
            }
        } else {
            res.status(400).send('User not found');
        }

    }catch (error) {
        console.error('Error during login:', error);
        res.status(500).send('Internal server error');
    }
    
});





const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});




