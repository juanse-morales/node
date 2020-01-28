var bookshelf = require('../commons/bookshelf');
bookshelf.plugin('registry');

require('./estudiante');

module.exports = bookshelf.model('Asistencia',{
  tableName: 'asistencias',
  estudiante: function(){
    return this.belongsTo('Estudiante');
  }
});