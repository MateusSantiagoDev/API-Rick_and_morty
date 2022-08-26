import { characterRepository } from "../database/repository/characterRepository/characterRepository.js";

import { userRepository } from "../database/repository/userRepository/userRepository.js";
import { findByIdUsecase } from "../services/usecases/user/findByIdUser.js";

import { CreateCharacterUsecase } from "../services/usecases/character/createCharacter.js";
import { deleteCharacterUsecase } from "../services/usecases/character/deleteCharacter.js";
import { findAllCharacterUsecase } from "../services/usecases/character/findAllCharacter.js";
import { findByIdCharacterUsecase } from "../services/usecases/character/findByIdCharacter.js";
import { findByNameCharacterUsecase } from "../services/usecases/character/findByNameCharacter.js";
import { updateCharacterUsecase } from "../services/usecases/character/updateCharacter.js";

import { service } from "../services/services.js";
import { characterController } from "../controllers/characterController.js"
import { characterRoutes } from "../routes/characterRoutes.js";

export const makeCharacterFactory = (router) => {
      const characterRepositoryDB = new characterRepository();

      const userRepositoryDB = new userRepository();
      const findUserById = new findByIdUsecase(userRepositoryDB);     

      const createCharacter = new CreateCharacterUsecase(characterRepositoryDB, findUserById);
      const deleteCharacter = new deleteCharacterUsecase(characterRepositoryDB);
      const findAllCharacter = new findAllCharacterUsecase(characterRepositoryDB);
      const findByIdCharacter = new findByIdCharacterUsecase(characterRepositoryDB);
      const findByNameCharacter = new findByNameCharacterUsecase(characterRepositoryDB);
      const updateCharacter = new updateCharacterUsecase(characterRepositoryDB, findByIdCharacter);

      const characterService = new service(
        createCharacter,
        deleteCharacter,
        findAllCharacter,
        findByIdCharacter,
        updateCharacter
      )

      const characterControllers = new characterController(characterService, findByNameCharacter);

      const characterRoute = new characterRoutes(characterControllers, router);

      return characterRoute;


}