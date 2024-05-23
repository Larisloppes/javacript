const readlineSync = require('readline-sync');

// Captura dos inputs do usuário
let valorDevido = readlineSync.question("Informe o valor devido: R$ ");
let diasAtraso = readlineSync.question("Informe quantos dias se passaram desde o vencimento do boleto: ");

// Conversão dos valores para números
valorDevido = Number(valorDevido);
diasAtraso = Number(diasAtraso);

// Validação dos inputs
if (valorDevido <= 0) {
    console.log("O valor da dívida deve ser maior que zero.");
    process.exit();
}

if (diasAtraso < 0) {
    console.log("O número de dias em atraso não pode ser negativo.");
    process.exit();
}

if (diasAtraso === 0) {
    console.log("Você está em dia com o pagamento.");
    process.exit();
}

// Cálculo da taxa de juros
let taxaJuros = diasAtraso > 15 ? 0.10 : 0.05;

// Cálculo do valor total com juros
let valorTotal = valorDevido + (valorDevido * taxaJuros);

// Exibição dos resultados
console.log(`\nValor original da dívida: R$ ${valorDevido.toFixed(2)}`);
console.log(`Dias atrasados: ${diasAtraso}`);
console.log(`Taxa de Juros: ${(taxaJuros * 100).toFixed(2)}%`);
console.log(`Valor total com juros: R$ ${valorTotal.toFixed(2)}`);



