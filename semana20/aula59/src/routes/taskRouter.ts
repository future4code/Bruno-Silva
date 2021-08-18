import express from 'express'

import { TaskController } from '../controller/TaskController'

export const taskRouter = express.Router()

const taskController = new TaskController()

taskRouter.get("/:id", taskController.getTaskById);
taskRouter.put("/", taskController.createTask);
