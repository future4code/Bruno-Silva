/*type pokemon = {
	name: string,
        types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}*/

/* Letra a) Como você faria, já com a extensão instalada, 
para gerar um arquivo javascript a partir do  arquivo typescript com o código abaixo?

 Resposta: Usaria a seguinte sequência de comandos:
    npm install typescrite -g // instalação do typescrite globalmente
    npx tsc --init //criação de arquivo tsconfig.json
    tsconfig.json -> habilitar propriedades 'outDir': "./" e 'rootDir': "./"
    'tsc' // transpilação do arquivo TS em JS */

/* Letra b) E se este arquivo estivesse dentro de uma pasta chamada src.
 O processo seria diferente? Se sim, descreva as diferenças. 

 Resposta: Caso o arquivo TS estivesse dentro da pasta src, precisariamos alterar a propriedade 'rootDir' para o
 caminho de onde o arquivo está (no caso, "./src").*/

/* letra c) Existe alguma maneira de transpilar múltilplos arquivos de uma vez só? 
Caso conheça, explique como fazer. 

 Resposta: Sim. Ao executar o comando tsc (de transpilação), incrementar(ou não) ao comando os nomes dos arquivos a serem
transpilados. Exemplo:
    Arquivos: ./src/arquivo1 e ./src/arquivo2

    Comando: tsc arquivo1 arquivo2 //transpilará ambos os arquivos em um único comando, ao mesmo tempo.
*/

/* Letra d) Atividades de aula foram muito próximas a instrução deste exercício */