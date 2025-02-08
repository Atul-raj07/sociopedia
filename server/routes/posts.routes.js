import express from "express" ;
import { verifyToken } from "../middlewares/auth.middleware.js";
import { getfeeds } from "../controller/posts.controller.js";
 const Router = express.Router()

//  Router.get("/",verifyToken);

 Router.get("/getfeeds",verifyToken,getfeeds)

 export default Router