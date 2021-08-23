import express from 'express';
import { UserBusiness } from '../business/users/UserBusiness';
import { UserController } from '../controller/UserController';
import { SqlUserDatabase } from '../data/SQL/SqlUserDatabase';

export const userRouter = express.Router();

const userDatabase = new SqlUserDatabase();
const userBusiness = new UserBusiness(userDatabase);
const userController = new UserController(userBusiness);

userRouter.post("/signup", (req,res) => userController.signup(req,res));
userRouter.post("/login", (req,res) => userController.login(req,res));