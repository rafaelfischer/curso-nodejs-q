/*
	Objetivo do programa: Pergunte a data de nascimento e verifique se a data atual é a data de aniversário.
							Se for, printe a mensagem de Feliz Aniversário, senão printe a mensagem hoje e dia X de Y
							de ZZZZ.
	Data da criacao: 2025-09-23
	Criado por: @rafaelfischer
*/

import readline from 'readline';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

console.log('Verificador de Aniversário');
console.log('--------------------------');

rL.question('Digite o dia do seu nascimento (DD): ', (diaNascimentoStr) => {
	const diaNascimento = parseInt(diaNascimentoStr);

	rl.question('Digite o mes do seu nascimento (MM): ', (mesNascimentoStr) => {
		const mesNascimento = parseInt(mesNascimentoStr);

		const hoje = new Date();
		const diaAtual = hoje.getDate();
		const mesAtual = hoje.getMonth() + 1; // getMonth() retorna 0-11
		const anoAtual = hoje.getFullYear();

		if (isNaN(diaNascimento) || isNaN(mesNascimento) || diaNascimento < 1 || diaNascimento > 31 || mesNascimento < 1 || mesNascimento > 12) {
			console.log('Entrada de data inválida. Por favor, digite um dia e mês válidos.');
		} else if (diaNascimento === diaAtual && mesNascimento === mesAtual) {
			console.log('Feliz Aniversário!');
		} else {
			console.log(`Hoje eh dia ${diaAtual} de ${mesAtual} de ${anoAtual}`);
		}

		rl.close();
	});
});