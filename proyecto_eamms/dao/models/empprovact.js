var bookshelf = require('../commons/bookshelf');
bookshelf.plugin('registry');
require('./ae');

module.exports = bookshelf.model('EmpProvAct',{
  tableName: 'empresa_prov_activo',
  aes: function(){
    return this.hasMany('Ae');
  }
});