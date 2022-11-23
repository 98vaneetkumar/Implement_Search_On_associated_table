const express= require("express")
const router= express.Router()
const Controller= require("../controller/index")
const sendResponse = require("../helper/sendResponse");
//add user
router.post(
    "/add",
    (req, res) => {
      return sendResponse.executeMethod(
        Controller.userController.Add,
        req.body,
        req,
        res
      );
    }
  );

//Get record of all the users
router.get(
    "/getuser",
    (req, res) => {
      return sendResponse.executeMethod(
        Controller.userController.get,
        req.body,
        req,
        res
      );
    }
);

router.get("/getallrecordofalltable",(req, res) => {
	let payload = req.query;
	if ((payload.skip) && (payload.limit) && (payload.skip > 0)) {
		payload.skip = (payload.skip - 1) * payload.limit;
	}
	return sendResponse.executeMethod(Controller.userController.getallrecordofalltable, payload, req, res);
});


// router.get(
//     "/getallrecordofalltable",
//     (req, res) => {
//       return sendResponse.executeMethod(
//         Controller.userController.getallrecordofalltable,
//         req.body,
//         req,
//         res
//       );
//     }
// );
  



module.exports = router;