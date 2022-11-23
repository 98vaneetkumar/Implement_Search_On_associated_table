const express= require("express")
const router= express.Router()
const Controller= require("../controller/index")
const sendResponse = require("../helper/sendResponse");
//add user
router.post(
    "/addlocation",
    (req, res) => {
      return sendResponse.executeMethod(
        Controller.loactionController.Add,
        req.body,
        req,
        res
      );
    }
  );

//Get record of all the users
router.get(
    "/getlocation",
    (req, res) => {
      return sendResponse.executeMethod(
        Controller.loactionController.get,
        req.body,
        req,
        res
      );
    }
);
  



module.exports = router;