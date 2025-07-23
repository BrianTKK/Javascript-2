// objetos literais
const produto1 = {
	id: 122,
	tipo: 'Celular',
	fabricante: 'Apple',
	preco: 4899.0
};

const produto2 = {
	id: 456,
	tipo: 'Notebook',
	fabricante: 'Dell',
	preco: 5999.0
};

console.log(produto1);
console.log(produto2);
console.log(produto1.tipo);
console.log(produto2.preco);
console.log('---------------------------');

// Objetos com construtor
function User(id, user, password, email) {
	this.id = id;
	this.user = user;
	this.password = password;
	this.email = email;
}

const user1 = new User(123, 'john_doe', '123456', 'john@eu,com');
const user2 = new User(124, 'mariah', '123456', 'mariahn@eu,com');
const user3 = new User(125, 'jess', '123456', 'jessn@eu,com');

console.log(user1);
console.log(user2);
console.log(user3);
console.log(user1.user);
console.log('---------------------------');

// factory function
function criarHeroi(nome, velocidade, agilidade, forca) {
	return {
		nome,
		velocidade,
		agilidade,
		forca
	};
}

const heroi1 = criarHeroi('Flash', 1000, 100, 50);
const heroi2 = criarHeroi('Superman', 900, 90, 100);
const heroi3 = criarHeroi('Batman', 500, 80, 30);
console.log(heroi1);
console.log('---------------------------');

// criando metodos
function Pessoa(nome, idade, altura, cidade, ocupacao) {
	return {
		nome,
		idade,
		altura,
		cidade,
		ocupacao,
		exibirPessoa: function () {
			console.log(`Nome: ${nome}`);
			console.log(`Idade: ${idade}`);
			console.log(`Altura: ${altura}`);
			console.log(`Cidade: ${cidade}`);
			console.log(`Ocupação: ${ocupacao}`);
		}
	};
}

const pessoa1 = new Pessoa('João', 30, 1.75, 'São Paulo', 'Engenheiro');
pessoa1.exibirPessoa();

// Adicionando uma propriedade a pessoa1
pessoa1.projetoAtual = 'Projeto Front-end Tesla';
console.log(pessoa1);

// removendo uma propriedade
delete pessoa1.altura;
console.log(pessoa1);

