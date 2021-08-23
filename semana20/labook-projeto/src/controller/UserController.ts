import { Request, Response } from 'express';
import { UserBusiness } from '../business/users/UserBusiness';
import { LoginInputDTO, UserInputDTO } from '../model/User';

export class UserController {
    constructor(
        private userBusiness: UserBusiness
    ) {}

    async signup (
        req: Request,
        res: Response
    ): Promise<void> {
        try {
            let message = "User registred successfully!";

            const input: UserInputDTO = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            };

            console.log(input)

            const token = await this.userBusiness.signup(input);

            res.status(201).send({ message, token });
        } catch (error) {
            res.status(error.code).send({ message: error.message? error.message : error.sqlMessage });
        };
    };

    async login (
        req: Request,
        res: Response
    ): Promise<void> {
        try {
            let message = "User logged successfully!";

            const input: LoginInputDTO = {
                email: req.body.email,
                password: req.body.password
            };

            const token = await this.userBusiness.login(input);

            res.status(200).send({ message, token });
        } catch (error) {
            res.status(error.code).send({ message : error.message? error.message : error.sqlMessage});
        };
    };
};