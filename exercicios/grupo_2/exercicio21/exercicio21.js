
/*
	Objetivo do programa: Permissão para Dirigir: Uma pessoa pode dirigir se tiver 18 anos ou mais E possuir CNH. Peça a idade e se possui CNH (sim/não) e informe se a pessoa pode ou não dirigir.
	Data da criacao: 2025-09-25
	Criado por: @rafaelfischer
*/

import readline from 'readline';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

console.log('Verificador de Permissão para Dirigir');
console.log('-------------------------------------');

rl.question('Digite sua idade: ', (idadeAnswer) => {
	const idade = parseInt(idadeAnswer);

	if (isNaN(idade) || idade < 0) {
		console.log('Entrada inválida. Por favor, digite uma idade válida.');
		rl.close();
		return;
	}

	if (idade < 18) {
		console.log('Você não pode dirigir');
		rl.close();
		return;
	}

	rl.question('Possui CNH? (Sim/Não): ', (cnhAnswer) => {
		const temCNH = cnhAnswer.toLowerCase();

		if (!['sim', 's', 'não', 'nao', 'n'].includes(temCNH)) {
			console.log('Resposta inválida. Por favor, responda com \'Sim\' ou \'Não\'.');
		} else if (['não', 'nao', 'n'].includes(temCNH)) {
			console.log('Você não pode dirigir');
		} else {
			console.log('Você pode dirigir');
		}

		rl.close();
	});
});