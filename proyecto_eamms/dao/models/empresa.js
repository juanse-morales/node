var bookshelf = require('../commons/bookshelf');
bookshelf.plugin('registry');
require('./user');

module.exports = bookshelf.model('Empresa',{
  tableName: 'empresas',
  users: function(){
    return this.hasMany('User');
  }
});