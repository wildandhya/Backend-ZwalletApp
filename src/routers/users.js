/** @format */

const usersRouter = require("express").Router();
const usersController = require("../controllers/users");
const uploadImage = require("../helpers/middleware/uploadImage");

usersRouter.get("/user", usersController.getContact);

module.exports = usersRouter;
