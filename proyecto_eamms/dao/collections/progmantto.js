var bookshelf = require('../commons/bookshelf');
var progmantto = require('../models/progmantto');

module.exports = bookshelf.Collection.extend({
	model: progmantto
});