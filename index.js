import express, {Router} from "express";
import cors from "cors";

import { mongoDBConnect } from "./database/mongo/connection/connect.js";
import { makeUserFactory } from "./factories/user.js";
import { makeCharacterFactory } from "./factories/character.js";
import { makeAuthFactory } from "./factories/auth.js";

import  swaggerUi  from "swagger-ui-express";
import swaggerDocument from "./swagger.json" assert{ type: "json"};



const connectDataBase = new mongoDBConnect();
await connectDataBase.connectDB();

const port = 3000;
const app = express();
const router = Router();

const user = makeUserFactory(router);
const character = makeCharacterFactory(router);
const auth = makeAuthFactory(router);

app.use(express.json());
app.use(cors());


app.use("/characters", character.route());
app.use("/users", user.route());
app.use("/auth", auth.route());

app.use("/api-docs", swaggerUi.serve);
app.get("/api-docs", swaggerUi.setup(swaggerDocument)); 



app.listen(port, () =>{
  console.log(`Servidor rodando em: http://localhost:${port}`);
})