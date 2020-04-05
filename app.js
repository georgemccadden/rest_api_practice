// Importing the package that I need in this file.

const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');


// Now I can create routes in a simpler way.

const app = express();


// Middlewares
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);


// Routes

app.get('/', (req, res) => {
    res.send('We are running');
});


// Connecting to Database
mongoose.connect(process.env.DATABASE_CONNECTION,
    { useNewUrlParser: true, 
        useUnifiedTopology: true }, 
    () => {
    console.log('connected to Database!');
});

// I've gotta start listening to the server.

app.listen(3000);

