const express = require('express');

const router = express.Router();

router.post('/signup', (req, res) => {
    res.send('You made the post request');
})

module.exports = router;