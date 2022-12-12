const Config = {
  host: 'localhost',
  username: 'gdsc',
  password: 'Gdscwebsite2022',
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