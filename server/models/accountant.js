var mongoose = require('mongoose');

var accountantSchema = mongoose.Schema({
  id: String,
  name: String,
  accnumber: String,
  address: String,
  contact: String
});

module.exports = mongoose.model('Accountant', accountantSchema);