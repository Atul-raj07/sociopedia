import express from "express"
const Router = express.Router();

import { usersController } from "../controller/users.controller.js"
import { verifyToken } from "../middlewares/auth.middleware.js";

Router.get("/:id",verifyToken,usersController)

export default Router