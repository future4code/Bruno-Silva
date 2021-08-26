### Exercício 1

a) A interface criada foi:
```
export interface Character {
    name: string,
    life: number,
    strength: number,
    defense: number
}
```

b) A função validateCharacter será:
```
export const validateCharacter = (character: Character):boolean =>{
    const { name, life, strength, defense} = character;

    if ( !name || life === undefined || strength === undefined || defense === undefined ){
        return false;
    };

    if (life <= 0 || strength <= 0 || defense <= 0){
        return false;
    };

    return true;
};
```

### Exercício 2
a,b,c,d,e,f) Questões desenvolvidas no arquivo `validateCharacter.test.ts`.

### Exercício 3
a,b) Questões desenvolvidas no arquivo `index.ts`.

c) A forma de abordagem utilizada na letra b) desestrutura a dependência da função `performAttack` pela função
`validateCharacter` através da técnica de injeção de função passada por parâmetro. Isto permite que analisemos independentemente ambas as funções em testes unitários, sem refletir uma na outra.

### Exercício 4
a) Devemos criar um mock para a função `validateCharacter`, pois a mesma interfere diretamente no código da função `performAttack`. Portanto, para fazermos testes unitários de `performAttack`, precisamos tornar a chamada de `validateCharacter` uma propriedade mockada.

b) Mock de sucesso:
```
export const validatorMockSuccess = jest.fn(()=>{
    return true;
});
```

c) Mock de falha:
```
export const validatorMockFailure = jest.fn(()=>{
    return false;
});
```

### Exercicio 5
a,b) Questões desenvolvidas em `performAttack.test.ts`.