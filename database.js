const mysql = require('mysql');

module.exports = mysql.createConnection({
  host: 'localhost',
  username: 'sean',
  password: 'Sean69123!',
  database: 'GDSCWebsite'
});