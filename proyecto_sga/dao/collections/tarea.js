var bookshelf = require('../commons/bookshelf'),
tarea = require('../models/tarea');

module.exports = bookshelf.Collection.extend({
  model: tarea
});