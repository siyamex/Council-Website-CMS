const express = require('express');
const { getForms, getFormById, createForm, updateForm, deleteForm } = require('../controllers/formController');

const router = express.Router();

router.get('/', getForms);
router.get('/:id', getFormById);
router.post('/', createForm);
router.put('/:id', updateForm);
router.delete('/:id', deleteForm);

module.exports = router;