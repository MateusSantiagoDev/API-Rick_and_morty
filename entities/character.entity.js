import {randomUUID} from "crypto";

export class characterEntity{
    constructor(character, userId){
        this.id = character.id ?? randomUUID();
         this.name = character.name;
         this.image = character.image;
         this.userId = userId;
    }

    validate(){
        if(!this.name || !this.image){
            throw new Error("Not found!");
        }
    }

    getCharacter(){
        return{
            id: this.id,
            name: this.name,
            image: this.image,
            userId: this.userId,
        }
    }
}