const express= require("express")
const router= express.Router()
const Controller= require("../controller/index")
const sendResponse = require("../helper/sendResponse");
//add user
router.post(
    "/addgame",
    (req, res) => {
      return sendResponse.executeMethod(
        Controller.gameController.Add,
        req.body,
        req,
        res
      );
    }
  );

//Get record of all the users
router.get(
    "/getgame",
    (req, res) => {
      return sendResponse.executeMethod(
        Controller.gameController.get,
        req.body,
        req,
        res
      );
    }
);
  



module.exports = router;