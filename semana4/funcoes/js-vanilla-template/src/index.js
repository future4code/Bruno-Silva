// Exercícios de Interpretação de Código

// Questão 1)
// letra a) 
/*  R: Será exibido os valores calculados no interior da
    função, a partir da seguinte operação aritmética:
    valor exibido = variavel * 5, onde variavel é o parâmetro
    da função, sendo definido na invocação da função pelos 
    argumentos 2 e 10. Assim, temos que os valores exibidos,
    respectivamente, serão:
    valor exibido1 = 2 * 5 = 10
    valor exibido2 = 10 * 5 = 50 */

// letra b)
/*  R: Ao retirar o comando console.log, a variável identificadora
    receberá o retorno da função (calculados acima), porém não 
    exibirá nada no console. */

// Questão 2)
// letra a)
/*  R: As saídas serão Darvas e Caio (conteúdo dentro dos índices
    0 e 1  da arrayDeNomes)*/

// letra b)
/*  R: Com a mudança, as saídas serão Amanda e Caio (mantém a visua-
    lização do conteúdo em 0 e 1)*/

// Questão 3)
/*  R: A função tem como intuito gerar uma array (arrayFinal) das potências
    quadráticas dos números pares existentes numa array inicial (array).

    Sugestão de nome: potenciaQuadraticaDosNumerosPares */

// Exercícios de Escrita de Código
// Questão 4)
// letra a)

/*function informacoesSobreMim() {
    console.log("Eu sou Bruno, tenho 28 anos, moro no Rio de Janeiro e sou estudante.")
}

informacoesSobreMim()*/

// letra b)

/*function informacoesSobreMim(meuNome, minhaIdade, meuEndereco, estudoOuNao) {
    let respostaEstudoOuNao

    switch (estudoOuNao) {
        case true:
            respostaEstudoOuNao = "sou";
            break;
        case false:
            respostaEstudoOuNao = "não sou";
            break;
    }

    console.log(`Eu sou ${meuNome}, tenho ${minhaIdade}, moro em ${meuEndereco} e ${respostaEstudoOuNao} estudante.`)
}

informacoesSobreMim("Bruno", 28, "Rio de Janeiro", false)*/

// Questão 5)
// letra a)

/*const numerosDeEntrada = function( numero1, numero2 ) {
    let somaDosNumeros = numero1 + numero2;
    return somaDosNumeros;
}

const resultadoDaSoma = numerosDeEntrada(4,6)
console.log(resultadoDaSoma)*/

// letra b)

/*const numerosDeEntrada = (numero1, numero2) => {
    if ( numero1 >= numero2){
        return true;
    } else {
        return false;
    }
}

const verificarMaiorOuIgual = numerosDeEntrada(2,2)
console.log(verificarMaiorOuIgual)*/

// letra c)

/*function mensagemEscrita(texto) {
    let indice = 0;

    while (indice < 10 ) {
        console.log(texto);

        indice += 1;
    }
}

mensagemEscrita("abacate")*/

// Questão 6)
// letra a)

/*const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

const arrayDeNumeros = function(array) {
    return array.length
}

const tamanhoDaArray = arrayDeNumeros(array)
console.log(tamanhoDaArray)*/

// letra b)

/*const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

const numeroParOuImpar = (n) => {
  let respostaParOuImpar = false;  
      if ( n % 2 === 0 ) {
        respostaParOuImpar = true;
      }

  return respostaParOuImpar
}

console.log(numeroParOuImpar(1))*/

// letra c)

/*const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

function numerosPares(array) {
    let somaDosNumerosPares = 0;

    for( let i = 0; i < array.length; i++){
        if ( array[i] % 2 === 0 ) {
            somaDosNumerosPares += 1;
        }
    }

    return somaDosNumerosPares;
}

const quantidadeDeNumerosPares = numerosPares(array)
console.log(quantidadeDeNumerosPares)*/

// letra d)

/*const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

const numeroParOuImpar = (n) => {
    let respostaParOuImpar = false;  
    if ( n % 2 === 0 ) {
        respostaParOuImpar = true;
    }
  
    return respostaParOuImpar
}
  
function numerosPares(array) {
    let somaDosNumerosPares = 0;
  
    for( let i = 0; i < array.length; i++){
        if ( numeroParOuImpar(array[i]) ) {
              somaDosNumerosPares += 1;
        }
    }
  
    return somaDosNumerosPares;
}
  
console.log(numerosPares(array))*/

// DESAFIOS

// Questão 1)
// 1.)

/*const inserirParametro = (parametro) => {
    console.log(parametro)
}

inserirParametro(1)*/

// 2.)

/*let somaDosParametros = 0

const inserirDoisParametros = (a,b) => {
    somaDosParametros += a + b
}

inserirDoisParametros(30,23)

const inserirParametro = (parametro) => {
    console.log(parametro)
}

inserirParametro(somaDosParametros)*/

// Questão 2)
// letra a)

/*const arrayDeNumeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]
let arrayNovo = []

function numerosParesDobrados(arrayDeNumeros) {
    for(let numeroNoArray of arrayDeNumeros) {
        if ( numeroNoArray % 2 === 0 ) {
            numeroNoArray = numeroNoArray * 2;
            arrayNovo.push(numeroNoArray);
        }
    }
    return arrayNovo        
}

console.log(numerosParesDobrados(arrayDeNumeros))*/

// letra b)

/*const arrayDeNumeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]
let testeMaiorNumero = 0;

const maiorNumero = function(arrayDeNumeros) {
    for( let i = 0; i < arrayDeNumeros.length; i++) {
        if ( testeMaiorNumero < arrayDeNumeros[i] ) {
            testeMaiorNumero = arrayDeNumeros[i]
        }
    }
    return testeMaiorNumero
}

console.log(`O maior número é ${maiorNumero(arrayDeNumeros)}`)*/

// letra c)

/*const arrayDeNumeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]
let testeMaiorNumero = 0;
let testeIndiceMaiorNumero = 0;

const maiorNumero = function(arrayDeNumeros) {
    for( let i = 0; i < arrayDeNumeros.length; i++) {
        if ( testeMaiorNumero < arrayDeNumeros[i] ) {
            testeMaiorNumero = arrayDeNumeros[i];
            testeIndiceMaiorNumero = i;
        }
    }
    return testeIndiceMaiorNumero
}

console.log(`O índice do maior número é ${maiorNumero(arrayDeNumeros)}`)*/

// letra d)

/*const arrayDeNumeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]
let arrayInvertido = []

const inverterArray = (arrayDeNumeros) => {
    let indice = arrayDeNumeros.length - 1;

    while ( indice >= 0 ) {
        arrayInvertido.push(arrayDeNumeros[indice]);
        indice -= 1;
    }
    
    return arrayInvertido
}

console.log(inverterArray(arrayDeNumeros))*/
