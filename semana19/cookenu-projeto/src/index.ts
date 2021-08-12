import app from './app';

import getRecipesOfFollowedUsers from './endpoints/getRecipesOfFollowedUsers';
import getUserProfile from './endpoints/getUserProfile';
import getProfileByUserId from './endpoints/getProfileByUserId';
import getRecipeById from './endpoints/getRecipeById';

import login from './endpoints/login';
import signup from './endpoints/signup';
import createRecipe from './endpoints/createRecipe';
import followUser from './endpoints/followUser';
import unfollowUser from './endpoints/unfollowUser';


app.get("/user/feed", getRecipesOfFollowedUsers);
app.get("/user/profile", getUserProfile);
app.get("/user/:id", getProfileByUserId);
app.get("/recipe/:id", getRecipeById);

app.post("/signup", signup);
app.post("/login", login);
app.post("/recipe", createRecipe);
app.post("/user/follow", followUser);
app.post("/user/unfollow", unfollowUser);