import {userEntity} from "../../../entities/user.entity.js";

export class createUsecase{
    constructor(userRepository){
        this.repository = userRepository;
    }

    async execute(user){
         const newUser = new userEntity(user)
         newUser.validate();
         return await this.repository.create(newUser.getUser());
    }
}