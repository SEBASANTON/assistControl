const { DataTypes, Sequelize } = require('sequelize');
const { db } = require('../utils/database');

const Registration = db.define(
  'registration',
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    entranceTime: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.NOW,
      allowNull: false,
    },
    exitTime: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'working',
    },
  } /* ,{timestamps:false} */
);

module.exports = { Registration };
