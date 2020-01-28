var bookshelf = require('../commons/bookshelf');
bookshelf.plugin('registry');


module.exports = bookshelf.model('Tarea',{
  tableName: 'tareas'
  
});