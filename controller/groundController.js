const Service = require("../service");


module.exports = {
  Add: async (data) => {
    let userdata = {
      groundId:data.groundId,
      groundName: data.groundName,
      gameID:data.gameID
    };
    let user = await Service.groundService.addground(userdata);
    if (user) {
      return {
        status: "Success",
        message: "Add game successfull",
        game: user,
      };
    } else {
      return {
        status: "unSuccess",
        message: " unable to Add game ",
        game: user,
      };
    }
  },
  get: async (data) => {
    const user = await Service.groundService.getground();
    if (user) {
      return {
        status: "Success",
        game: user,
      };
    }
  },

};
