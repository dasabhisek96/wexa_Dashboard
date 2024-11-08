const User = require('../models/User');

// Add a friend
exports.addFriend = async (req, res) => {
  try {
    const friendId = req.body.friendId;
    const user = await User.findById(req.user.id);
    const friend = await User.findById(friendId);

    if (!friend) return res.status(404).json({ msg: 'Friend not found' });
    if (user.friends.includes(friendId)) return res.status(400).json({ msg: 'Already friends' });

    user.friends.push(friendId);
    friend.friends.push(req.user.id);

    await user.save();
    await friend.save();

    res.json({ msg: 'Friend added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Remove a friend
exports.removeFriend = async (req, res) => {
  try {
    const friendId = req.body.friendId;
    const user = await User.findById(req.user.id);
    const friend = await User.findById(friendId);

    if (!friend) return res.status(404).json({ msg: 'Friend not found' });
    if (!user.friends.includes(friendId)) return res.status(400).json({ msg: 'Not friends' });

    user.friends = user.friends.filter(id => id.toString() !== friendId);
    friend.friends = friend.friends.filter(id => id.toString() !== req.user.id);

    await user.save();
    await friend.save();

    res.json({ msg: 'Friend removed successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Get friend list
exports.getFriends = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate('friends', 'username email');
    if (!user) return res.status(404).json({ msg: 'User not found' });

    res.json(user.friends);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
