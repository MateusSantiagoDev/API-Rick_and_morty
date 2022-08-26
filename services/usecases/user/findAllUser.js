export class findAllUsecase{
    constructor(userRepository){
         this.repository = userRepository;
    }

    async execute(){
        return await this.repository.findAll();
    }
}