import jwt from "jsonwebtoken";
import {config} from "dotenv";

if(process.env.NOD_ENV !== "production"){
    config();
}

export class jwtHelp{
     tokenGenerator(data){
       const token = jwt.sign( { data }, process.env.SECRET_PASSWORD, {expiresIn: "24h"});
       return token
     }
     verifyToken(token){
         const data = jwt.verify(token, process.env.SECRET_PASSWORD);
         return data;
     }

     
}