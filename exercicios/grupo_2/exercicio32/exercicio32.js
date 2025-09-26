/*
	Objetivo do programa: Preço de Passagem Aérea: O preço da passagem aérea depende da classe (econômica, executiva) E se há promoção.
							- Econômica: R$ 500 (normal), R$ 300 (promoção)
							- Executiva: R$ 1500 (normal), R$ 1000 (promoção)
							Peça a classe e se há promoção (""sim""/""não"") e informe o preço.
	Data da criacao: 2025-09-25
	Criado por: @rafaelfischer
*/

import readline from 'readline';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

console.log('Calculadora de Preço de Passagem Aérea');
console.log('--------------------------------------');

rl.question('Digite a classe (economica/executiva): ', (classeAnswer) => {
	const classe = classeAnswer.toLowerCase();

	rl.question('Há promoção? (sim/nao): ', (promocaoAnswer) => {
		const promocao = promocaoAnswer.toLowerCase();

		let preco = 0;

		if (classe === 'economica') {
			preco = (promocao === 'sim') ? 300 : 500;
		}
		else if (classe === 'executiva') {
			preco = (promocao === 'sim') ? 1000 : 1500;
		}
		else {
			console.log('Classe inválida. Por favor, digite "economica" ou "executiva".');
			rl.close();
			return;
		}

		console.log(`O preço da passagem é R$ ${preco.toFixed(2)}`);
		rl.close();
	});
});