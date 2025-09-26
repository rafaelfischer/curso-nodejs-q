/*
Objetivo do programa: Maior de Dois Números: Dados dois números inteiros, determine qual deles é o maior ou se são iguais.
Data da criacao: 2025-09-25
Criado por: @rafaelfischer
*/

import readline from 'readline';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

console.log('Comparador de Dois Números');
console.log('--------------------------');

const getNumber = (prompt) => {
	return new Promise((resolve) => {
		rl.question(prompt, (answer) => {
			const num = parseFloat(answer);
			if (isNaN(num)) {
				console.log('Entrada inválida. Por favor, digite um número válido.');
				resolve(getNumber(prompt)); // Ask again if input is invalid
			} else {
				resolve(num);
			}
		});
	});
};

const main = async () => {
	const num1 = await getNumber('Digite o primeiro número: ');
	const num2 = await getNumber('Digite o segundo número: ');

	if (num1 > num2) {
		console.log(`${num1} é maior que ${num2}`);
	} else if (num2 > num1) {
		console.log(`${num2} é maior que ${num1}`);
	} else {
		console.log('Os números são iguais');
	}

	rl.close();
};

main();