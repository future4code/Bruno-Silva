/* Letra a) Crie uma variável minhaString do tipo string e atribua um valor a ela.
Tente atribuir um número a esta variável. O que acontece?

    let minhaString: string = "Bruno";
    minhaString = 2; // (Error type variable)
 
 Resposta: Ao definir o tipo string para a variável, o Typescript não permite que a modifiquemos para
 outros tipos que não outras strings */

/* Letra b) Crie uma variável meuNumero do tipo number e atribua um valor numérico.
Como podemos fazer para que essa variável também aceite strings?


    let meuNumero: string | number = 10;
    meuNumero = "10";

 Resposta: Ao definir o tipo de variável, utilizar a estrutura "tipo1 | tipo2", assim definindo mais de um tipo */

/* Letra c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:
`nome`, que é uma string;
`idade`, que é um número;
`corFavorita`, que é uma string.

 Resposta: const pessoa: { nome: string, idade: number, corFavorita: string } = {
    nome: "Bruno",
    idade: 28,
    corFavorita: "azul"
 }

 Crie mais três objetos, que também precisam ter apenas os campos definidos acima.
 Crie um tipo Pessoa para garantir que todos os objetos tenham os mesmos campos.

 Resposta:
    type pessoa = {
        nome: string,
        idade: number,
        corFavorita: string
    };

    const primeiraPessoa: pessoa = {
        nome: "Lais",
        idade: 25,
        corFavorita: "amarelo"
    };

    const segundaPessoa: pessoa = {
        nome: "Mateus",
        idade: 27,
        corFavorita: "verde"
    };

    const terceiraPessoa: pessoa = {
        nome: "Índio",
        idade: 28,
        corFavorita: "azul"
    };

    console.log({primeiraPessoa, segundaPessoa, terceiraPessoa});

*/

/* Letra d)Modifique o tipo de objeto para que possamos apenas escolher entre as cores do arco-íris. 
Utilize um enum para isso. 

Resposta:

enum CORES_POSSIVEIS {
    VERMELHO = "vermelho",
    LARANJA = "laranja",
    AMARELO = "amarelo",
    VERDE = "verde",
    AZUL = "azul",
    ANIL = "anil",
    VIOLETA = "violeta"
}

type pessoa = {
    nome: string,
    idade: number,
    corFavorita: CORES_POSSIVEIS
};

const primeiraPessoa: pessoa = {
    nome: "Lais",
    idade: 25,
    corFavorita: CORES_POSSIVEIS.AMARELO
};

const segundaPessoa: pessoa = {
    nome: "Mateus",
    idade: 27,
    corFavorita: CORES_POSSIVEIS.VERDE
};

const terceiraPessoa: pessoa = {
    nome: "Índio",
    idade: 28,
    corFavorita: CORES_POSSIVEIS.AZUL
};

console.log({primeiraPessoa, segundaPessoa, terceiraPessoa});
*/
