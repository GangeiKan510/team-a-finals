const dbconfig = require('../config/db.config');

const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize(dbconfig.database, dbconfig.username, dbconfig.password, {
  host: dbconfig.host,
  dialect: 'mysql'
});

const SuperAdmin =  sequelize.define('SuperAdmin', {
  superAdminID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, { sequelize });

const SubAdmin =  sequelize.define('SuperAdmin', {
  subAdminID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, { sequelize });

const Event = sequelize.define('Event', {
  eventID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  hostName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  photoLink: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, { sequelize });

module.exports = {Event, SuperAdmin, SubAdmin}