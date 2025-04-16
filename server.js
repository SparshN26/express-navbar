// server.js

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// add any necessary code you'd want to!
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));



//root
app.get('/', (req, res) => {
    // your nav bar is on index.html
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})


// Route for Climate Crisis
app.get("/climate-crisis", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'climate-crisis', 'index.html'));
});

// Route for Typesetting
app.get("/typesetting", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'typesetting', 'index.html'));
});

// Route for Four Algorithms
app.get("/four-algorithms", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'four-algorithms', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});