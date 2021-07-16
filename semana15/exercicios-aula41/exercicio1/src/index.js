/*
letra a) Responda como comentário no seu código: 
como fazemos para acessar os parâmetros passados 
na linha de comando para o Node?
    Resposta: Acessamos digitando "node [parâmetros]"
*/

//letra b)

// const name = process.argv[2];
// const age = Number(process.argv[3]);

// console.log(`Olá, ${name}! Você tem ${age} anos.`);

// letra c)

const myName = process.argv[2];
const age = Number(process.argv[3]);
const agePlusSeven = age + 7;

if (myName && age) {
    console.log(`Olá, ${myName}! Você tem ${age} anos. Em sete anos você terá ${agePlusSeven}`)
} else {
    console.log("São necessário dois parâmetros válidos. Favor, tente novamente!")
}
