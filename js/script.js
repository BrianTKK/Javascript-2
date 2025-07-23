const numeros1 = [1, 2, 3];
console.log(`Array numeros1: ${numeros1}`);

const numeros2 = [4, 5, 6];
console.log(`Array numeros2: ${numeros2}`);

const todosNumeros = [...numeros1, ...numeros2];
console.log(`Array todosNumeros: ${todosNumeros}`);

const novoArray = [12, 14, 16, 18, ...todosNumeros, 20, 22, 24];
console.log(`Array novoArray: ${novoArray}`);

console.log('--------------------------');


const carrinho = {
	Camiseta: 20.99,
	Calça: 39.99,
	Tênis: 89.99
};

const carrinhoCopiado = { ...carrinho };
console.log(carrinho);
console.log(carrinhoCopiado);
