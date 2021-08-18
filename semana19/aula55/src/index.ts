import app from './app';
import { v4 } from "uuid"
import createNewUser from './endpoints/createNewUser';
import signup from './endpoints/signup';

// Exercício 1

// const id = v4();
// console.log("Generated Id: ", id);

// Exercício 2
app.post("/user", createNewUser);
app.post("/user/signup", signup);