var bookshelf = require('../commons/bookshelf');
bookshelf.plugin('registry');
require('./ae');

module.exports = bookshelf.model('InfoTecnica',{
  tableName: 'info_tecnica',
  ae: function(){
    return this.belongsTo('Ae');
  }
});