/*
	Objetivo do programa:
	Data da criacao: YYYY-MM-DD
	Criado por: @programacaomentoria
*/

// Declaração de variáveis (equivalente a 'var' em Pascal)
// Use 'let' para variáveis que podem ser reatribuídas
let nomeVariavel;
let idade; // Exemplo: let idade = 30;
// Use 'const' para valores que não mudam
const PI = 3.14; // Exemplo: const PI = 3.14159;

// Bloco principal de instruções (equivalente a 'begin...end.' em Pascal)
(function() {
  	// Lugar no programa onde escrevo as instruções
  	// Exemplo: write('Digite seu nome:');
  	console.log('Digite seu nome:');

  	// Exemplo: readln(nome);
  	// Em Node.js, a leitura de entrada do usuário é assíncrona.
  	// Vamos usar o módulo 'readline' para isso.
  	const readline = require('readline').createInterface({
		input: process.stdin,
		output: process.stdout
  	});

  	readline.question('Digite seu nome: ', (nome) => {
		// Exemplo: writeln('Olá ', nome);
		console.log(`Olá, ${nome}`);
		readline.close();
  	});
})();