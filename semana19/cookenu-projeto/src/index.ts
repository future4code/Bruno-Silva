import app from './app';

import getUserProfile from './endpoints/getUserProfile';
import getProfileByUserId from './endpoints/getProfileByUserId';
import getRecipeById from './endpoints/getRecipeById';

import login from './endpoints/login';
import signup from './endpoints/signup';
import createRecipe from './endpoints/createRecipe';


app.get("/user/profile", getUserProfile);
app.get("/user/:id", getProfileByUserId);
app.get("/recipe/:id", getRecipeById);

app.post("/signup", signup);
app.post("/login", login);
app.post("/recipe", createRecipe);