var bookshelf = require('../commons/bookshelf');
var user = require('../models/user');

module.exports = bookshelf.Collection.extend({
	model: user
});