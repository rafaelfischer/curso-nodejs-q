/*
	Objetivo do programa: Calcule a área de um retângulo
	Area = comprimento * altura
	Data da criacao: 2025-08-28
	Criado por: @programacaomentoria
	Ultima atualizacao: 2025-09-16
	Alterado por: @rafaelfischer
*/

import readline from 'readline';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

console.log('Calculo da area de um retangulo');
console.log('-------------------------------');

rl.question('Informe o comprimento: ', (comprimentoInput) => {
	rl.question('Informe a altura: ', (alturaInput) => {
		const comprimento = parseFloat(comprimentoInput);
		const altura = parseFloat(alturaInput);
		const area = comprimento * altura;
		console.log(`A area do retangulo e: ${area.toFixed(2)}`);
		rl.close();
	});
});