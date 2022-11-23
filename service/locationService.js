const Model = require("../models");

exports.addlocation = (data) => {
  return Model.locationModel.create(data);
};

exports.getlocation=(data)=>{
  return Model.locationModel.findAll()
}