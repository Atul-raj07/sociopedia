import express from 'express';
const app = express();
import dotenv from "dotenv"
import mongoose from 'mongoose';
import cors from "cors"
import bodyParser from 'body-parser';
import multer from 'multer';
import morgan from 'morgan';
import helmet from "helmet"
import path from 'path';
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';

import authRoute from "./routes/auth.routes.js"
import usersRoute from "./routes/users.routes.js"
import postsRoute from "./routes/posts.routes.js"

import { register } from './controller/auth.controller.js';
import { verifyToken } from './middlewares/auth.middleware.js';
import { createPost } from './controller/posts.controller.js';

// config
const __filename = fileURLToPath(new URL(import.meta.url));
const __dirname = path.dirname(__filename);

dotenv.config()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}))
app.use(morgan("common"))
app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(cors())
app.use("/assets",express.static(path.join(__dirname, "public/assets")));
app.use(cookieParser());

const storage = multer.diskStorage({
    destination:function(req, res,cb){
        cb(null,"./public/assets")
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})
const upload = multer({storage})


 async function mongo() {
    mongoose.connect(process.env.MONGO_URL) 
 } 
 mongo() 

 app.use("/auth",authRoute)
 app.use("/users",usersRoute)
 app.use("/posts",postsRoute)
app.get('/', (req, res) =>{
res.send("heheheheh");

})

app.post('/auth/register',upload.single("picture"),register)
app.post("/posts",verifyToken,upload.single("picture"),createPost)
const port = process.env.PORT || 5001

app.listen(port,()=>{
    console.log(port)
})

