export class deleteCharacterUsecase{
    constructor(characterRepository){
       this.repository = characterRepository;
    }

    async execute(characterId){
        const deleted = await this.repository.delete(characterId);
        if(!deleted){
            throw new Error("Not found!");
        }
        return deleted;
    }
}