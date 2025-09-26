/*
	Objetivo do programa: Aceitar Convite: Um convite será aceito se a pessoa for "amigo" OU for "familia" E estiver disponível. Peça o tipo de relação e a disponibilidade ("sim"/"não").
	Data da criacao: 2025-09-25
	Criado por: @rafaelfischer
*/

import readline from 'readline';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

console.log('Verificador de Aceitação de Convite');
console.log('----------------------------------');

rl.question('Qual o tipo de relação? (amigo/familia): ', (relacaoAnswer) => {
	const relacao = relacaoAnswer.toLowerCase();

	rl.question('Está disponível? (sim/não): ', (disponivelAnswer) => {
		const disponivel = disponivelAnswer.toLowerCase();

		if (!('amigo' === relacao || 'familia' === relacao) || !('sim' === disponivel || 'não' === disponivel)) {
			console.log('Entrada inválida. Por favor, digite "amigo" ou "familia" para relação e "sim" ou "não" para disponibilidade.');
		}
		else {
			const aceito = (relacao === 'amigo') || (relacao === 'familia' && disponivel === 'sim');

			if (aceito) {
				console.log('Convite aceito');
			}
			else {
				console.log('Convite não aceito');
			}
		}

		rl.close();
	});
});