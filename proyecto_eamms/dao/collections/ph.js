var bookshelf = require('../commons/bookshelf');
var ph = require('../models/ph');

module.exports = bookshelf.Collection.extend({
	model: ph
});