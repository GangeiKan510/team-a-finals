const Config = {
  host: 'localhost',
  username: 'root',
  password: 'Sean69123!',
  database: 'gdsc',
  dialect: 'mysql', 
  pool: {
  max: 5,
  min: 0,
  acquire: 30000,
  idle: 10000
  }
};

module.exports = {Config};