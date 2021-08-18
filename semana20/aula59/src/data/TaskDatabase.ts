import { Task, TASK_STATUS } from "../model/Task";
import { BaseDatabase } from "./BaseDatabase";

export class TaskDatabase extends BaseDatabase {
    private static TABLE_NAME = "AULA59_Task"

    async create(
        newTask: Task
    ) {
        await this.getConnection().insert({
            taskId: newTask.getId(),
            title: newTask.getTitle(),
            description: newTask.getDescription(),
            deadline: newTask.getDeadline(),
            authorId: newTask.getAuthorId()
        }).into(TaskDatabase.TABLE_NAME);
    };

    async selectById({ id }: any): Promise<any> {
        const result = await this.getConnection().raw(`
        SELECT AULA59_Task.*, nickname 
        FROM AULA59_Task
        JOIN AULA59_User
        ON authorId = id
        WHERE taskId = '${id}';
        `)

        return result[0][0];
    };
};