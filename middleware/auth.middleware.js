const jwt = require('jsonwebtoken');
const User = require('../models/user.models');
require('dotenv').config();

// Middleware to verify JWT token
 exports.verifyToken = async (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) {
        return res.status(403).json({ message: 'No token provided!' });
    }
  
    try {
      const verified = jwt.verify(token, process.env.JWT_SECRET);
      req.userId = verified.id;
      next();
    } catch (error) {
      res.status(400).json({ message: "Invalid token" });
    }
  };
  

// Middleware to ensure the user exists
exports.ensureUserExists = async (req, res, next) => {
    try {
        const user = await User.findByPk(req.userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }

        req.user = user; // Store user data for further use
        next();
    } catch (error) {
        return res.status(500).json({ message: 'Error verifying user.', error: error.message });
    }
};


