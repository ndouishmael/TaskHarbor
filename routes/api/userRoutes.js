const express = require('express');
const router = express.Router();
const { requireAuth } = require('../middleware/authMiddleware'); // Import the authentication middleware
const userController = require('../controllers/userController'); // Import the user controller

// Create a new user
router.post('/register', userController.createUser);

// User login
router.post('/login', userController.loginUser);

// Get a list of users (for admin)
router.get('/', requireAuth, userController.getUsers);

// Get the current user's profile
router.get('/profile', requireAuth, userController.getUserProfile);

// Update the current user's profile
router.put('/profile', requireAuth, userController.updateUserProfile);

// Delete the current user's account
router.delete('/profile', requireAuth, userController.deleteUserProfile);

module.exports = router;
