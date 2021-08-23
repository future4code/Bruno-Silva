import { PostRepository } from "../../business/posts/PostRepository";
import { Post } from "../../model/Post";
import { SqlBaseDatabase } from "./SqlBaseDatabase";


export class SqlPostDatabase extends SqlBaseDatabase implements PostRepository{
    private static TABLE_NAME = "labook_posts"

    create = async (
        newPost: Post
    ): Promise<void> => {
        await this.getConnection().insert({
            id: newPost.getId(),
            photo: newPost.getPhoto(),
            description: newPost.getDescription(),
            type: newPost.getType(),
            author_id: newPost.getAuthorId()
        }).into(SqlPostDatabase.TABLE_NAME);
    };

    findPostById = async( 
        id: string
    ):Promise<Post> => {
        const result = await this.getConnection()
            .select()
            .from(SqlPostDatabase.TABLE_NAME)
            .where({ id });

        return Post.toPostModel(result[0]);
    };
};