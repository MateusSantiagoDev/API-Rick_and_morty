export class deleteUsecase{
    constructor(userRepository){
          this.repository = userRepository;
    }

    async execute(userId){
        const deleted = await this.repository.delete(userId)
        if(!deleted){
            throw new Error("Not found!");
        }
        return deleted;
    }
}