import app from './app';
import createUser from './endpoints/createUser';
import getUser from './endpoints/getUser';
import editUser from './endpoints/editUser';
import createTask from './endpoints/createTask';

app.get("/user/:id", getUser);

app.post("/user", createUser);
app.post("/task", createTask);

app.put("/user/edit/:id", editUser);
