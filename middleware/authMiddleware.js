const jwt = require('jsonwebtoken');
const User = require('../models/userModel'); // Import your User model

const requireAuth = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Authentication required' });
  }

  jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
    if (err) {
      return res.status(401).json({ error: 'Invalid token' });
    }

    try {
      const user = await User.findById(decodedToken.id);

      if (!user) {
        return res.status(401).json({ error: 'User not found' });
      }

      req.user = user;
      next();
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });
};

module.exports = { requireAuth };
