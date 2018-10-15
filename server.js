const express = require('express');//backend framwork
const mongoose = require('mongoose');//orm to interact to mongodb
const bodyParser = require('body-parser');//take request and response from the bo=ody

//path to routes
const lists = require('./routes/api/lists');

const app = express();

//bodyparser middleware
app.use(bodyParser.json());

//db config
const db = require('./config/keys').mongoURI;

//connect to mongo
mongoose
    .connect(db)
    .then(() => console.log('Mongodb Connected..'))
    .catch(err => consoloe.log(err));

//use routes
app.use('/api/lists', lists);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

