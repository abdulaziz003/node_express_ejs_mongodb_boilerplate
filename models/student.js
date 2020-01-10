const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    national_id: number,
    required: true
  },
  grade: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Grade'
  }
});

module.exports = mongoose.model('Student', studentSchema);