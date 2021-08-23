import { Post, PostInputDTO } from "../../model/Post"
import { Authenticator } from "../../services/Authenticator"
import { IdGenerator } from "../../services/IdGenerator"
import { authenticationData } from "../../types"
import { POST_TYPES } from "../../model/Post"
import { PostRepository } from "./PostRepository"
import { CustomError } from "../../error/CustomError"

export class PostBusiness {
    constructor(
        private postDatabase: PostRepository
    ) {}

    create = async (
        token: string,
        input: PostInputDTO
    ): Promise<void> => {
        const { photo, description, type } = input;

        if(!token){
            throw new CustomError(422, `Endpoint usage requires authorization! 
                Please, try to insert a valid token`);
        };

        if(!photo || !description){
            throw new CustomError(422, `One or more fields are empty! 
                Please, check 'photo' and 'description' input´s value`);
        };

        if(typeof photo !== "string" || typeof description !== "string") {
            throw new CustomError(422, `'photo' and 'description' should be a string type one! 
                Please, check input´s values`);
        };

        const newToken = new Authenticator();
        const tokenData: authenticationData = newToken.getTokenData(token);

        if(!tokenData){
            throw new CustomError(400, `Token invalid! Please, try again`);
        };

        const newId = new IdGenerator();
        const id: string = newId.generateId();

        const validType: POST_TYPES = type === "event"? POST_TYPES.EVENT : POST_TYPES.NORMAL

        const newPost: Post = new Post(id, photo, description, validType, tokenData.id);

        await this.postDatabase.create(newPost);
    };

    findPostById = async (
        id: string,
        token: string
    ): Promise<Post> => {
        if(!token){
            throw new CustomError(422, `Endpoint usage requires authorization! 
                Please, try to insert a valid token`);
        }
        
        const newToken = new Authenticator();
        const tokenData: authenticationData = newToken.getTokenData(token);

        if(!tokenData){
            throw new CustomError(400, `Token invalid! Please, try again`);
        };

        const post = await this.postDatabase.findPostById(id)

        if (!post) {
            throw new CustomError(404, "Post hasn´t been found! Please, try another one");
        };

        return post;
    };
};