import mongoDBCharacter from "mongoose";
const {model, Schema} = mongoDBCharacter;

export const characterSchema = new Schema({
    id:{type: String, required: true},
    name:{type: String, required: true},    
    image:{type: String, required: true},
    userId:{type:String, required: true},
    createdAt:{type: Date, default: Date.now()},
});

export const characterDatabase = model("character", characterSchema);