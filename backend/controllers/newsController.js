const News = require('../models/News');

exports.createNews = async (req, res) => {
  const { title, content, author, scheduledAt } = req.body;

  try {
    const newsItem = new News({ title, content, author, scheduledAt });

    if (!scheduledAt) {
      newsItem.publishedAt = new Date();
    }

    await newsItem.save();
    res.status(201).json(newsItem);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.publishScheduledNews = async () => {
  try {
    const now = new Date();
    const scheduledNews = await News.find({ scheduledAt: { $lte: now }, publishedAt: null });

    for (const newsItem of scheduledNews) {
      newsItem.publishedAt = now;
      await newsItem.save();
    }
  } catch (error) {
    console.error('Error publishing scheduled news:', error);
  }
};

// Schedule a job to run the publishScheduledNews function (using a library like node-cron or agenda)