const mathOperation = process.argv[2];
const firstValue = Number(process.argv[3]);
const secondValue = Number(process.argv[4]);

if (firstValue && secondValue) {
    switch(mathOperation) {
        case "add":
            console.log(`A soma de ${firstValue} e ${secondValue} é ${firstValue+secondValue}.`);
            break;
        case "sub":
            console.log(`A subtração de ${secondValue} por ${firstValue} é ${firstValue-secondValue}.`);
            break;
        case "mult":
            console.log(`A multiplicação de ${firstValue} por ${secondValue} é ${firstValue*secondValue}.`);
            break;
        case "div":
            console.log(`A divisão de ${firstValue} por ${secondValue} é ${firstValue/secondValue}.`);
            break;
        default:
            console.log("Operação matemática não encontrada! Favor, digite: add (adição), sub (subtração), mult (multiplicação) ou div (divisão) como primeiro parâmetro para realizar uma das 4 operações fundamentais.");
            break;
    };
} else {
    console.log("São necessários 2 parâmetros válidos. Favor, tente novamente!");
}
