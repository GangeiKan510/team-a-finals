const Config = {
  HOST: 'localhost',
  USER: 'gdsc',
  PASSWORD: 'Gdscwebsite2022',
  DB: 'gdsc',
  dialect: 'mysql', 
  pool: {
  max: 5,
  min: 0,
  acquire: 30000,
  idle: 10000
  }
};

module.exports = {Config};