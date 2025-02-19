const express = require('express');
const { getEvents, getEventById, createEvent, updateEvent, deleteEvent, registerForEvent } = require('../controllers/eventController');
const { authenticate } = require('../middlewares/authMiddleware');
const { authorize } = require('../middlewares/roleMiddleware');

const router = express.Router();

router.get('/', getEvents);
router.get('/:id', getEventById);
router.post('/', authenticate, authorize(['admin', 'editor']), createEvent);
router.put('/:id', authenticate, authorize(['admin', 'editor']), updateEvent);
router.delete('/:id', authenticate, authorize(['admin']), deleteEvent);
router.post('/:id/register', authenticate, registerForEvent);

module.exports = router;