const Model = require("../models");

exports.addground = (data) => {
  return Model.groundModel.create(data);
};

exports.getground=(data)=>{
  return Model.groundModel.findAll()
}