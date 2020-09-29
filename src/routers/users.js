/** @format */

const usersRouter = require("express").Router();
const usersController = require("../controllers/users");
const uploadImage = require("../helpers/middleware/uploadImage");

usersRouter.get("/user", usersController.getContact);
usersRouter.patch("/user/:id", uploadImage.singleUpload,usersController.editProfile);


module.exports = usersRouter;
