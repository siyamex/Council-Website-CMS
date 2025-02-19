const Survey = require('../models/Survey');

exports.getSurveys = async (req, res) => {
  try {
    const surveys = await Survey.find();
    res.status(200).json(surveys);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getSurveyById = async (req, res) => {
  try {
    const survey = await Survey.findById(req.params.id);
    if (!survey) {
      return res.status(404).json({ message: 'Survey not found' });
    }
    res.status(200).json(survey);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.createSurvey = async (req, res) => {
  const { title, questions } = req.body;

  try {
    const survey = new Survey({
      title,
      questions,
    });

    await survey.save();
    res.status(201).json(survey);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateSurvey = async (req, res) => {
  try {
    const survey = await Survey.findById(req.params.id);
    if (!survey) {
      return res.status(404).json({ message: 'Survey not found' });
    }

    survey.title = req.body.title || survey.title;
    survey.questions = req.body.questions || survey.questions;

    await survey.save();
    res.status(200).json(survey);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.deleteSurvey = async (req, res) => {
  try {
    const survey = await Survey.findById(req.params.id);
    if (!survey) {
      return res.status(404).json({ message: 'Survey not found' });
    }

    await survey.remove();
    res.status(200).json({ message: 'Survey removed' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.submitSurveyResponse = async (req, res) => {
  const { surveyId, userId, answers } = req.body;

  try {
    const survey = await Survey.findById(surveyId);
    if (!survey) {
      return res.status(404).json({ message: 'Survey not found' });
    }

    survey.responses.push({ user: userId, answers });
    await survey.save();

    res.status(201).json({ message: 'Response submitted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};