import { BaseDatabase } from "./BaseDatabase";


export class FollowUserDatabase extends BaseDatabase {
    public static getFollowByFollowerId = async(
        followerUserId: string
    ):Promise<any> => {
        const follows = await BaseDatabase.connection("FollowUser_junction")
            .select()
            .where({ followerUserId });

        return follows;
    };

    public static createFollow = async(
        followerUserId: string,
        followedUserId: string
    ):Promise<void> => {
        console.log("followerUserId", followerUserId);
        console.log("followedUserId", followedUserId);
        await BaseDatabase.connection("FollowUser_junction")
            .insert({
                followerUserId,
                followedUserId
            });
    };
};