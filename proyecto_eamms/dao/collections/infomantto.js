var bookshelf = require('../commons/bookshelf');
var infomantto = require('../models/infomantto');

module.exports = bookshelf.Collection.extend({
	model: infomantto
});