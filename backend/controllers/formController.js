const Form = require('../models/Form');

exports.getForms = async (req, res) => {
  try {
    const forms = await Form.find();
    res.status(200).json(forms);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getFormById = async (req, res) => {
  try {
    const form = await Form.findById(req.params.id);
    if (!form) {
      return res.status(404).json({ message: 'Form not found' });
    }
    res.status(200).json(form);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.createForm = async (req, res) => {
  const { title, fields } = req.body;

  try {
    const form = new Form({
      title,
      fields,
    });

    await form.save();
    res.status(201).json(form);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateForm = async (req, res) => {
  try {
    const form = await Form.findById(req.params.id);
    if (!form) {
      return res.status(404).json({ message: 'Form not found' });
    }

    form.title = req.body.title || form.title;
    form.fields = req.body.fields || form.fields;

    await form.save();
    res.status(200).json(form);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.deleteForm = async (req, res) => {
  try {
    const form = await Form.findById(req.params.id);
    if (!form) {
      return res.status(404).json({ message: 'Form not found' });
    }

    await form.remove();
    res.status(200).json({ message: 'Form removed' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};