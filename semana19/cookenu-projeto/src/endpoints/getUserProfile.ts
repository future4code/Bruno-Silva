import { Request, Response } from 'express';
import { UserDatabase } from '../data/UserDatabase';
import { Authenticator } from '../services/Authenticator';

const getUserProfile = async(
    req: Request,
    res: Response
): Promise<void> => {
    let errorCode: number = 400;

    try {
        const authorization = req.headers.authorization as string;
        
        const authenticationData = Authenticator.getTokenData(authorization);

        const userProfile = await UserDatabase.getUserById(authenticationData.id);

        res.status(200).send({ 
            "userProfile": {
                id: userProfile.getId(),
                name: userProfile.getName(),
                email: userProfile.getEmail()
            }
        });
    } catch(error) {
        res.status(errorCode).send({ message: error.message? error.message : error.sqlMessage });
    };
};

export default getUserProfile;