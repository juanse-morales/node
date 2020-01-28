var bookshelf = require('../commons/bookshelf');
bookshelf.plugin('registry');

require('./mantto'),
require('./empprovmantto');

module.exports = bookshelf.model('InfoMantto',{
  tableName: 'informes_mantto',
  mantto: function(){
    return this.belongsTo('Mantto');
  },
  empProvMantto: function(){
    return this.belongsTo('EmpProvMantto');
  }
});