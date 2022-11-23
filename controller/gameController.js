const Service = require("../service");


module.exports = {
  Add: async (data) => {
    let userdata = {
      gameId:data.gameId,
      gamename: data.gamename,
      userID:data.userID
    };
    let user = await Service.gameService.addgame(userdata);
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
    const user = await Service.gameService.getgame();
    if (user) {
      return {
        status: "Success",
        game: user,
      };
    }
  },
};
