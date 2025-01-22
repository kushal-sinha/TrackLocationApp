const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).send({ error: 'You must be logged in.' });
    }

    const token = authorization.replace('Bearer ', '').trim();
    console.log('Extracted token:', token);

    jwt.verify(token, 'MY_SECRET_KEY', async (err, payload) => {
        if (err) {
            console.error('JWT verification error:', err);
            return res.status(401).send({ error: 'You must be logged in.' });
        }

        console.log('JWT payload:', payload);

        const { userID } = payload;

        try {
            const user = await User.findById(userID);
            console.log('User found in DB:', user);

            if (!user) {
                return res.status(401).send({ error: 'User not found. You must be logged in.' });
            }

            req.user = user;
            next();
        } catch (dbError) {
            console.error('Database error:', dbError);
            return res.status(500).send({ error: 'Internal server error.' });
        }
    });
};
