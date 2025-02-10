import express from "express" ;
import { verifyToken } from "../middlewares/auth.middleware.js";
import { getfeeds, getlikes, getuserpost } from "../controller/posts.controller.js";
 const Router = express.Router()

//  Router.get("/",verifyToken);

 Router.get("/getfeeds",verifyToken,getfeeds)
 Router.get("/getuserpost",verifyToken,getuserpost)
 Router.put("/:id/likes",verifyToken,getlikes)

 export default Router