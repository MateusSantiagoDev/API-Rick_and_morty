import { userEntity } from "../../../entities/user.entity.js";

export class updateUsecase{
    constructor(userRepository, findByIdUsecase){
         this.repository = userRepository;
         this.findById = findByIdUsecase;
    }

    async execute(userUpdate, userId){
         const updateId = await this.findById.execute(userId);         
         const userEdt = Object.assign(updateId, userUpdate);
         const userValidate = new userEntity(userEdt);
         userValidate.validate();
         return await this.repository.update(userValidate.getUser());         
    }
}