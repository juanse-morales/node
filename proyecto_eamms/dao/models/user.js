var bookshelf = require('../commons/bookshelf');
bookshelf.plugin('registry');

require('./empresa'),
require('./notf');

module.exports = bookshelf.model('User',{
  tableName: 'users',
  emp: function(){
    return this.belongsTo('Empresa');
  },
  notfs: function(){
    return this.hasMany('Notf');
  }
});