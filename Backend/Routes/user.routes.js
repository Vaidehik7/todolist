const express = require('express');
const router = express.Router();

// Import the controller functions
const { registerUser, loginUser } = require('../controllers/user.controller.js');

// Define your routes with the handler functions
router.post('/register', registerUser);  // Ensure the handler function is provided
router.post('/login', loginUser);

module.exports = router;
