import app from './app';

import getUserProfile from './endpoints/getUserProfile';

import login from './endpoints/login';
import signup from './endpoints/signup';

app.get("/user/profile", getUserProfile);

app.post("/signup", signup);
app.post("/login", login);