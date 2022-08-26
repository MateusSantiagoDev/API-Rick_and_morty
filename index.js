import express, {Router} from "express";
import cors from "cors";

import { mongoDBConnect } from "./database/mongo/connection/connect.js";
import { makeUserFactory } from "./factories/user.js";
import { makeCharacterFactory } from "./factories/character.js";

const connectDataBase = new mongoDBConnect();
await connectDataBase.connectDB();

const port = 3000;
const app = express();
const router = Router();

const user = makeUserFactory(router);
const character = makeCharacterFactory(router);

app.use(express.json());
app.use(cors());
app.use("/characters", character.route());
app.use("/users", user.route());


app.listen(port, () =>{
  console.log(`Servidor rodando em: http://localhost:${port}`);
})