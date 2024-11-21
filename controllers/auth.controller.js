const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user.models');
require('dotenv').config();

// Register a new user
exports.registerUser = async (req, res) => {
    const { username, password, email } = req.body;
    
    try {
        const existingUser = await User.findOne({ where: { username } });
        if (existingUser) {
            return res.status(400).json({ message: "Username already taken" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = await User.create({
            username,
            email,
            password: hashedPassword,
        });

        res.status(201).json({ message: 'User registered successfully.', user: newUser });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user.', error: error.message });
    }
};

// Login user and generate JWT
exports.loginUser = async (req, res) => {
    const { username, password } = req.body;  // Mengambil username dan password dari body request

        if (!username || !password) {
            return res.status(400).json({ message: "Username and password are required" });
          }
        
        try {
        // Check if user exists based on username
        const user = await User.findOne({ where: { username } });
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }

        // Validate password using the instance method
        const isPasswordValid = await bcrypt.compare(password, user.password);  // Menggunakan method isValidPassword
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials.' });
        }

        // payload respons
        const payload = {
            id: user.id,
            username: user.username,
            email: user.email
        };

        // Generate JWT token
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1d' });
         
         console.log(token);

        // Respond with success message and token
        res.status(200).json({ message: 'Login successful.', payload, token });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in.', error: error.message });
    }
};

// Get user profile
exports.getUserProfile = async (req, res) => {
    try {
        const user = await User.findByPk(req.userId, { attributes: { exclude: ['password'] } });
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }

        res.status(200).json({ user });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user profile.', error: error.message });
    }
};

// Update user profile
exports.updateUserProfile = async (req, res) => {
    try {
        const { username, email } = req.body;

        const user = await User.findByPk(req.userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }

        user.username = username || user.username;
        user.email = email || user.email;
        await user.save();

        res.status(200).json({ message: 'User profile updated.', user });
    } catch (error) {
        res.status(500).json({ message: 'Error updating user profile.', error: error.message });
    }
};
