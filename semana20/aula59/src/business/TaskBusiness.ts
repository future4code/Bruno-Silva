import { TaskDatabase } from '../data/TaskDatabase';
import { Task } from '../model/Task';
import { IdGenerator } from "../services/IdGenerator";

export class TaskBusiness {
    getTaskById = async (
        id: string
    ) => {
        const result = await new TaskDatabase().selectById({id})

        if (!result) {
            throw new Error("Tarefa não encontrada")
        }

        const taskWithUserInfo = {
            id: result.taskId,
            title: result.title,
            description: result.description,
            deadline: result.deadline,
            status: result.status,
            authorId: result.authorId,
            authorNickname: result.nickname
        }

        return taskWithUserInfo
    }

    createTask = async ({
        title,
        description,
        deadline,
        authorId
    }: any) => {

        if (
            !title ||
            !description ||
            !deadline ||
            !authorId
        ) {
            throw new Error('"title", "description", "deadline" e "authorId" são obrigatórios')
        }

        const id: string = new IdGenerator().generateId()

        const newTask = new Task(id, title, description, deadline, authorId);
        await new TaskDatabase().create(newTask)
    }
}