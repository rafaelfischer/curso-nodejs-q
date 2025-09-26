/*
	Objetivo do programa: Desconto por Compra: Uma loja oferece 10% de desconto se o valor da compra for superior a R$100,00. Leia o valor da compra e mostre o valor final com ou sem desconto.
	Data da criacao: 2025-09-25
	Criado por: @rafaelfischer
*/

import readline from 'readline';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

console.log('Calculadora de Desconto por Compra');
console.log('----------------------------------');

rl.question('Digite o valor da compra: R$ ', (answer) => {
	const valorCompra = parseFloat(answer);
	const descontoPorcentagem = 10; // porcentagem de desconto

	if (isNaN(valorCompra) || valorCompra < 0) {
		console.log('Entrada inválida. Por favor, digite um valor de compra válido.');
	} else if (valorCompra > 100.0) {
		const valorDesconto = valorCompra * (descontoPorcentagem / 100);
		const valorFinal = valorCompra - valorDesconto;
		console.log(`Valor com desconto de ${descontoPorcentagem}%: R$ ${valorFinal.toFixed(2)} - Valor do desconto: R$ ${valorDesconto.toFixed(2)}`);
	} else {
		console.log(`Valor sem desconto: R$ ${valorCompra.toFixed(2)}`);
	}

	rl.close();
});