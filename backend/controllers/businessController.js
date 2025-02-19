const Business = require('../models/Business');

exports.getBusinesses = async (req, res) => {
  try {
    const businesses = await Business.find();
    res.status(200).json(businesses);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.createBusiness = async (req, res) => {
  const { name, description, contactInfo } = req.body;

  try {
    const business = new Business({ name, description, contactInfo });
    await business.save();
    res.status(201).json(business);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateBusiness = async (req, res) => {
  try {
    const business = await Business.findById(req.params.id);
    if (!business) {
      return res.status(404).json({ message: 'Business not found' });
    }

    business.name = req.body.name || business.name;
    business.description = req.body.description || business.description;
    business.contactInfo = req.body.contactInfo || business.contactInfo;

    await business.save();
    res.status(200).json(business);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.deleteBusiness = async (req, res) => {
  try {
    const business = await Business.findById(req.params.id);
    if (!business) {
      return res.status(404).json({ message: 'Business not found' });
    }

    await business.remove();
    res.status(200).json({ message: 'Business removed' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};