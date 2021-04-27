// Exercícios de Interpretação de Código

// Questão 1)
/*  R: O código está executando um loop finito, onde ao fazermos a variável
        índice 'i' variar, somamos seu valor a variável global 'valor'. Assim,
        temos que:
        'valor(i) = valor(i-1)+i', onde:
        'resultado no console = valor(i final)'

    Assim, para o dado caso, o resultado final será:
    i inicial = 0; i final = 4 (i < 5); incremento tipo i = i + 1;
    valor(0) = 0 ; valor(1)=valor(0) + 1 = 1;
    valor(2) = valor(1) + 2 = 1 + 2 = 3;
    valor(3) = valor(2) + 3 = 3 + 3 = 6;
    valor(4) = valor(3) + 4 = 6 + 4 = 10;
    
    Valor exibido no console será 10.
*/

// Questão 2)
/* letra a) Será impresso no console os valores dentro do array, cujo valor
    numérico seja maior que 18. Ou seja, linha a linha, será exibido os
    seguintes valores:
    19 (linha 1); 21 (linha 2); 23 (linha 3); 25 (linha 4); 27 (linha 5);
    30 (linha 6).
*/
/* letra b) Sim, é possível resolver utilizando a função .keys().
    Modificando o código, teríamos:
    const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
    for (let numero of lista.keys()) {
        console.log(numero)
    }   
*/

// Exercícios de Escrita de Código
// Questão 3)
// letra a)
/*const listaInicial = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

for (let i = 0; i < listaInicial.length; i++) {
    console.log(listaInicial[i])  
}*/
// letra b)
/*const listaInicial = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

for (let i = 0; i < listaInicial.length; i++) {
    listaInicial[i] = listaInicial[i] / 10
    console.log(listaInicial[i])  
}*/

// letra c)
/*const listaInicial = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let novaLista = []

for (let numero of listaInicial) {
    if ( numero % 2 === 0 ) {
        novaLista.push(numero)   
    }  
}

console.log(novaLista)*/

// letra d)
/*const listaInicial = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

for (let i = 0; i < listaInicial.length; i++) {
  console.log("O elemento do índex", i, "é:", listaInicial[i])  
}*/

// letra e)
/*const listaInicial = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let indice = 0
let valorMaximo = 0
let valorMinimo = Infinity

while ( indice < listaInicial.length ) {
  if ( valorMaximo < listaInicial[indice] ) {
    valorMaximo = listaInicial[indice]  
  }
  
  if ( valorMinimo > listaInicial[indice] ) {
    valorMinimo = listaInicial[indice]  
  }
  
  indice++
}*/