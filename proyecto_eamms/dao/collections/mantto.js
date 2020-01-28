var bookshelf = require('../commons/bookshelf');
var mantto = require('../models/mantto');

module.exports = bookshelf.Collection.extend({
	model: mantto
});