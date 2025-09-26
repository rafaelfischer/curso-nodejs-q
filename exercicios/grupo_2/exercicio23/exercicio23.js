
/*
	Objetivo do programa: Condição de Crédito: Um cliente pode obter crédito se tiver renda mensal acima de R$2000,00 OU se tiver um bom histórico de crédito (digite "bom" ou "ruim"). Informe se o crédito é "Aprovado" ou "Negado".
	Data da criacao: 2025-09-25
	Criado por: @rafaelfischer
*/

import readline from 'readline';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

console.log('Verificador de Condição de Crédito');
console.log('----------------------------------');

rl.question('Digite sua renda mensal: R$ ', (rendaAnswer) => {
	const renda = parseFloat(rendaAnswer);

	if (isNaN(renda) || renda < 0) {
		console.log('Entrada inválida para renda. Por favor, digite um valor numérico válido.');
		rl.close();
		return;
	}

	rl.question('Digite seu histórico de crédito (Bom / Ruim): ', (historicoAnswer) => {
		const historico = historicoAnswer.toLowerCase();

		if (!['bom', 'ruim'].includes(historico)) {
			console.log('Entrada inválida para histórico de crédito. Por favor, digite \'Bom\' ou \'Ruim\'.');
		} 
		else {
			const creditoAprovado = renda > 2000 || historico === 'bom';
			console.log(`Crédito ${creditoAprovado ? 'Aprovado' : 'Negado'}`);
		}

		rl.close();
	});
});