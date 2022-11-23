const Service = require("../service");
const Joi = require("joi");
let commonHelper = require("../helper/common");

module.exports = {
  Add: async (data) => {
    let userdata = {
      userId:data.userId,
      name: data.name,
      email:data.email,
    
    };
    let user = await Service.userService.addUser(userdata);
    if (user) {
      return {
        status: "Success",
        message: "Add user successfull",
        user: user,
      };
    } else {
      return {
        status: "unSuccess",
        message: " unable to Add user ",
        user: user,
      };
    }
  },
  get: async (data) => {
    const user = await Service.userService.getuser();
    console.log(user)
    if (user) {
      return {
        status: "Success",
        user: user,
      };
    }
  },
//  getallrecordofalltable:async(data)=>{
//   const user = await Service.userService.getuserall();
//   if (user) {
//     return {
//       status: "Success",
//       user: user,
//     };
//   }
//  }

 getallrecordofalltable: async (payloadData) => {
  try {
    const schema = Joi.object().keys({
      limit: Joi.number().optional(),
      skip: Joi.number().optional(),
      sortBy: Joi.string().optional(),
      orderBy: Joi.string().optional(),
      search: Joi.string().optional().allow(""),
    });
    let payload = await commonHelper.verifyJoiSchema(payloadData, schema);
      let user = await Service.userService.getuserall(
        payload,  payload.limit || 10, payload.skip || 0);
      return user;
    
  }
  catch (err) {
    console.log(err);
    throw err;
  }
},
};
