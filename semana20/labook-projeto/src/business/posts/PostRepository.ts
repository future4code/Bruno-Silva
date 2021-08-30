import { Post } from "../../model/Post";

export interface PostRepository {
    create(post: Post):Promise<void>
    findPostById(id: string):Promise<Post>
}