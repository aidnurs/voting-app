var mongoose = require('mongoose');

var pollSchema = mongoose.Schema({
  title: String,
  optionsNumber: Number,
  options:[]
});

var Poll = mongoose.model('Poll', pollSchema);

module.exports = Poll;
