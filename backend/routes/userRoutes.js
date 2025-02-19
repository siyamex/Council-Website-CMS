const express = require('express');
const { getUsers, getUserById, updateUser, deleteUser } = require('../controllers/userController');
const { authorize } = require('../middlewares/roleMiddleware');

const router = express.Router();

router.get('/', authorize(['admin', 'editor']), getUsers);
router.get('/:id', authorize(['admin', 'editor']), getUserById);
router.put('/:id', authorize(['admin']), updateUser);
router.delete('/:id', authorize(['admin']), deleteUser);

module.exports = router;