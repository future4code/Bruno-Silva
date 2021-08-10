import app from "./app";
import getUserProfile from "./endpoints/getUserProfile";
import login from "./endpoints/login";
import signUp from "./endpoints/signUp";

app.get("/user/profile", getUserProfile);

app.post("/signup", signUp);
app.post("/login", login);