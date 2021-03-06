/** @format */

const usersRouter = require("express").Router();
const usersController = require("../controllers/users");
const uploadImage = require("../helpers/middleware/uploadImage");

usersRouter.get("/user", usersController.getContact);
usersRouter.patch("/user/edit", uploadImage.singleUpload,usersController.userEdit);
usersRouter.post("/checkPin", usersController.checkPin);
usersRouter.patch("/editPin", usersController.editPin);

usersRouter.post("/checkPass", usersController.checkPass);
usersRouter.patch("/editImage", uploadImage.singleUpload,usersController.editImage);


module.exports = usersRouter;
