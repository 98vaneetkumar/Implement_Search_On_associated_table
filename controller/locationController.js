const Service = require("../service");
module.exports = {
  Add: async (data) => {
    let userdata = {
      locationId:data.locationId,
      locationName: data.locationName,
      groundID: data.groundID
    };
    let user = await Service.locationService.addlocation(userdata);
    if (user) {
      return {
        status: "Success",
        message: "Add locaiton successfull",
        location: user,
      };
    } else {
      return {
        status: "unSuccess",
        message: " unable to Add location ",
        location: user,
      };
    }
  },
  get: async (data) => {
    const user = await Service.locationService.getlocation();
    if (user) {
      return {
        status: "Success",
        location: user,
      };
    }
  },
  sendMail:async(data,req,res)=>{
    const user= await Service.userService.getuser();
    if(user){
      const emails= user.email;
      console.log("All users Emails are : ",emails)
    }
  }
};
