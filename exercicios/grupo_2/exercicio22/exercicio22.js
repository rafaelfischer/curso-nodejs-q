/*
	Objetivo do programa: Login com Credenciais: Crie um algoritmo que verifique se um nome de usuário (ex: "admin") E uma senha (ex: "1234") estão corretos para conceder acesso.
	Data da criacao: 2025-09-25
	Criado por: @rafaelfischer
*/
import readline from 'readline';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const adminUsuario = 'admin';
const adminSenha = '1234';

console.log('Sistema de Login');
console.log('----------------');

rl.question('Digite o usuário: ', (usuarioAnswer) => {
	rl.question('Digite a senha: ', (senhaAnswer) => {
		if (usuarioAnswer === adminUsuario && senhaAnswer === adminSenha) {
			console.log('Acesso concedido!');
		} else {
			console.log('Acesso negado!');
		}
		rl.close();
	});
});