const Sequelize = require('@sequelize/core');

const connection = new Sequelize({
  dialect: 'mysql',
  database: 'sysge2',
  user: 'root',
  password: '040494@idonia#',
  host: 'localhost',
  port: 3306,
  timezone: '+01:00'
});

module.exports = connection;