import app from './app';

import getAllUsers from './endpoints/getAllUsers';
import getUserById from './endpoints/getUserById';
import searchUsers from './endpoints/searchUsers';
import getTaskUsers from './endpoints/getTaskUsers';
import getTaskById from './endpoints/getTaskById';
import getTasksByCreatorId from './endpoints/getTasksByCreatorId';
import getTasksByStatus from './endpoints/getTasksByStatus';

import createUser from './endpoints/createUser';
import createTask from './endpoints/createTask';
import createTaskResponsible from './endpoints/createTaskResponsible';

import editUser from './endpoints/editUser';
import editTaskStatusById from './endpoints/editTaskStatusById';
import getTasksDelayed from './endpoints/getTasksDelayed';
import deleteTaskResponsible from './endpoints/deleteTaskResponsible';

app.get("/user/all", getAllUsers);
app.get("/user/:id", getUserById);
app.get("/user", searchUsers);
app.get("/task/search", getTasksByStatus);
app.get("/task/delayed", getTasksDelayed);
app.get("/task/:id/responsible", getTaskUsers);
app.get("/task/:id", getTaskById);
app.get("/task", getTasksByCreatorId);


app.post("/user", createUser);
app.post("/task", createTask);
app.post("/task/responsible", createTaskResponsible);

app.put("/user/edit/:id", editUser);
app.put("/task/status/:id", editTaskStatusById);

app.delete("/task/:taskId/responsible/:responsibleUserId", deleteTaskResponsible);
