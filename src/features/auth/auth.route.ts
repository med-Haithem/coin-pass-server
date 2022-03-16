import express from "express";
import { expressCallback, validatorCallback } from "../../middlewares";
import userController from "./auth.controller";

const authRouter = express.Router();

authRouter.post("/login", expressCallback(userController.login));
authRouter.post("/register", expressCallback(userController.register));

export default authRouter;
