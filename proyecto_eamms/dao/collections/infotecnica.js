var bookshelf = require('../commons/bookshelf');
var infotecnica = require('../models/infotecnica');

module.exports = bookshelf.Collection.extend({
	model: infotecnica
});