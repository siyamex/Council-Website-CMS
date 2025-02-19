const Document = require('../models/Document');

exports.getDocuments = async (req, res) => {
  try {
    const documents = await Document.find();
    res.status(200).json(documents);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getDocumentById = async (req, res) => {
  try {
    const document = await Document.findById(req.params.id);
    if (!document) {
      return res.status(404).json({ message: 'Document not found' });
    }
    res.status(200).json(document);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.createDocument = async (req, res) => {
  const { title, description, file } = req.body;

  try {
    const document = new Document({
      title,
      description,
      file,
    });

    await document.save();
    res.status(201).json(document);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateDocument = async (req, res) => {
  try {
    const document = await Document.findById(req.params.id);
    if (!document) {
      return res.status(404).json({ message: 'Document not found' });
    }

    document.title = req.body.title || document.title;
    document.description = req.body.description || document.description;
    document.file = req.body.file || document.file;

    await document.save();
    res.status(200).json(document);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.deleteDocument = async (req, res) => {
  try {
    const document = await Document.findById(req.params.id);
    if (!document) {
      return res.status(404).json({ message: 'Document not found' });
    }

    await document.remove();
    res.status(200).json({ message: 'Document removed' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};