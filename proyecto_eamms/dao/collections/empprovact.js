var bookshelf = require('../commons/bookshelf');
var empprovact = require('../models/empprovact');

module.exports = bookshelf.Collection.extend({
	model: empprovact
});