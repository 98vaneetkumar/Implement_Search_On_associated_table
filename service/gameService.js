const Model = require("../models");

exports.addgame = (data) => {
  return Model.gameModel.create(data);
};

exports.getgame=(data)=>{
  return Model.gameModel.findAll()
}