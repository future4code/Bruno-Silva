export enum POST_TYPES {
    NORMAL = "normal",
    EVENT = "event"
};

export class Post {
    constructor(
        private id: string,
        private photo: string,
        private description: string,
        private type: POST_TYPES,
        private authorId: string,
        private created_at?: Date
    ) {}

    getId():string {
        return this.id;
    };

    getPhoto():string {
        return this.photo;
    };

    getDescription():string {
        return this.description;
    };

    getType():POST_TYPES {
        return this.type;
    };

    getCreatedAt():Date | undefined {
        return this.created_at;
    };

    getAuthorId():string {
        return this.authorId;
    };

    setId(newId:string):void {
        this.id = newId;
    };

    setPhoto(newPhoto:string):void {
        this.photo = newPhoto;
    };

    setDescription(newDescription:string):void {
        this.description = newDescription;
    };

    setType(newType: POST_TYPES):void {
        this.type = newType;
    };

    static toPostModel(data: any):Post {
        return new Post(data.id, data.photo, data.description, data.type, data.created_at, data.authoId);
    };
};

export interface PostInputDTO {
    photo: string | undefined,
    description: string | undefined,
    type?: POST_TYPES
}