'use strict';
var Poll = require('./models/Poll.js');

module.exports = function(app) {
  app.route('/get').get(function(req, res) {
    Poll.find({}, function(err, polls) {
      res.send(polls);
    });
  });

  app.route('/post').post(function(req, res) {
    var input = req.body.title;
    var newPoll = new Poll({
      title: input,
      optionsNumber: req.body.num,
      options: req.body.arr
    });
    newPoll.save(function(err) {});
    res.send(newPoll);
  });

  app.route('/put').put(function(req, res) {
    res.sendStatus('put');
  });

  app.route('/delete').delete(function(req, res) {
    var input = req.body.input;
    Poll.findOneAndRemove({ title: input }, function(err) {});
    res.sendStatus('delete');
  });

  app.route('/deleteAll').delete(function(req, res) {
    Poll.remove({}, function(err) {});
    res.sendStatus('delete');
  });
};
