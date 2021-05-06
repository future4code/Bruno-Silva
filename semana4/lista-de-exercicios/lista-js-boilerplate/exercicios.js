//Exercício 1

function inverteArray(array) {
   const arrayInvertido =[];
   let i = array.length - 1;

   while ( i >=0 ){
      arrayInvertido.push(array[i]);
      i--;
   }

   return arrayInvertido;
}

//Exercício 2

function retornaNumerosParesElevadosADois (array) {
   const arrayNumerosParesAoQuadrado = [];

   for ( let numeros of array) {
      if ( numeros % 2 === 0 ) {
         arrayNumerosParesAoQuadrado.push(numeros * numeros);
      }
   }

   return arrayNumerosParesAoQuadrado;
}

//Exercício 3

function retornaNumerosPares (array) {
   const arrayNumerosPares = [];

   for ( let numeros of array ) {
      if ( numeros % 2 === 0 ){
         arrayNumerosPares.push(numeros);
      }
   }

   return arrayNumerosPares;
}

//Exercício 4

function retornaMaiorNumero(array) {
   let maiorNumero = 0;

   for ( let numeros of array){
      if ( numeros > maiorNumero ) {
         maiorNumero = numeros;
      }
   }

   return maiorNumero;
}

//Exercício 5

function retornaQuantidadeElementos (array) {
   return array.length;
}

//Exercício 6

function retornaExpressoesBooleanas() {
   const booleano1 = true;
   const booleano2 = false;
   const booleano3 = !booleano2;
   const booleano4 = !booleano3;

   
   
   const respA = ( booleano1 && booleano2 && !booleano4 );
   const respB = ( (booleano1 && booleano2) || !booleano3 );
   const respC = ( (booleano2 || booleano3) && (booleano4 || booleano1) );
   const respD = ( !(booleano2 && booleano3) || !(booleano1 && booleano3) );
   const respE = ( !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3) );

   const respostas = [respA, respB, respC, respD, respE];
   return respostas;
}

//Exercício 7

function retornaNNumerosPares(n) {
   const arrayNumerosParesAteN = [];
   let numeroPar;
   
   for ( let i = 0; i < n; i ++) {
      numeroPar = i * 2;
      arrayNumerosParesAteN.push(numeroPar);
   }

   return arrayNumerosParesAteN;
}

// Exercício 8

function checaTriangulo(a, b, c) {
  if ( ( a === b) && ( a === c ) ) {
      return "Equilátero";
  } else if ( ( a !== b ) && ( a !== c ) ) {
      return "Escaleno";
  } else {
      return "Isósceles";
  }
}

// Exercício 9

function comparaDoisNumeros(num1, num2) {
   let objetoDeInformacoes = {
      maiorNumero: 0,
      maiorDivisivelporMenor: true,
      diferenca: 0
   }

   if ( num1 > num2) {
      objetoDeInformacoes.maiorNumero = num1;
      if ( num1 % num2 === 0 ) {
         objetoDeInformacoes.maiorDivisivelporMenor = true;
      } else {
         objetoDeInformacoes.maiorDivisivelporMenor = false;
      }
      objetoDeInformacoes.diferenca = num1 - num2;
   } else {
      objetoDeInformacoes.maiorNumero = num2;
      if ( num2 % num1 === 0 ) {
         objetoDeInformacoes.maiorDivisivelporMenor = true;
      } else {
         objetoDeInformacoes.maiorDivisivelporMenor = false;
      }
      objetoDeInformacoes.diferenca = num2 - num1;
   }
   return objetoDeInformacoes;
}

// Exercício 10

function segundoMaiorEMenor(array) {
   const arrayAlterar = array;
   const arrayFinal = [];
   let comparaMax = Number.NEGATIVE_INFINITY;
   let comparaMin = Infinity;

   for( let numeros of arrayAlterar) {
      if ( numeros > comparaMax ) {
         comparaMax = numeros;
      }

      if ( comparaMin > numeros ) {
         comparaMin = numeros;
      }
   }

   for( let i=0; i < arrayAlterar.length; i++) {
      if ( (arrayAlterar[i] === comparaMax) || (arrayAlterar[i] === comparaMin)){
         arrayAlterar.splice(i,1);
      }
   }
   
   let comparaSegundoMax = Number.NEGATIVE_INFINITY;
   let comparaSegundoMin = Infinity;

   for( let nums of arrayAlterar) {
      if ( nums >  comparaSegundoMax) {
         comparaSegundoMax = nums;
      }

      if ( comparaSegundoMin > nums ) {
         comparaSegundoMin = nums;
      }
   }

   arrayFinal.push(comparaSegundoMax, comparaSegundoMin);

   return arrayFinal;
}

//Exercício 11

function ordenaArray(array) {
   let contadorDePassagens = 0;
   while (contadorDePassagens < array.length - 1 ){
      for ( let i = 0; i < array.length - 1; i++) {
         if ( array[i] > array[i+1] ) {
            let copiaValor = array[i+1];
            array[i+1] = array[i];
            array[i] = copiaValor;
         }
      }
      contadorDePassagens++;
   }

   return array;
}

// Exercício 12

function filmeFavorito() {
   const filmeFavorito = {
      nome: "O Diabo Veste Prada",
      ano: 2006,
      diretor: "David Frankel",
      atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
   }

   return filmeFavorito
}

// Exercício 13

function imprimeChamada() {
   const filmeFavorito = {
      nome: "O Diabo Veste Prada",
      ano: 2006,
      diretor: "David Frankel",
      atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
   }

   return `Venha assistir ao filme ${filmeFavorito.nome}, de ${filmeFavorito.ano}, dirigido por ${filmeFavorito.diretor} e estrelado por ${filmeFavorito.atores[0]}, ${filmeFavorito.atores[1]}, ${filmeFavorito.atores[2]}, ${filmeFavorito.atores[3]}.`
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
   let perimetroRetangulo = 2 * ( lado1 + lado2 );
   let areaRetangulo = lado1 * lado2;
   const infoDoRetangulo = {
      largura: lado1,
      altura: lado2,
      perimetro: perimetroRetangulo,
      area: areaRetangulo
   }

   return infoDoRetangulo;
}

// Exercício 15

function anonimizaPessoa(pessoa) {
   pessoa.nome = "ANÔNIMO";
   return pessoa;
}

// Exercício 16

const arrayDePessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 } 
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   const maioresDe20 = arrayDePessoas.filter( (dados) => {
      if ( dados.idade >= 20 ) {
         return true;
      }
      return false;
   })
   return maioresDe20;
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   const menoresDe20 = arrayDePessoas.filter( (dados) => {
      if ( dados.idade < 20 ) {
         return true;
      }
      return false;
   })
   return menoresDe20;
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   const arrayDuplicada = []
   for(let i = 0; i < array.length; i++){
      arrayDuplicada.push(array[i]*2);
   }

   return arrayDuplicada
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
   const arrayDuplicadaTexto = []
   for(let i = 0; i < array.length; i++){
      arrayDuplicadaTexto.push(String(array[i]*2));
   }

   return arrayDuplicadaTexto
}

// Exercício 17, letra C

function verificaParidade(array) {
   const arrayParOuImparTexto = []
   for(let i = 0; i < array.length; i++){
      if ( array[i] % 2 === 0 ) {
         arrayParOuImparTexto.push(`${array[i]} é par`)
      } else {
         arrayParOuImparTexto.push(`${array[i]} é ímpar`)
      }
   }

   return arrayParOuImparTexto
}

// Exercício 18

const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8},
  { nome: "João", idade: 20, altura: 1.3},
  { nome: "Pedro", idade: 15, altura: 1.9},
  { nome: "Luciano", idade: 22, altura: 1.8},
  { nome: "Artur", idade: 10, altura: 1.2},
  { nome: "Soter", idade: 70, altura: 1.9}
]

//Exercício 18, letra A

function retornaPessoasAutorizadas() {
   const pessoasAutorizadas = pessoas.filter( (dados) => {
      if (( dados.altura >= 1.5 ) && ( dados.idade > 14 ) && (dados.idade < 60 )){
         return true;
      }
      return false
   })

   return pessoasAutorizadas;
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
   const pessoasNaoAutorizadas = pessoas.filter( (dados) => {
      if (( dados.altura < 1.5 ) || ( dados.idade < 14 ) || (dados.idade > 60 )){
         return true;
      }
      return false
   })

   return pessoasNaoAutorizadas;
}

//Exercício 19

const consultasNome = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia",  dataDaConsulta: "04/05/2021" }
]
 
 //Exercício 19, letra A
 
function ordenaPorNome() {
   let contadorDePassagens = 0;
   while (contadorDePassagens < consultasNome.length - 1 ){
      for ( let i = 0; i < consultasNome.length - 1; i++) {
         if ( consultasNome[i] > consultasNome[i+1] ) {
            let copiaValor = consultasNome[i+1];
            consultasNome[i+1] = consultasNome[i];
            consultasNome[i] = copiaValor;
         }
      }
      contadorDePassagens++;
   }

   return consultasNome;
}
 
 // Exercício 19, letra B
 
 const consultasData = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia",  dataDaConsulta: "04/05/2021" }
 ]
 
 function ordenaPorData() {
 
 }

//Exercício 20

const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
  for (let i = 0; i < contas.length; i++) {
     for (let k = 0; k < contas[k].compras.length; k++) {
        contas.saldoTotal = contas.saldoTotal - contas[k].compras
     }
  }

  console.log(contas)
}