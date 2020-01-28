var bookshelf = require('../commons/bookshelf');
bookshelf.plugin('registry');

require('./ph'),
require('./empprovact'),
require('./empprovmantto'),
require('./infotecnica'),
require('./pieza'),
require('./progmantto');

module.exports = bookshelf.model('Ae',{
  tableName: 'activo_em',
  ph: function(){
    return this.belongsTo('Ph');
  },
  empProvAct: function(){
    return this.belongsTo('EmpProvAct');
  },
  empProvMantto: function(){
    return this.belongsTo('EmpProvMantto');
  },
  infoTecnica: function(){
    return this.hasOne('InfoTecnica');
  },
  piezas: function(){
    return this.hasMany('Pieza');
  },
  progManttos: function(){
    return this.hasMany('ProgMantto');
  }
});