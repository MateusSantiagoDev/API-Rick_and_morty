export class findAllCharacterUsecase{
    constructor(characterRepostory){
        this.repository = characterRepostory;
    }

    async execute(){
       return await this.repository.findAll(); 
    }
}