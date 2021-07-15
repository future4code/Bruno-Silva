import { app } from './app';
import { getAllUsers } from './endpoints/getAllUsers';
import { getUsersBySearch } from './endpoints/getUsersBySearch';
import { postNewUser } from './endpoints/postNewUser';

app.get("/users", getAllUsers);
app.get("/users/search", getUsersBySearch);
app.post("/users", postNewUser);