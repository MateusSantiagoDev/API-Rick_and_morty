import {characterEntity} from "../../../entities/character.entity.js";

export class CreateCharacterUsecase{
    constructor(characterRepository, findByIdUsecase){
        this.repository = characterRepository;
        this.findById = findByIdUsecase;
    }

    async execute(characterCreate){
      const userId = characterCreate.userId;
      const idUser = await this.findById.execute(userId) 
      if(!idUser){
        throw new Error("Not found!");
      } 
      const newCharacter = new characterEntity(characterCreate, idUser);
      newCharacter.validate();
      return await this.repository.create(newCharacter.getCharacter());
    }
}