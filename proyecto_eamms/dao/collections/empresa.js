var bookshelf = require('../commons/bookshelf');
var empresa = require('../models/empresa');

module.exports = bookshelf.Collection.extend({
	model: empresa
});