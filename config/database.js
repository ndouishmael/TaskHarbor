const mongoose = require('mongoose');

// Load environment variables from .env file
require('dotenv').config();

// Get the database connection URL from the environment variables
const dbURL = process.env.DB_URL;

// Set up the database connection
mongoose.connect(dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

const db = mongoose.connection;

// Database connection events
db.on('connected', () => {
  console.log('Connected to MongoDB');
});

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.on('disconnected', () => {
  console.log('Disconnected from MongoDB');
});

process.on('SIGINT', () => {
  db.close(() => {
    console.log('MongoDB connection closed through app termination');
    process.exit(0);
  });
});

module.exports = db;
