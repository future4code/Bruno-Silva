import { app } from './app';
import { createUser } from './endpoints/createUser';
import { getAllUsers } from './endpoints/getAllUsers';
import { getUserAccountBalance } from './endpoints/getUserAccountBalance';

app.get("/users", getAllUsers);
app.get("/users/:cpf", getUserAccountBalance);
app.post("/users", createUser);