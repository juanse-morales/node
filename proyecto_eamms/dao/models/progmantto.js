var bookshelf = require('../commons/bookshelf');
bookshelf.plugin('registry');

require('./ae'),
require('./empprovmantto'),
require('./pieza'),
require('./mantto');

module.exports = bookshelf.model('ProgMantto',{
  tableName: 'programa_mantto',
  ae: function(){
    return this.belongsTo('Ae');
  },
  empProvMantto: function(){
    return this.belongsTo('EmpProvMantto');
  },
  piezas: function(){
    return this.hasMany('Pieza');
  },
  manttos: function(){
    return this.hasMany('Mantto');
  }
});