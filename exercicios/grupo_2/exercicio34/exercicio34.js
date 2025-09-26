/*
	Objetivo do programa: Cálculo de Bônus: Um funcionário recebe bônus se atingir uma meta de vendas (vendas >= 10000) OU se tiver mais de 5 anos de empresa. Se ambas as condições forem verdadeiras, o bônus é dobrado. Peça as vendas e os anos de empresa, e calcule o bônus (bônus base R$500).
	Data da criacao: 2025-09-25
	Criado por: @rafaelfischer
*/

import readline from 'readline';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

console.log('Cálculo de Bônus de Funcionário');
console.log('---------------------------------');

rl.question('Digite o valor das vendas: ', (vendasInput) => {
	const vendas = parseFloat(vendasInput);

	rl.question('Digite os anos de empresa: ', (anosEmpresaInput) => {
		const anosEmpresa = parseInt(anosEmpresaInput);

		if (isNaN(vendas) || isNaN(anosEmpresa)) {
			console.log('Entradas inválidas. Por favor, digite números para vendas e anos de empresa.');
			rl.close();
			return;
		}

		let bonus = 0;
		const metaVendas = vendas >= 10000;
		const tempoEmpresa = anosEmpresa > 5;

		if (metaVendas || tempoEmpresa) {
			bonus = 500;
			if (metaVendas && tempoEmpresa) {
				bonus *= 2;
			}
		}

		console.log(`O bônus do funcionário é R$ ${bonus.toFixed(2)}`);
		rl.close();
	});
});