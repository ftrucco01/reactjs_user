const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./user.routes');
const mongoose = require('mongoose');

// Create an instance of the Express application
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configuration for MongoDB database connection
const mongoURL = 'mongodb://localhost:27017/mydatabase';
mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Successfully connected to the database');
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });

// Add user routes
app.use('/user', userRoutes);

module.exports = app;