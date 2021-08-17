import { UserDatabase } from "../../data/UserDatabase"
import { User } from "../../model/user";
import { HashManager } from "../../services/hashManager";
import { IdGenerator } from "../../services/idGenerator";
import { TokenManager } from "../../services/TokenManager";

export class UserBusiness {

    async signup({ name, nickname, email, password, role }: any) {
        if (
            !name ||
            !nickname ||
            !email ||
            !password ||
            !role
        ) {
            throw new Error('Preencha os campos "name","nickname", "email" e "password"')
        }

        const newHash = new HashManager()
        const cypherPassword = await newHash.hash(password);

        const newId = new IdGenerator();

        const userInfo = {
            id: newId.generateId(),
            name,
            nickname,
            email,
            password: cypherPassword,
            role
        }

        const newUser = User.toUserModel(userInfo);
        await new UserDatabase().create(newUser)

        const newToken = new TokenManager()
        const token: string = newToken.generate({
            id: newUser.getId(),
            role: role
        })

        return token
    }

    async login({ email, password }: any) {
        if (!email || !password) {
            throw new Error("'email' e 'senha' são obrigatórios")
        }

        const user: User = await new UserDatabase().selectByEmail(email)

        if (!user) {
            throw new Error("Usuário não encontrado ou senha incorreta")
        }

        const passwordIsCorrect: boolean = await new HashManager().compare(password, user.getPassword())

        if (!passwordIsCorrect) {
            throw new Error("Usuário não encontrado ou senha incorreta")
        }

        const token: string = new TokenManager().generate({
            id: user.getId(),
            role: user.getRole()
        })

        return token
    }
}
