const produtos = ['Camiseta', 'Calça', 'Tênis', 'Boné'];
console.table(produtos);
console.log('--------------------------------------');

const produtos2 = ['Relogio', 'Óculos', 'Pulseira', 'Anel'];
console.table(produtos2);

// concatenação de arrays
const novosProdutos = produtos.concat(produtos2);
console.table(novosProdutos);
console.log('--------------------------------------');

// Ordena os produtos em ordem alfabética
produtos.sort();
console.table(produtos);

// Ordena os produtos em ordem alfabética inversa
produtos.reverse();
console.table(produtos);

console.log('--------------------------------------');

// Converter o array em string
const produtosString = produtos.join(', ');
console.log(produtosString);

console.log('--------------------------------------');

// Verifica se um produto existe no array
// Retorna true ou false
let existe = produtos.includes('Camiseta');
console.log(existe);
console.log('--------------------------------------');

//Verifica se todos os produtos possuem a letra "a"
let produtosComLetraA = produtos.every((produto) => {
	return produto.includes('a');
});
console.log(`Todos os produtos possuem a letra "a"? ${produtosComLetraA}`);

console.log('--------------------------------------');

// Verifica se algum produto possui a letra "a"
let produtosComLetraA2 = produtos.some((produto) => {
	return produto.includes('a');
});
console.log(`Algum produto possui a letra "a"? ${produtosComLetraA2}`);
console.log('--------------------------------------');

// Procura o primeiro produto com mais de 6 caracteres
const MaiorQue6 = produtos.find((produto) => {
	return produto.length > 6;
});
console.log(`Primeiro produto com mais de 6 caracteres: ${MaiorQue6}`);
