/*
Objetivo do programa: Pergunte três números. Diga qual é o maior entre eles. Atenção, utilize a estrutura IF.
Data da criacao: 2025-09-25
Criado por: @rafaelfischer
*/

import readline from 'readline';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

console.log('Encontrar o Maior Número');
console.log('------------------------');

const getNumber = (prompt) => {
	return new Promise((resolve) => {
		rl.question(prompt, (answer) => {
			const num = parseFloat(answer);
			if (isNaN(num)) {
				console.log('Entrada inválida. Por favor, digite um número válido.');
				resolve(getNumber(prompt)); // Ask again if input is invalid
			}
			else {
				resolve(num);
			}
		});
	});
};

const main = async () => {
	const num1 = await getNumber('Digite o primeiro número: ');
	const num2 = await getNumber('Digite o segundo número: ');
	const num3 = await getNumber('Digite o terceiro número: ');

	let maior;

	if (num1 >= num2 && num1 >= num3) {
		maior = num1;
	}
	else if (num2 >= num1 && num2 >= num3) {
		maior = num2;
	}
	else {
		maior = num3;
	}

	console.log(`O maior número é: ${maior}`);

	rl.close();
};

main();