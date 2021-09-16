const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');


dotenv.config({
    path: './config.env'
})

const port = process.env.PORT || 8000;

const app = express();

app.use('/neo', require('./routes/profile'));

if(process.env.NODE_ENV === 'deploy') {
    app.use(express.static(__dirname + '/public/'));

    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.listen(port, () => {
    console.log(`Hello im working on port ${port} (${process.env.NODE_ENV})!`)
})
