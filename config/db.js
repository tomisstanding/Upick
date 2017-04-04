const pgp = require('pg-promise')();


const db = pgp({
  database: 'upick_app',
  port: 5432,
  host: 'localhost'
})

module.export = db;
