import express from 'express'

import { TaskController } from '../controller/task/TaskController'

export const taskRouter = express.Router()

const taskController = new TaskController()

taskRouter.post('/task/signup', taskController.createTask);
taskRouter.post('/task/login', taskController.getTaskById);