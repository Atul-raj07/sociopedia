import express from "express"
const Router = express.Router();

import { addRemoveFriend, friendsController, usersController } from "../controller/users.controller.js"
import { verifyToken } from "../middlewares/auth.middleware.js";

Router.get("/:id",verifyToken,usersController)
Router.get("/:id/friends",verifyToken,friendsController)
Router.patch("/:id/:friendId",verifyToken,addRemoveFriend)

export default Router