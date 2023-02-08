import dotenv from "dotenv";
//Configuracion de dotenv
dotenv.config();

import Server from "./models/server";


const server = new Server();

server.listen();