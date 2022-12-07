const mysql = require('mysql');

module.exports = mysql.createConnection({
  host: 'localhost',
  username: 'gdsc',
  password: 'Gdscwebsite2022!',
  database: 'GDSCWebsite'
});