import mongoDBUser from "mongoose";
const {model, Schema} = mongoDBUser;
import {characterSchema} from "./character.schema.js";

const userSchema = new Schema({
    id:{type: String, required: true},
    name:{type: String, required: true},
    email:{type: String, required: true},
    password:{type: String, required: true},
    image:{type: String, required: true},
    character:{type: [characterSchema], required: true},
    createdAt:{type: Date, default: Date.now()},
});

export const userDatabase = model("user", userSchema);

