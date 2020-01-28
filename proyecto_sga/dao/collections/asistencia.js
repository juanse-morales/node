var bookshelf = require('../commons/bookshelf'),
asistencia = require('../models/asistencia');

module.exports = bookshelf.Collection.extend({
  model: asistencia
});