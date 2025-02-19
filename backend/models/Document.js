const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  file: { type: String, required: true },
  version: { type: Number, default: 1 },
  previousVersions: [
    {
      file: { type: String },
      version: { type: Number },
      createdAt: { type: Date, default: Date.now },
    },
  ],
}, { timestamps: true });

documentSchema.pre('save', function (next) {
  if (this.isModified('file')) {
    this.previousVersions.push({ file: this.file, version: this.version });
    this.version += 1;
  }
  next();
});

const Document = mongoose.model('Document', documentSchema);

module.exports = Document;