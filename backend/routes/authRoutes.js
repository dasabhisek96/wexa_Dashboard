const express = require('express');
const { register, login, setupTwoFactor, verifyTwoFactor } = require('../controllers/authController');
const authMiddleware = require('../config/authMiddleware');
const apiLimiter = require('../config/rateLimit');
const router = express.Router();

router.post('/register', apiLimiter, register);
router.post('/login', apiLimiter, login);
router.post('/2fa/setup', authMiddleware, setupTwoFactor);
router.post('/2fa/verify', authMiddleware, verifyTwoFactor);

module.exports = router;
