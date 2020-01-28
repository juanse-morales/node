var bookshelf = require('../commons/bookshelf');
bookshelf.plugin('registry');

require('./ae'), 
require('./progmantto'), 
require('./infomantto');

module.exports = bookshelf.model('EmpProvMantto',{
  tableName: 'empresa_prov_mantto',
  aes: function(){
    return this.hasMany('Ae');
  },
  progManttos: function(){
    return this.hasMany('ProgMantto');
  },
  infosManttos: function(){
    return this.hasMany('InfoMantto');
  }
});