/* import {config} from "dotenv"; */
import mongoConnect from "mongoose";
/* const {connect} = mongoConnect; */

/* if(process.env.NOD_ENV !== "production"){
    config();
} */

export class mongoDBConnect{
    async connectDB(){
        await mongoConnect.connect(process.env.DATABASE_URL);
    };
};