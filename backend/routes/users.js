const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Register new user
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // NOTE: in production, hash passwords!
    const user = new User({ name, email, password });
    await user.save();
    res.status(201).json({ message: 'User registered', userId: user._id });
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;