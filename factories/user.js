import { userRepository } from "../database/repository/userRepository/userRepository.js";

import { createUsecase } from "../services/usecases/user/createUser.js";
import { findByIdUsecase } from "../services/usecases/user/findByIdUser.js";
import { updateUsecase } from "../services/usecases/user/updateUser.js";
import { findAllUsecase } from "../services/usecases/user/findAllUser.js";
import { deleteUsecase } from "../services/usecases/user/deleteUser.js";

import { service } from "../services/services.js";
import { userRoutes } from "../routes/userRoutes.js";
import { controller } from "../controllers/controller.js";

export const  makeUserFactory = (router) => {
    const userRepositoryDB = new userRepository();

    const createUserUsecase = new createUsecase(userRepositoryDB);
    const findByIdUserUsecase = new findByIdUsecase(userRepositoryDB);
    const updateUserUsecase = new updateUsecase(userRepositoryDB,findByIdUserUsecase);
    const findAllUserUsecase = new findAllUsecase(userRepositoryDB);
    const deleteUserUsecase = new deleteUsecase(userRepositoryDB);

    const userService = new service(
        createUserUsecase,
        deleteUserUsecase,
        findAllUserUsecase,
        findByIdUserUsecase,
        updateUserUsecase,
      );

      const userController = new controller(userService);

      const userRoute = new userRoutes(userController, router);

      return userRoute;
}