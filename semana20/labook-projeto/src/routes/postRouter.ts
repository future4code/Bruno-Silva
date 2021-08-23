import express from 'express';
import { PostBusiness } from '../business/posts/PostBusiness';
import { PostController } from '../controller/PostController';
import { SqlPostDatabase } from '../data/SQL/SqlPostDatabase';

export const postRouter = express.Router();

const postDatabase = new SqlPostDatabase();
const postBusiness = new PostBusiness(postDatabase);
const postController = new PostController(postBusiness);

postRouter.get("/:id", (req,res) => postController.findPostById(req,res));

postRouter.post("/create", (req,res) => postController.create(req,res));