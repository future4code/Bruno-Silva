import { Request, Response } from 'express';
import { FollowUserDatabase } from '../data/FollowUserDatabase';
import { UserDatabase } from '../data/UserDatabase';
import { Authenticator } from '../services/Authenticator';
import { AuthenticationData } from '../types';

const unfollowUser = async(
    req: Request,
    res: Response
):Promise<void> => {
    let errorCode: number = 400;

    try { 
        const token = req.headers.authorization;
        const userToUnfollowId = req.body.userToUnfollowId;

        if(!token){
            errorCode = 422;
            throw new Error("Endpoint usage requires authorization! Please, try to insert a valid token");
        };

        if(!userToUnfollowId) {
            errorCode = 422;
            throw new Error("'userToUnfollowId' field are empty! Please, try fill input´s value");
        };

        const user = await UserDatabase.getUserById(userToUnfollowId);

        if(!user) {
            errorCode = 409;
            throw new Error("User doesn´t exist! Please, try again");
        };

        const authData: AuthenticationData = Authenticator.getTokenData(token);

        if(authData.id === userToUnfollowId) {
            errorCode = 422;
            throw new Error("User can´t unfollow itself! Please, check input´s value");
        };

        const follows = await FollowUserDatabase.getFollowByFollowerId(authData.id);

        const indexAlreadyFollowing = follows[0] && follows.findIndex((follow: any) => {    
            return (follow.followerUserId === authData.id && follow.followedUserId === userToUnfollowId);
        });

        if(indexAlreadyFollowing === -1) {
            errorCode = 422;
            throw new Error("User hasn´t being followed! Please, check input´s value");
        };

        await FollowUserDatabase.deleteFollow(authData.id, userToUnfollowId);

        res.status(201).send({ message: "Unfollowed successfully!"});
    } catch(error) {
        res.status(errorCode).send({ message: error.message? error.message : error.sqlMessage });
    };
};

export default unfollowUser;