import { Request, Response } from 'express';
import { RandomNumber } from '../constants/RandomNumber';
import { UserDatabase } from '../database/UserDatabase';
import { User } from '../entities/User';

const createNewUser = async(
    req: Request,
    res: Response
): Promise<any> => {
    let errorCode: number = 400;
    const regExValidateEmail: RegExp = /^([a-z]){1,}([a-z0-9._-]){1,}([@]){1}([a-z]){2,}([.]){1}([a-z]){2,}([.]?){1}([a-z]?){2,}$/i;

    try {
        const {name, email, age} = req.body;

        if (!name || !email || !age) {
            errorCode = 422;
            throw new Error(`One or more fields are empty! Please, fill 'name',
             'email' and 'age' to proceed`);
        };

        if (typeof age !== "number" || age <= 0 || age.toString().split(".").length > 1) {
            errorCode = 422;
            throw new Error(`'age' was expected as a integer, positive and not null number!
                 Please, check 'age' input´s value`);
        };

        if (age < 18) {
            errorCode = 422;
            throw new Error(`User should have at least 18 years old! Please, check 'age' input´s value`);
        }

        if (!regExValidateEmail.test(email)) {
            errorCode = 422;
            throw new Error("Insert a valid e-mail, such as: 'xxxx@yyyyy.zzz.www");
        };

        const newUser: User = new User(RandomNumber.getRandomNumber(), name, email, age);
        // const createUser: UserDatabase = await UserDatabase.newUser(newUser);
        await UserDatabase.createUser(newUser);

        //QUAL ERRO PODERIA DAR COMO RESPOSTA DO CONNECTION DE UM POST?

        res.status(201).send({ message: "User created successfully!"});
    } catch(error) {
        res.status(errorCode).send({ message: error.message? error.message : error.sqlMessage });
    };
};

export default createNewUser;