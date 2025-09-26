/*
	Objetivo do programa: Verificar Vogal: Peça um caractere e verifique se ele é uma vogal (a, e, i, o, u), considerando letras maiúsculas e minúsculas. Use o operador OU.
	Data da criacao: 2025-09-25
	Criado por: @rafaelfischer
*/

import readline from 'readline';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

console.log('Verificador de Vogal');
console.log('--------------------');

rl.question('Digite um caractere: ', (answer) => {
	const caractere = answer.toLowerCase();

	if (caractere.length !== 1) {
		console.log('Entrada inválida. Por favor, digite apenas um caractere.');
	}
	else {
		const ehVogal = caractere === 'a' || caractere === 'e' || caractere === 'i' || caractere === 'o' || caractere === 'u';

		if (ehVogal) {
			console.log('O caractere é uma vogal');
		}
		else {
			console.log('O caractere não é uma vogal');
		}
	}

	rl.close();
});