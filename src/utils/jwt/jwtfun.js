import jwt from "jsonwebtoken";
import { config } from "../config/config.js";
import { Admin } from "../models/admin.js";

const jwtDecode= (token) => {
 try{
        return jwt.verify(token, config.auth.jwtSecret);
 }
 catch(err){
     return null;
 }
}
