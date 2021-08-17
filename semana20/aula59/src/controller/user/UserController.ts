import { Request, Response } from 'express';
import { UserBusiness } from '../../business/user/UserBusiness';

export class UserController {

    async signup(
        req: Request,
        res: Response
    ): Promise<void> {
        try {
            const { name, nickname, email, password, role } = req.body

            const token: string = await new UserBusiness().signup({
                name, nickname, email, password, role
            })

            res
                .status(201)
                .send({
                    message: "Usuário criado!",
                    token
                })
        } catch (error) {
            res.status(400).send(error.message)
        }
    };

    async login(
        req: Request,
        res: Response
    ): Promise<void> {
        try {
            const { email, password } = req.body

            const token: string = await new UserBusiness().login({email, password})

            res.send({
                message: "Usuário logado!",
                token
            })
        } catch (error) {
            res.status(400).send(error.message)
        }
    }

}