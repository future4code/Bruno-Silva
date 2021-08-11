import app from './app';

import getUserProfile from './endpoints/getUserProfile';
import getProfileByUserId from './endpoints/getProfileByUserId';

import login from './endpoints/login';
import signup from './endpoints/signup';

app.get("/user/profile", getUserProfile);
app.get("/user/:id", getProfileByUserId);

app.post("/signup", signup);
app.post("/login", login);