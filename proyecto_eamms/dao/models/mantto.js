var bookshelf = require('../commons/bookshelf');
bookshelf.plugin('registry');

require('./progmantto'),
require('./infomantto');

module.exports = bookshelf.model('Mantto',{
  tableName: 'manttos',
  progMantto: function(){
    return this.belongsTo('ProgMantto');
  },
  infosManttos: function(){
    return this.hasOne('InfoMantto');
  }
});