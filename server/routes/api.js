const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');
const auth = require('../middleware/auth');

// Define API routes
router.get('/', apiController.getAllUsers); // Changed from getUsers to getAllUsers
router.post('/', apiController.createUser);
router.get('/:id', apiController.getUserById);
router.put('/:id', apiController.updateUser);
router.delete('/:id', apiController.deleteUser);

// @route   POST api/users/register
// @desc    Register a user
// @access  Public
router.post('/register', apiController.register);

// @route   POST api/users/login
// @desc    Login user & get token
// @access  Public
router.post('/login', apiController.login);

// @route   GET api/users/me
// @desc    Get user data
// @access  Private
router.get('/me', auth, apiController.getUser);

// @route   POST api/users/register-airdrop
// @desc    Register for airdrop
// @access  Public
router.post('/register-airdrop', apiController.registerAirdrop);

module.exports = router;