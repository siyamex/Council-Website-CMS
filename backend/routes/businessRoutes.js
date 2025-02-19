const express = require('express');
const { getBusinesses, createBusiness, updateBusiness, deleteBusiness } = require('../controllers/businessController');
const { authenticate } = require('../middlewares/authMiddleware');
const { authorize } = require('../middlewares/roleMiddleware');

const router = express.Router();

router.get('/', getBusinesses);
router.post('/', authenticate, authorize(['admin', 'editor']), createBusiness);
router.put('/:id', authenticate, authorize(['admin', 'editor']), updateBusiness);
router.delete('/:id', authenticate, authorize(['admin']), deleteBusiness);

module.exports = router;