export class findEmailUser{
    constructor(userRepository){
        this.repository = userRepository;
    }

    async execute(email){
         const user = await this.repository.findUserEmail(email);
         if(!user){
            throw new Error("User not found");
         }
         return user;
    }
}