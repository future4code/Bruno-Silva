### Exercício 1
a) `rounds` é o valor numérico dado na encriptação bcryptJs que corresponde ao número de tentativas de construção da sua parte aleatória. 
Já o `salt` corresponde ao resultado aleatório de tentativas definidas, sob a forma de uma string de 22 caracteres.
O valor recomendado para a maioria das aplicações padrão é de 12.
Utilizei o valor 12, pois será o maior custo-performance para a atividade.

b) A função foi implementada na forma de método da classe HashManager, conforme abaixo:
```
export class HashManager {
    public static generateHash = async (
        plainText: string
    ): Promise<any> => {
        const rounds = Number(process.env.BCRYPT_COST);
        const salt = await bcrypt.genSalt(rounds);
        const cypherText = await bcrypt.hash(plainText, salt);

        return cypherText;
    };
};
```

c) Assim como em b), foi implementado o método da classe HashManager, conforme abaixo:
```
public static compareHash = async(
    plainText: string,
    hash: string
): Promise<boolean> => {
    return await bcrypt.compare(plainText, hash);
};
```

---
### Exercício 2
a) O cadastro deve ser alterado primeiro, pois somente assim, ao tentar logar, efetivamente poderemos perceber as mudanças geradas pela criptografia.

b, c) Foram alteradas os endpoints `signUp` e `login`.

d) O endpoint `getUserProfile` não necessita de alteração, pois este é um endpoint de consumo da API e, portanto, só depende do token previamente gerado ou no cadastro ou no login do usuário.

---
### Exercício 3
a) A query utilizada foi:
```
ALTER TABLE User_Aula55
ADD role ENUM("normal", "admin") DEFAULT "normal";
```

b)