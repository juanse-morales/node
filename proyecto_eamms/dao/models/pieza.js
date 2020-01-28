var bookshelf = require('../commons/bookshelf');
bookshelf.plugin('registry');

require('./ae'),
require('./progmantto');

module.exports = bookshelf.model('Pieza',{
  tableName: 'pieza_activo_em',
  ae: function(){
    return this.belongsTo('Ae');
  },
  progMantto: function(){
    return this.belongsTo('ProgMantto');
  }
});