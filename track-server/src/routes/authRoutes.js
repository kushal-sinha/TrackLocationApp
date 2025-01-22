const express = require('express');
const moongoose = require('mongoose');
const User = moongoose.model('User');


const router = express.Router();

router.post('/signup', (req, res) => {
    console.log(req.body);
    res.send('You made the post request');
})

module.exports = router;