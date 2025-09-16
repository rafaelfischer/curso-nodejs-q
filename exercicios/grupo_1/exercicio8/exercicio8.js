/*
	Objetivo do programa: Você está montando um cadastro para uma empresa de vendas na internet, e precisa fornecer este 'formulário de dados de clientes'.
							Não se preocupe neste momento se irá ou não guardar este dado em algum lugar.
							Pergunte e obtenha os seguintes dados e depois exiba todos na tela:
								- Nome Completo
								- Data de Nascimento
								- Cidade/Pais de Origem(Nascimento)
								- Endereco completo de onde mora
								- Pais onde reside
								- Data do Cadastro
								- Escolaridade: (Ensino Básico/Ensino Fundamental/Ensino Superior)
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

console.log('Cadastro de Clientes');
console.log('-------------------');

let NomeCompleto, DataNascimento, CidadePaisOrigem, EnderecoCompleto, PaisResidencia, DataCadastro, Escolaridade;

rl.question('Nome Completo: ', (infoUser) => {
	NomeCompleto = infoUser;
	rl.question('Data de Nascimento: ', (infoUser) => {
		DataNascimento = infoUser;
		rl.question('Cidade/Pais de Origem (Nascimento): ', (infoUser) => {
			CidadePaisOrigem = infoUser;
			rl.question('Endereco completo de onde mora: ', (infoUser) => {
				EnderecoCompleto = infoUser;
				rl.question('Pais onde reside: ', (infoUser) => {
					PaisResidencia = infoUser;
					rl.question('Data do Cadastro: ', (infoUser) => {
						DataCadastro = infoUser;
						rl.question('Escolaridade (Ensino Básico/Ensino Fundamental/Ensino Superior): ', (infoUser) => {
							Escolaridade = infoUser;

							console.log('');
							console.log('============================');
							console.log('Dados do Cliente Cadastrado:');
							console.log('============================');
							console.log(`Nome Completo: ${NomeCompleto}`);
							console.log(`Data de Nascimento: ${DataNascimento}`);
							console.log(`Cidade/Pais de Origem: ${CidadePaisOrigem}`);
							console.log(`Endereco Completo: ${EnderecoCompleto}`);
							console.log(`Pais de Residencia: ${PaisResidencia}`);
							console.log(`Data de Cadastro: ${DataCadastro}`);
							console.log(`Escolaridade: ${Escolaridade}`);
							rl.close();
						});
					});
				});
			});
		});
	});
});