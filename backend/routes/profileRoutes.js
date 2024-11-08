const express = require('express');
const { getProfile, updateProfile } = require('../controllers/profileController');
const authMiddleware = require('../config/authMiddleware');
const router = express.Router();

router.get('/', authMiddleware, getProfile);
router.put('/update', authMiddleware, updateProfile);

module.exports = router;
