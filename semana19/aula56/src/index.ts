import app from "./app";

import getUserById from "./endpoints/getUserById";
import getUserProfile from "./endpoints/getUserProfile";

import login from "./endpoints/login";
import signUp from "./endpoints/signUp";

import deleteUserById from "./endpoints/deleteUserById";


app.get("/user", getUserById);
app.get("/user/profile", getUserProfile);

app.post("/signup", signUp);
app.post("/login", login);

app.delete("/user/:id", deleteUserById);