var bookshelf = require('../commons/bookshelf');
bookshelf.plugin('registry');

require('./asistencia');

module.exports = bookshelf.model('Estudiante',{
  tableName: 'estudiantes',
  asistencias: function(){
    return this.hasMany('Asistencia');
  }
});