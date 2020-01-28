var knex = require('knex')({
  client: 'pg',
  connection: {
    host     : '127.0.0.1',
    user     : 'postgres',
    password : '1234',
    database : 'eamms',
    charset  : 'utf8'
  }
});

module.exports = require('bookshelf')(knex);