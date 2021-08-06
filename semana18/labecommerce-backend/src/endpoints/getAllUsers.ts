import { Request, Response } from 'express';
import { PurchaseDatabase } from '../database/PurchaseDatabase';
import { UserDatabase } from '../database/UserDatabase';
import { Purchase } from '../entities/Purchase';
import { User } from '../entities/User';

const getAllUsers = async(
    req: Request,
    res: Response
): Promise<any> => {
    let errorCode: number = 422;

    try {
        const users = await UserDatabase.getUsers();        

        if (!users) {
            errorCode = 500;
            throw new Error("An error occurred! Please, try again!");
        };

        // for(let user of users){
        //     const allPurchasesByUser = await PurchaseDatabase.getPurchasesByUserId(user.getId());
        //     const x = new User(user.getId(), user.getName(), user.getEmail(), user.getAge()).setUserPurchases(allPurchasesByUser);
        //     const y = await UserDatabase.getUserById(user.getId());

        //     console.log("x", x)
        //     console.log("y", y)
        // };

        const result = await UserDatabase.getUsers();    

        res.status(200).send({users: result});
    } catch(error) {
        res.status(errorCode).send({ message: error.message? error.message : error.sqlMessage });
    };
};

export default getAllUsers;