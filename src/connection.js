const knex = require('knex')({
  client: 'pg',
  connection: {
    host : 'localhost',
    user : 'postgres',
    password : 'fullstack',
    database : 'knexjs'
  }
});

module.exports = knex;