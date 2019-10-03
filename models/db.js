const mongoose = require('mongoose');
const environment = process.env.NODE_ENV || 'dev'
const config = require('../config/dbconfig.json')[environment];

mongoose.connect(...config)
    .then(() => {
        console.log('db is conected ')

    }).catch(err => {
        console.log(err);
    })