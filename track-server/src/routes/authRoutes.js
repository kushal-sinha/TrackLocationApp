const express = require('express');
const moongoose = require('mongoose');
const User = moongoose.model('User');
const jwt = require('jsonwebtoken');


const router = express.Router();

router.post('/signup', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = new User({ email, password });
        await user.save();
        const token = jwt.sign({ userID: user._id }, 'MY_SECRET_KEY');
        res.send({ token });
    }
    catch (err) {
        return res.status(422).send(err.message);
    }

})

module.exports = router;