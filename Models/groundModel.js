const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/connectionDB").sequelize;

const ground = sequelize.define(
  "ground",
  {
    groundId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      defaultValue: DataTypes.INTEGER,
      allowNull: false,
    },
    groundName:{
      type: DataTypes.STRING,
    },
    gameID:{
      type: DataTypes.INTEGER,
      onDelete:"CASCADE",
      references: {
        model: "game",
        key: "gameId",
      },
    }
  },{
    freezeTableName: true,
  }
);

module.exports = ground;
