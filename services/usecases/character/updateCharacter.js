import {characterEntity} from "../../../entities/character.entity.js";

export class updateCharacterUsecase{
    constructor(characterRepository, findByIdCharacterUsecase){
        this.repository = characterRepository;
        this.findById = findByIdCharacterUsecase;
    }

    async execute(characterUpdate, characterId){
        const idCharacter = await this.findById.execute(characterId);
        if(!idCharacter){
            throw new Error("Not found");
        }
        const characterEdt = Object.assign(idCharacter, characterUpdate);
        const characterValidate = new characterEntity(characterEdt);
        characterValidate.validate();
        return await this.repository.update(characterValidate.getCharacter());
    }
}