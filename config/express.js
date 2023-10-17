const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing (CORS)
app.use(morgan('dev')); // Request logging
app.use(bodyParser.json()); // Parse JSON request bodies

// Define your API routes here
// Example: const taskRoutes = require('./routes/api/taskRoutes');
// app.use('/api/tasks', taskRoutes);

module.exports = app;
