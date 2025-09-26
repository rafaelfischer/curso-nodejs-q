/*
	Objetivo do programa: Classificação de Triângulos: Dados três valores que representam os lados de um triângulo, determine:
						- Se eles formam um triângulo (a soma de dois lados deve ser sempre maior que o terceiro lado).
						- Se for um triângulo, classifique-o como "Equilátero" (todos os lados iguais), "Isósceles" (dois lados iguais) ou "Escaleno" (todos os lados diferentes).
	Data da criacao: 2025-09-25
	Criado por: @rafaelfischer
*/

import readline from 'readline';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

console.log('Classificador de Triângulos');
console.log('---------------------------');

function isTriangulo(lado1, lado2, lado3) {
	return (lado1 + lado2 > lado3) && (lado2 + lado3 > lado1) && (lado1 + lado3 > lado2);
}

function classificarTriangulo(lado1, lado2, lado3) {
	if (lado1 === lado2 && lado2 === lado3) {
		return 'Equilátero';
	} else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
		return 'Isósceles';
	} else {
		return 'Escaleno';
	}
}

rl.question('Digite o primeiro lado do triângulo: ', (lado1Answer) => {
	const lado1 = parseFloat(lado1Answer);

	rl.question('Digite o segundo lado do triângulo: ', (lado2Answer) => {
		const lado2 = parseFloat(lado2Answer);

		rl.question('Digite o terceiro lado do triângulo: ', (lado3Answer) => {
			const lado3 = parseFloat(lado3Answer);

			if (isNaN(lado1) || lado1 <= 0 || isNaN(lado2) || lado2 <= 0 || isNaN(lado3) || lado3 <= 0) {
				console.log('Entrada inválida. Por favor, digite valores numéricos positivos para os lados do triângulo.');
			} 
			else {
				if (isTriangulo(lado1, lado2, lado3)) {
					const tipo = classificarTriangulo(lado1, lado2, lado3);
					console.log(`É um triângulo ${tipo}`);
				} 
				else {
					console.log('Não forma um triângulo');
				}
			}

			rl.close();
		});
	});
});
