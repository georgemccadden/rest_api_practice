// Importing the package that I need in this file.

const express = require('express');


// Now I can create routes in a simpler way.

const app = express();
const mongose = require('mongoose');


// Middlewares

// app.use('/posts', () => {
//     console.log('This is working middleware..');
// });


// Routes

app.get('/', (req, res) => {
    res.send('We are running');
});

app.get('/posts', (req, res) => {
    res.send('We are posting');
});


// Connecting to Database
mongoose.connect('')

// I've gotta start listening to the server.

app.listen(3000);

