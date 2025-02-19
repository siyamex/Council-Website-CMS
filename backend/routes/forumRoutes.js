const express = require('express');
const { getForums, createForum, addComment } = require('../controllers/forumController');
const { authenticate } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', getForums);
router.post('/', authenticate, createForum);
router.post('/:id/comments', authenticate, addComment);

module.exports = router;