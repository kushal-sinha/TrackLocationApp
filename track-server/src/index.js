const mongoose = require('mongoose');
const express = require('express');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(authRoutes);

const mongoUri = "mongodb+srv://kushal999taken:S8cfzLSyxW8U9oGw@cluster0.vgcld.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(mongoUri);

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
