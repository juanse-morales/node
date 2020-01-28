var bookshelf = require('../commons/bookshelf');
bookshelf.plugin('registry');
require('./ae');

module.exports = bookshelf.model('Ph',{
  tableName: 'ph',
  aes: function(){
    return this.hasMany('Ae');
  }
});