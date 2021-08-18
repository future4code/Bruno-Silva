import app from './app';
import signupController from '../src/controller/user/signupController';

app.post("/signup", signupController);