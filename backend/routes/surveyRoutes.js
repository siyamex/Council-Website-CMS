const express = require('express');
const { getSurveys, getSurveyById, createSurvey, updateSurvey, deleteSurvey, submitSurveyResponse } = require('../controllers/surveyController');

const router = express.Router();

router.get('/', getSurveys);
router.get('/:id', getSurveyById);
router.post('/', createSurvey);
router.put('/:id', updateSurvey);
router.delete('/:id', deleteSurvey);
router.post('/submit', submitSurveyResponse);

module.exports = router;