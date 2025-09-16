/*
  Objetivo do programa: Perguntar o nome de quem está usando o programa e sua idade. Faça duas perguntas.
  Data da criacao: 2025-08-28
  Criado por: @programacaomentoria
  Ultima atualizacao: 2025-09-16
  Alterado por: @rafaelfischer
*/

import readline from 'readline';

const rl = readline.createInterface({
  	input: process.stdin,
  	output: process.stdout
});

rl.question('Digite seu nome: ', (nome) => {
	rl.question('Digite sua idade: ', (idade) => {
		console.log(`Olá, ${nome}! Você tem ${idade} anos.`);
		rl.close();
  	});
});