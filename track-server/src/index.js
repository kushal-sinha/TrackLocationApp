require('./models/User'); // ab humlog ise koi  constant ko assign nai kr rhe hai kyuki mongoose chahta hai jo define kiye ho schema voh sirf ek baar hi chle kyuki baar baar chlega toh ek error thorw krega ki you already defined the schema krke
const mongoose = require('mongoose');
const express = require('express');
const authRoutes = require('./routes/authRoutes');
const bodyParser = require('body-parser');
const requireAuth = require('./middlewares/requireAuth');


const app = express();
app.use(bodyParser.json());
app.use(authRoutes);

const mongoUri = "mongodb+srv://kushal999taken:S8cfzLSyxW8U9oGw@cluster0.vgcld.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(mongoUri);

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

app.get('/', requireAuth, (req, res) => {
    res.send(`Your email: ${req.user.email}`);
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
