const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

//environment variables
const PORT =  process.env.PORT || 3001;
const app = express();

//middleware for parsing incoming data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//use the routes in routes.js
app.use(routes);

//connection to mongobd and starts the server
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server up and running on port ${PORT}`)
    })
})