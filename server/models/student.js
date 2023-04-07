var mongoose = require('mongoose');

var studentSchema = mongoose.Schema({
  id: String,
  nim: String,
  name: String,
  file: String,
  instructor_id:String,
  challenges: []
});

module.exports = mongoose.model('Student', studentSchema);
