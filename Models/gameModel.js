const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/connectionDB").sequelize;

const game = sequelize.define(
  "game",
  {
    gameId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      defaultValue: DataTypes.INTEGER,
      allowNull: false,
    },
    gamename: {
      type: DataTypes.STRING,
    },
    gameLevel:{
      type:DataTypes.STRING
    },
    userID: {
      type: DataTypes.INTEGER,
      onDelete: "CASCADE", 
      references: {
        model: "user",
        key: "userId",
      },
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = game;
