/** @format */

const authRouter = require("express").Router();
const authController = require("../controllers/auth");

authRouter.post("/register", authController.register);
authRouter.post("/login", authController.login);
authRouter.post("/checkEmail", authController.checkEmail);
authRouter.patch("/resetPassword", authController.resetPassword);
authRouter.get("/sendEmail", authController.sendEmail);

module.exports = authRouter;
