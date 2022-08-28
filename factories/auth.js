import { userRepository } from "../database/repository/userRepository/userRepository.js";
import { bcryptHelp } from "../auth/bcrypt.js";
import { jwtHelp } from "../auth/jwt.js";
import { findEmailUser } from "../services/usecases/user/findEmailUser.js";
import { authController } from "../controllers/authController.js";
import { authRoutes } from "../routes/authRoutes.js";

export const makeAuthFactory = (router) => {
  const userRepositoryDB = new userRepository();
  const bcrypt = new bcryptHelp();
  const jwt = new jwtHelp();

  const findEmailuser = new findEmailUser(userRepositoryDB);
  const authcontrollers = new authController(findEmailuser, bcrypt, jwt);
  const authRoute = new authRoutes(authcontrollers, router);
  
  return  authRoute;
};

