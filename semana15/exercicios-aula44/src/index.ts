import { app } from './app';
import { getAllUsers } from './endpoints/getAllUsers';
import { getUsersByType } from './endpoints/getUsersByType';

app.get("/users", getAllUsers);
app.get("/users", getUsersByType);
// app.get("/users", getUsersBySearchName);
// app.post("/users", addNewUsers);