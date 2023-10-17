const express = require('express');
const router = express.Router();
const { requireAuth } = require('../middleware/authMiddleware'); // Import the authentication middleware
const taskController = require('../controllers/taskController'); // Import the task controller

// Create a new task
router.post('/', requireAuth, taskController.createTask);

// Get a list of tasks
router.get('/', requireAuth, taskController.getTasks);

// Get a single task by ID
router.get('/:taskId', requireAuth, taskController.getTaskById);

// Update a task by ID
router.put('/:taskId', requireAuth, taskController.updateTask);

// Delete a task by ID
router.delete('/:taskId', requireAuth, taskController.deleteTask);

module.exports = router;
