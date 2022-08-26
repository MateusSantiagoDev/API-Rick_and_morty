export class findByIdCharacterUsecase{
    constructor(characterRepository){
        this.repository = characterRepository;
    }

    async execute(characterId){
        const id = await this.repository.findById(characterId);
        if(!id){
            throw new Error("Not found!");
        }
        return id;
    }
}