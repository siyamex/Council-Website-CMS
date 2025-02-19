const express = require('express');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const eventRoutes = require('./routes/eventRoutes');
const newsRoutes = require('./routes/newsRoutes');
const documentRoutes = require('./routes/documentRoutes');
const formRoutes = require('./routes/formRoutes');
const surveyRoutes = require('./routes/surveyRoutes');
const forumRoutes = require('./routes/forumRoutes');
const businessRoutes = require('./routes/businessRoutes');
const { authenticate } = require('./middlewares/authMiddleware');

const app = express();

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/users', authenticate, userRoutes);
app.use('/api/events', authenticate, eventRoutes);
app.use('/api/news', authenticate, newsRoutes);
app.use('/api/documents', authenticate, documentRoutes);
app.use('/api/forms', authenticate, formRoutes);
app.use('/api/surveys', authenticate, surveyRoutes);
app.use('/api/forums', authenticate, forumRoutes);
app.use('/api/businesses', authenticate, businessRoutes);

module.exports = app;