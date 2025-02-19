const Forum = require('../models/Forum');

exports.getForums = async (req, res) => {
  try {
    const forums = await Forum.find().populate('author').populate('comments.author');
    res.status(200).json(forums);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.createForum = async (req, res) => {
  const { title, content } = req.body;

  try {
    const forum = new Forum({
      title,
      content,
      author: req.user.id,
    });

    await forum.save();
    res.status(201).json(forum);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.addComment = async (req, res) => {
  const { content } = req.body;

  try {
    const forum = await Forum.findById(req.params.id);
    if (!forum) {
      return res.status(404).json({ message: 'Forum not found' });
    }

    forum.comments.push({ content, author: req.user.id });
    await forum.save();

    res.status(201).json(forum);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};