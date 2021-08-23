import { Request, Response } from 'express';
import { PostBusiness } from '../business/posts/PostBusiness';
import { PostInputDTO } from '../model/Post';

export class PostController {
    constructor(
        private postBusiness: PostBusiness
    ) {}

    create = async (
        req: Request,
        res: Response
    ): Promise<void> => {
        try {
            let message = "Post created successfully!";

            const token: string = req.headers.authorization as string;
            const input: PostInputDTO = {
                photo: req.body.photo,
                description: req.body.description,
                type: req.body.type
            };

            await this.postBusiness.create(token, input);

            res.status(201).send({ message });
        } catch (error) {
            res.status(error.code).send({ message: error.message? error.message : error.sqlMessage });
        };
    };

    findPostById = async (
        req: Request,
        res: Response
    ): Promise<void> => {
        try {
            let message = "Post has been found successfully!";

            const { id } = req.params;
            const token: string = req.headers.authorization as string;

            const post = await this.postBusiness.findPostById(id, token);

            res.status(200).send({ message, post });
        } catch (error) {
            res.status(error.code).send({ message: error.message? error.message : error.sqlMessage });
        };
    };
};