var bookshelf = require('../commons/bookshelf'),
estudiante = require('../models/estudiante');

module.exports = bookshelf.Collection.extend({
  model: estudiante
});