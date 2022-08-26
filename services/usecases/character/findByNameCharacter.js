export class findByNameCharacterUsecase{
    constructor(characterRepository){
        this.repository = characterRepository;
    }

    async execute(characterName){
        const nameCharacter = await this.repository.findByName(characterName);
        if(!nameCharacter){
            throw new Error("Not found!");
        }
         return nameCharacter;
    }
}