const express= require("express")
const router= express.Router()
const Controller= require("../controller/index")
const sendResponse = require("../helper/sendResponse");
//add user
router.post(
    "/addground",
    (req, res) => {
      return sendResponse.executeMethod(
        Controller.groundController.Add,
        req.body,
        req,
        res
      );
    }
  );

//Get record of all the users
router.get(
    "/getground",
    (req, res) => {
      return sendResponse.executeMethod(
        Controller.groundController.get,
        req.body,
        req,
        res
      );
    }
);
  



module.exports = router;