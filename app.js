const express = require('express'); // I need the package in this file.

const app = express(); // Now I can create routes in a simpler way.

// Routes

app.get('/', (req, res) => {
    res.send('We are running');
});

app.listen(3000); // I've gotta start listening to the server.

