var bookshelf = require('../commons/bookshelf');
bookshelf.plugin('registry');

require('./user'),
require('./mantto');

module.exports = bookshelf.model('Notf',{
  tableName: 'notificaciones',
  user: function(){
    return this.belongsTo('User');
  },
  mantto: function(){
    return this.belongsTo('Mantto');
  }
});