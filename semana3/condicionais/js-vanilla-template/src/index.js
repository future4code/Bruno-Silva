// Exercícios de Interpretação de código

// Questão 1)
/* a) Explique o que o código faz.
       R: O código executa um teste de verificação numérica,
        onde ao determinar se um número é par ou ímpar,
        faz a validação do mesmo.
    b) Qual o teste que ele realiza?
       R: O código utiliza um teste condicional, atrelado a
        comparação booleana de resto da divisão de um número
        por 2. Se a comparação resultar em 0, o número é dado
        como par. Se não, o número será ímpar.
    c) Para que tipos de números ele imprime no console "Passou no teste"?
       R: O código estabelece que para imprimir "Passou no teste"
        o número analisado deve ser par.
    d) Para que tipos de números a mensagem é "Não passou no teste"?
       R: O código estabelece que para imprimir "Não passou no teste"
        o número analisado dever ser ímpar.
*/

// Questão 2)
/*  a)  O código estabelece uma estrutura condicional que relaciona
        o valor atribuido a variável declarada "fruta" (sendo o nome da fruta)
        a um valor estabelecido no código para a variável "preco" (que
        determina o valor monetário da fruta). Ao acessar as estruturas,
        retorna ao usuário o preço da fruta que se tem interesse saber.
    b)  "O preço da fruta Maçã é R$ 2.25"
    c)  Ao retirar o comando "break", o código rodará até encontrar
        o próximo break (do contrário, dará erro). No caso, a mensagem
        obtida será "O preço da fruta Pêra é R$ 5", o que difere do
        valor atribuido a fruta (no caso, seria R$ 5.5)
*/

// Questão 3)
/*  a)  A 1º linha está pedindo para que o usuário insira um número
        na caixa de prompt que aparece na tela. Ao inserir, é executado
        uma transformação do tipo da variável, de string para number, a
        partir da Cast "Number". Assim, a variável 'numero', para o código,
        guardará a informação inserida como um tipo Number.
    b)  Se o usuário digitar o número 10, a mensagem no terminal
        será "Esse número passou no teste", visto que atende a
        condição de entrada estabelecida (10 > 0). Caso o usuário
        digite o número -10, nada será exibido no terminal, pois
        a condição de entrada estabelecida não foi atingida 
        (-10 não é maior que 0) e nada foi definido para quando
        a situação não for atingida.
    c)  Ocorrerá um erro na linha 'let mensagem = "Essa mensagem é secreta!!!" ',
        pois a variável definida 'mensagem' encontra-se dentro do escopo do elemento
        filho, e o comando imprimir a variável foi definido no escopo global. Escopos
        internos não possibilitam a conexão de variáveis internas ao ambiente externo.
*/

// Exercícios de Escrita de Código

// Questão 5)
    /*let turnoDoAluno;
    turnoDoAluno = prompt("Qual é o seu turno de aulas? M(matutino), V(vespertino) ou N(noturno)");

    if ( turnoDoAluno.toLocaleUpperCase() === "M" ) {
        console.log("Bom Dia!");
    } else if ( turnoDoAluno.toLocaleUpperCase() === "V") {
        console.log("Boa tarde!");
    } else if ( turnoDoAluno.toLocaleUpperCase() === "N") {
        console.log("Boa noite!");
    } else {
        console.log("Resposta inserida incorreta! Favor, responder com M , V ou N");
    }*/

// Questão 6)
    /*let turnoDoAluno;
    turnoDoAluno = prompt("Qual é o seu turno de aulas? M(matutino), V(vespertino) ou N(noturno)");

    switch ( turnoDoAluno.toLocaleUpperCase() ) {
        case "M": 
            console.log("Bom Dia!");
            break;
        case "V":
            console.log("Boa tarde!");
            break;
        case "N":
            console.log("Boa noite!");
            break;
        default:
            console.log("Resposta inserida incorreta! Favor, responder com M , V ou N");
            break;
    }*/

// Questão 7)
    /*let generoFilme = prompt("Qual é o gênero do filme?");
    let precoIngresso = Number(prompt("Qual é o preço do ingresso? (R$)"));

    let condicao1 = ( generoFilme.toLocaleLowerCase() === "fantasia");
    let condicao2 = ( precoIngresso < 15 );

    if ( condicao1 && condicao2 ) {
        console.log("Bom filme!");
    } else {
        console.log("Escolha outro filme :(");
    }*/