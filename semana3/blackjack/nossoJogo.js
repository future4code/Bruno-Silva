/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Bem vindo ao jogo de Blackjack!")

if(confirm("Quer iniciar uma nova rodada?")) {
   let cartaSorteadaUsuario = []
   let somaCartasUsuario = 0
   
   for ( let i = 0; i < 2; i++) {
      const carta = comprarCarta()
      cartaSorteadaUsuario.push(carta.texto)
      somaCartasUsuario += carta.valor
   }

   let cartaSorteadaComputador = []
   let somaCartasComputador = 0
   
   for ( let i = 0; i < 2; i++) {
      const carta = comprarCarta()
      cartaSorteadaComputador.push(carta.texto)
      somaCartasComputador += carta.valor
   }

   console.log("Usuário - cartas:", String(cartaSorteadaUsuario), " - pontuação ", somaCartasUsuario)
   console.log("Computador - cartas:", String(cartaSorteadaComputador), " - pontuação ", somaCartasComputador)

   if ( somaCartasUsuario > somaCartasComputador ) {
      console.log("O usuário ganhou!")
   } else if ( somaCartasUsuario < somaCartasComputador) {
      console.log("O computador ganhou!")
   } else {
      console.log("Empate!")
   }

}  else {
   console.log("O jogo acabou")
}