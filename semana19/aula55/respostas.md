### Exercício 1
a) A utilização de strings para representação de `id`s possibilita uma maior combinação de caracteres(tais
como letras, números, caracteres especiais), e assim gerando uma maior gestão de `id`s mais seguras. Além disso, a mistura destes caracteres torna a representação de mais difícil entendimento observável, o que reforça a ideia de segurança (diferentemente de números, aos quais todos temos conhecimento claro e 
preciso).

b) A função criada foi:
```
import { v4 } from 'uuid';

export const idGenerator = (): string => {
    const generateId = v4(); 

    return generateId;
}
```

---
### Exercício 2
a) O código fornecido descreve o processo de criação de um novo usuário em uma dada tabela "User" hospedada
em um banco de dados SQL. Para a criação de novos usuários, é solicitado que sejam fornecidos um "id", um
"email" e um "password" para inserção dos dados no banco.

b) A query utilizada foi:
```
CREATE TABLE IF NOT EXISTS User_Aula55(
	id VARCHAR(255) PRIMARY KEY NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
```

c) Função foi criada com sucesso.

---
### Exercício 3
a)O complemento `as string` informa ao Typescript que a variável associada é de fato uma variável do tipo
`string`. Utilizamos este complemento após o comando `process.env.JWT_KEY`, pois em condições normais, este
poderia ser declarado como `undefined`. Para contornar este problema, é associado à variável a tipagem específica.

b) Função foi criada com sucesso.

---
### Exercício 4
a,b,c) O endpoint `signup` criado foi:
```
import { Request, Response } from "express";
import { UserDatabase } from "../database/UserDatabase";
import { User } from "../entities/User";
import { Authenticator } from "../services/Authenticator";
import idGenerator from "../services/IdGenerator";

const signup = async(
    req: Request,
    res: Response
): Promise<void> => {
    let errorCode: number = 400;

    try {
        const { email, password } = req.body;

        if(!email || email.indexOf("@") === -1) {
            errorCode = 422;
            throw new Error("Email inválido! Por favor, tente novamente");
        };

        if (!password || password.lenght < 6) {
            errorCode = 422;
            throw new Error("Senha deve ter ao menos 6 caracteres! Por favor, tente novamente");
        };

        const alreadyExistedUser = await UserDatabase.getUserByEmail(email);
        console.log(alreadyExistedUser)

        if (alreadyExistedUser[0]) {
            errorCode = 422;
            throw new Error("Usuário já existente! Por favor, tente um novo e-mail");
        };

        const generatedId: string = idGenerator();
        
        const newUser: User = new User(generatedId,email, password);

        await UserDatabase.createUser(newUser);

        const authorization = Authenticator.generateToken({id: newUser.getId()});

        res.status(201).send({ message: authorization});
    } catch(error) {
        res.status(errorCode).send({message: error.message ? error.message : error.sqlMessage });
    };
};

export default signup;
```

---
### Exercício 5
a) Foi criado dentro de `UserDatabase.ts` o seguinte método:
```
public static getUserByEmail = async(email: string): Promise<User[]> => {
        const result = await BaseDatabase.connection("User_Aula55")
            .select()
            .where({email: email});

        return result;
    }
```
onde, a partir do e-mail inserido no body da requisição, podemos checar se o usuário
já existe. Caso já exista, `result` retorna uma array não vazia.

---
### Exercício 6