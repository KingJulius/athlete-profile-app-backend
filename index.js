const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');

require("dotenv").config();

const db = require('./db');
const profileRouter = require('./routes/profile-router');

const PORT = process.env.PORT;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.use('/api', profileRouter);

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});


