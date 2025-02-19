const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  fields: [
    {
      label: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        required: true,
      },
      options: [String],
    },
  ],
}, {
  timestamps: true,
});

const Form = mongoose.model('Form', formSchema);

module.exports = Form;