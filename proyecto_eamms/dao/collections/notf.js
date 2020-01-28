var bookshelf = require('../commons/bookshelf');
var notf = require('../models/notf');

module.exports = bookshelf.Collection.extend({
	model: notf
});