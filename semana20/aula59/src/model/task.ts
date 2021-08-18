export enum TASK_STATUS {
   TO_DO = "TO_DO",
   DOING = "DOING",
   DONE = "DONE"
};

export type taskData = Task & { status: TASK_STATUS }

export class Task {
   constructor(
      private id: string,
      private title: string,
      private description: string,
      private deadline: string,
      private authorId: string
   ) {};

   getId():string {
      return this.id;
   };

   getTitle():string {
      return this.title;
   };

   getDescription():string {
      return this.description;
   };

   getDeadline():string {
      return this.deadline;
   };

   getAuthorId():string {
      return this.authorId;
   };

   setTitle(newTitle: string) {
      this.title = newTitle;
   };

   setDescription(newDescription: string) {
      this.description = newDescription;
   };

   static toTaskModel(data: Task) {
      return new Task(data.id, data.title, data.description, data.deadline, data.authorId);
   };
};