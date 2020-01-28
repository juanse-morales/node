var bookshelf = require('../commons/bookshelf');
var ae = require('../models/ae');

module.exports = bookshelf.Collection.extend({
	model: ae
});