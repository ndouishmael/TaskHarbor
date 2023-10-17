const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing (CORS)
app.use(morgan('dev')); // Request logging
app.use(bodyParser.json()); // Parse JSON request bodies

// Database connection
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to the database');
  })
  .catch(err => {
    console.error('Database connection error:', err);
  });

// Define your routes here (e.g., taskRoutes and userRoutes)
const taskRoutes = require('./routes/api/taskRoutes');
const userRoutes = require('./routes/api/userRoutes');

app.use('/api/tasks', taskRoutes);
app.use('/api/users', userRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
