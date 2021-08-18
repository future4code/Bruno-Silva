import { Request, Response } from 'express';
import { TaskBusiness } from '../business/TaskBusiness';

export class TaskController {

    async createTask(
        req: Request,
        res: Response
    ): Promise<void> {
        try {
            const { title, description, deadline, authorId } = req.body

            await new TaskBusiness().createTask({
                title, description, deadline, authorId
            })

            res.status(201).end()

        } catch (error) {

            res.statusMessage = error.message
            res.status(500).end()
        }
    };

    async getTaskById(
        req: Request,
        res: Response
    ): Promise<void> {
        try {

            const { id } = req.params

            const task = await new TaskBusiness().getTaskById(id)

            res.status(200).send(task)

        } catch (error) {
            res.status(400).send(error.message)
        }
    }

}