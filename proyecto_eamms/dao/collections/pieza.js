var bookshelf = require('../commons/bookshelf');
var pieza = require('../models/pieza');

module.exports = bookshelf.Collection.extend({
	model: pieza
});