const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/connectionDB").sequelize;

const user = sequelize.define(
  "user",
  {
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      defaultValue: DataTypes.INTEGER,
      allowNull: false,
    },
    firstName:{
      type: DataTypes.STRING,
    },
    lastName:{
      type: DataTypes.STRING,
    },
    // name: {
    //   type: DataTypes.STRING,
    // },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      default: null,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = user;

/* One user play multiple games and one game has multiple grounds and grounds are on multiple places */
