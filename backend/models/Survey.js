const mongoose = require('mongoose');

const surveySchema = new mongoose.Schema({
  title: { type: String, required: true },
  questions: [
    {
      question: { type: String, required: true },
      options: [String],
    },
  ],
  responses: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      answers: [String],
    },
  ],
}, { timestamps: true });

const Survey = mongoose.model('Survey', surveySchema);

module.exports = Survey;