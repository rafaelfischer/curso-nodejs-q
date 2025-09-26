/*
	Objetivo do programa: Exclusão de Desconto: Um desconto de 15% é aplicado, EXCETO se o produto for da categoria "Eletrônicos" E o valor for inferior a R$500. Peça a categoria e o valor, e diga se o desconto se aplica. (Use NÃO ou negue a condição do E)
	Data da criacao: 2025-09-25
	Criado por: @rafaelfischer
*/

import readline from 'readline';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

console.log('Verificador de Desconto');
console.log('-------------------------');

rl.question('Digite a categoria do produto: ', (categoria) => {
	rl.question('Digite o valor do produto: ', (valorAnswer) => {
		const valor = parseFloat(valorAnswer);

		if (isNaN(valor) || valor < 0) {
			console.log('Entrada inválida para o valor. Por favor, digite um número positivo.');
		}
		else {
			const aplicaDesconto = !(categoria.toLowerCase() === 'eletronicos' && valor < 500);

			if (aplicaDesconto) {
				console.log('O desconto de 15% será aplicado.');
			}
			else {
				console.log('O desconto não será aplicado.');
			}
		}

		rl.close();
	});
});