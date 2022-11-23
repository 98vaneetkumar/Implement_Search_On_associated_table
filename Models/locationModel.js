const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/connectionDB").sequelize;

const location = sequelize.define(
  "location",
  {
    locationId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      defaultValue: DataTypes.INTEGER,
      allowNull: false,
    },
   locationName:{
    type: DataTypes.STRING
   },
   groundID:{
    type: DataTypes.INTEGER,
    onDelete:"CASCADE",
    references:{
      model:"ground",
      key:"groundId"
    }
   }
  },{
    freezeTableName: true,
  }
);

module.exports = location;
  