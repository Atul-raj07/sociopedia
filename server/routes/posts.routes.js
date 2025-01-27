import express from "express" ;
import { verifyToken } from "../middlewares/auth.middleware.js";
 const Router = express.Router()

 Router.get("/",verifyToken);

 export default Router