import app from "./app";
import createUserAddress from "./endpoints/createUserAddress";

app.post('/users/signup', createUserAddress);