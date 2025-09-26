/*
	Objetivo do programa: Validação de Data: Crie um algoritmo que verifique se uma data (dia, mês, ano) é válida. Considere meses com 30, 31 dias e fevereiro (29 em ano bissexto, 28 nos outros). Não precisa validar anos negativos ou meses fora de 1-12.
	Data da criacao: 2025-09-25
	Criado por: @rafaelfischer
*/

import readline from 'readline';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

console.log('Validação de Data');
console.log('-------------------');

const validarData = (dia, mes, ano) => {
	if (mes < 1 || mes > 12 || dia < 1) {
		return false;
	}

	const diasPorMes = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	if (mes === 2 && ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0)) {
		diasPorMes[2] = 29;
	}

	return dia <= diasPorMes[mes];
};

rl.question('Digite o dia: ', (diaInput) => {
	const dia = parseInt(diaInput);

	rl.question('Digite o mês: ', (mesInput) => {
		const mes = parseInt(mesInput);

		rl.question('Digite o ano: ', (anoInput) => {
			const ano = parseInt(anoInput);

			if (isNaN(dia) || isNaN(mes) || isNaN(ano)) {
				console.log('Entradas inválidas. Por favor, digite números para dia, mês e ano.');
			} else {
				const dataValida = validarData(dia, mes, ano);
				console.log(`Data ${dataValida ? 'válida' : 'inválida'}`);
			}
			rl.close();
		});
	});
});