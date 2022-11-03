import knex from 'knex';

const db = knex({
  client: 'mysql2',
  connection: {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'siteannonce',
    socketPath: process.env.socketPath || '/Applications/MAMP/tmp/mysql/mysql.sock'
  },
});
export default db;