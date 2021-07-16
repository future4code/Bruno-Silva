/* Letra a) Quais são as entradas e saídas dessa função? 
Copie a função para um arquivo .ts e faça a tipagem desses parâmetros

Resposta: Entrada: array de números / Saída: Array de dados estatísticos (maior número, menor número e média de valores)

type Estatisticas = {
    maior: number,
    menor: number,
    media: number
}

function obterEstatisticas(numeros: number[]): Estatisticas {
    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
} 

*/

/* Letra b) Que outras variáveis compõem essa função? Explicite a tipagem de todas elas 

 Resposta:  numerosOrdenados -> tipo array of numbers
            soma -> tipo number
            estatisticas -> tipo array of numbers

type Estatisticas = {
    maior: number,
    menor: number,
    media: number
}

function obterEstatisticas(numeros: number[]): Estatisticas {
    const numerosOrdenados: number[] = numeros.sort(
        (a, b) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: Estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
} 

*/

/* Letra c) Crie um type para representar uma amostra de dados, isto é, um objeto com as chaves numeros e obterEstatisticas. 
Abaixo, temos um exemplo de objeto desse tipo, declarado em JavaScript:

 Resposta:

type Estatisticas = {
    maior: number,
    menor: number,
    media: number
}

function obterEstatisticas(numeros: number[]): Estatisticas {
    const numerosOrdenados: number[] = numeros.sort(
        (a, b) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: Estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
} 

type Amostras = {
    numeros: number[],
    obterEstatisticas:(numeros: number) => Estatisticas
}

const amostraDeIdades = {

    numeros: [21, 18, 65, 44, 15, 18],

    obterEstatisticas: obterEstatisticas([1,2,4,5])
}

console.log(amostraDeIdades)
*/