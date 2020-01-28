var bookshelf = require('../commons/bookshelf');
var empprovmantto = require('../models/empprovmantto');

module.exports = bookshelf.Collection.extend({
	model: empprovmantto
});