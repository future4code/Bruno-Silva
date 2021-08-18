import { Request, Response } from 'express';
import { UserDatabase } from '../data/UserDatabase';
import { Authenticator } from '../services/Authenticator';

const deleteUserById = async(
    req: Request,
    res: Response
): Promise<void> => {
    let errorCode: number = 400;

    try {
        const userId: string | undefined = req.params.id;
        const auth = req.headers.authorization as string;

        if(!userId) {
            errorCode = 422;
            throw new Error("É necessário enviar o 'userId' como params. Por favor, cheque a chamada do endpoint");
        };

        const verifyAdminAuth = Authenticator.getTokenData(auth);

        if(verifyAdminAuth.role !== "admin") {
            errorCode = 401;
            throw new Error("Este usuário não tem autorização para remover usuários! Entre com um usuário 'role: admin'");
        };

        if(userId === verifyAdminAuth.id) {
            errorCode = 401;
            throw new Error("O usuário não pode se auto remover do sistema! Entre com outro admin para concluir remoção");
        };

        await UserDatabase.deleteUserById(userId);

        res.status(200).send("User deleted successfully!");
    } catch(error) {
        res.status(errorCode).send({ message: error.message? error.message : error.sqlMessage });
    };
};

export default deleteUserById;