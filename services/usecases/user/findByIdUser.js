export class findByIdUsecase{
    constructor(userRepository){
       this.repository = userRepository;
    }

    async execute(userId){
        if(!userId){
            throw new Error("Not found!");
        }
        const id = await this.repository.findById(userId);
        if(!id){
            throw new Error("Not found!");
        }
        return id;
    }
}