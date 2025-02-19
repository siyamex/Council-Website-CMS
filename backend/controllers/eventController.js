const Event = require('../models/Event');
const User = require('../models/User');

exports.registerForEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    event.registeredUsers.push(req.user.id);
    await event.save();

    // Send notification to user (email/SMS logic not included)
    const user = await User.findById(req.user.id);
    console.log(`Notification sent to ${user.email}`);

    res.status(200).json({ message: 'Registered for event' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};