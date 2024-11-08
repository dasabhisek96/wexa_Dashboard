const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const speakeasy = require('speakeasy');

exports.register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ username, email, password: hashedPassword });
    res.json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !await bcrypt.compare(password, user.password)) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.setupTwoFactor = async (req, res) => {
  const user = await User.findById(req.user.id);
  const secret = speakeasy.generateSecret();
  user.twoFactorSecret = secret.base32;
  await user.save();

  res.json({ otpauth_url: secret.otpauth_url });
};

exports.verifyTwoFactor = (req, res) => {
  const { token } = req.body;
  const user = User.findById(req.user.id);
  const verified = speakeasy.totp.verify({
    secret: user.twoFactorSecret,
    encoding: 'base32',
    token,
  });
  
  if (verified) {
    res.json({ message: 'Two-factor authentication verified' });
  } else {
    res.status(400).json({ error: 'Invalid token' });
  }
};
