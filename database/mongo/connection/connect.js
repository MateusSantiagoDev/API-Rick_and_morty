import mongoConnect from "mongoose";

/* import {config} from "dotenv"; 
 if(process.env.NOD_ENV !== "production"){
    config();
}  */

export class mongoDBConnect{
    async connectDB(){
        await mongoConnect.connect(process.env.DATABASE_URL);
    };
};