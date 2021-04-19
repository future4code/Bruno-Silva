// Exercícios de interpretação de código

/* Questao1)   10
                10 5
*/


/* Questao2)   10 10 10
*/

// Exercícios de escrita do código

//Questao1)
//letra a) 
    let nome;
//letra b)
    let idade;
//letra c)
    console.log(typeof nome, typeof idade);
/* letra d) Inicialmente, pensei em criar a variavel nome como 'const nome',
pois a mesma não mudará no código. Ao fazê-lo, a mensagem de erro a seguir
apareceu: 'Uncaught SyntaxError: Missing initializer in const declaration'.
Isto sugere que a declaração const não é reconhecida pelo  comando 'typeof'
se não for atribuida um valor. Ao substitui por 'let nome', ao utilizar 'typeof'
recebemos a informação de 'undefined' para ambas as variaveis, o que condiz
com o fato de serem variaveis sem atribuição de valor no momento. */

//letra d.2)
    nome = prompt("Digite seu nome: ");
    idade = prompt("Digite sua idade: ");
/* letra e) Nota-se que ao utilizar novamente o comando de declaração das
variáveis no terminal elas passam a serem definidas como strings. Nota-se que
mesmo escrevendo um número em idade, ele reconhece como um texto.*/
    console.log(typeof nome, typeof idade);
//letra f)
    console.log("Olá " + nome + " , você tem " + idade + " anos.");


//Questão2)
    let comidaFavorita;
    let musicaFavorita;
    let lugarFavorito;
    let melhorMomentoDaVida;
    let lugarVisitar;

    comidaFavorita = prompt("Qual é a sua comida favorita?");
    console.log("Qual é a sua comida favorita?");
    console.log("Resposta: " + comidaFavorita);

    musicaFavorita = prompt("Qual é a sua música favorita de todas?");
    console.log("Qual é a sua música favorita de todas?");
    console.log("Resposta: " + musicaFavorita);

    lugarFavorito = prompt("Diga-nos o seu lugar mais maravilhoso de todos");
    console.log("Diga-nos o seu lugar mais maravilhoso de todos");
    console.log("Resposta: " + lugarFavorito);

    melhorMomentoDaVida = prompt("Nos conte um pouco sobre o melhor momento da sua vida");
    console.log("Nos conte um pouco sobre o melhor momento da sua vida");
    console.log("Resposta: " + melhorMomentoDaVida);

    lugarVisitar = prompt("Conte-nos um lugar que deseja visitar");
    console.log("Conte-nos um lugar que deseja visitar");
    console.log("Resposta: " + lugarVisitar);

// Questão3)
// letra a)
    let comidasFavoritas = ["carne assada" , "frango frito" , "comida japonesa" , "saladas" , "churrasco"];
    console.log(comidasFavoritas);
//letra b)
    console.log("Estas são minhas comidas favoritas: ");
    console.log(comidasFavoritas[0]);
    console.log(comidasFavoritas[1]);
    console.log(comidasFavoritas[2]);
    console.log(comidasFavoritas[3]);
    console.log(comidasFavoritas[comidasFavoritas.lenght -1]);
//letra c)
    let comidaFavoritaUsuario;
    comidaFavoritaUsuario = prompt("Qual é a sua comida favorita?");
    comidasFavoritas[1] = comidaFavoritaUsuario;
    console.log("Estas são minhas comidas favoritas: ");
    console.log(comidasFavoritas[0]);
    console.log(comidasFavoritas[1]);
    console.log(comidasFavoritas[2]);
    console.log(comidasFavoritas[3]);
    console.log(comidasFavoritas[comidasFavoritas.lenght -1]);

// Questão4)
// letra a)
    let arrayDePerguntas = ["", "", ""];

    arrayDePerguntas[0] = "Você é alto? (true/false)";
    arrayDePerguntas[1] = "Você tem cabelos verdes? (true/false)";
    arrayDePerguntas[2] = "Você joga ping pong? (true/false)";

    let arrayDeRespostas = ["", "", ""];

    arrayDeRespostas[0] = prompt(arrayDePerguntas[0]);
    arrayDeRespostas[1] = prompt(arrayDePerguntas[1]);
    arrayDeRespostas[2] = prompt(arrayDePerguntas[2]);

// letra b)
    console.log(arrayDePerguntas[0], arrayDeRespostas[0]);
    console.log(arrayDePerguntas[1], arrayDeRespostas[1]);
    console.log(arrayDePerguntas[2], arrayDeRespostas[2]);