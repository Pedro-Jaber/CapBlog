require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts');

const { connectDB } = require('./server/config/db')


const app = express();
const PORT = 8081;

// Connect to DB
connectDB();

// Public
app.use(express.static('public'));

// Templating Engine
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');


// Routes
app.use('/', require('./server/routes/main'));



app.listen(PORT, () => {
    console.log("===========================")
    console.log("Server:\x1b[92m Online \x1b[0m");
    console.log("Port: " + PORT)
    console.log(`link: http://localhost:${PORT}`);
    console.log(":>");
  });
