import { Task } from '../../model/task';
import { HashManager } from "../../services/hashManager";
import { IdGenerator } from "../../services/idGenerator";
import { TokenManager } from "../../services/TokenManager";

export class TaskBusiness {
    getTaskByIdBusiness = async (
        id: string
    ) => {
        const result = await selectTaskById(id)

        if (!result) {
            throw new Error("Tarefa não encontrada")
        }

        const taskWithUserInfo = {
            id: result.id,
            title: result.title,
            description: result.description,
            deadline: result.deadline,
            status: result.status,
            authorId: result.author_id,
            authorNickname: result.nickname
        }

        return taskWithUserInfo
    }

    createTaskBusiness = async (
        taskData: taskData
    ) => {

        if (
            !taskData.title ||
            !taskData.description ||
            !taskData.deadline ||
            !taskData.authorId
        ) {
            throw new Error('"title", "description", "deadline" e "authorId" são obrigatórios')
        }

        const id: string = generateId()

        await insertTask({
            id,
            ...taskData
        })
    }
}