const produtos = ['Notebook', 'Tablet', 'Smartphone', 'Desktop', 'Smartwatch'];
const precos = [2500, 1500, 1200, 3000, 800];

console.log(produtos);
console.log(precos);

// filter
const produtosComSmart = produtos.filter((produto) => {
	return produto.includes('Smart');
});
console.log(produtosComSmart);

// filter buscando por preço maior que 2000
const precosMaiores = precos.filter((preco) => {
	return preco > 2000;
});
console.log(precosMaiores);

// map - transformando os produtos em maiúsculas retornando em um novo array
const produtosEmMaiuscula = produtos.map((produto) => {
	return produto.toUpperCase();
});
console.log(produtosEmMaiuscula);

// map - dar desconto de 10%
const precosDesconto = precos.map((preco) => {
	return preco * 0.9;
});
console.log(precosDesconto);

// reduce - retorna um unico valor
const totalLetrasProdutos = produtos.reduce((acumulador, produto) => {
	return acumulador + produto.length;}, 0);
console.log(totalLetrasProdutos);

// reduce - soma todos os preços
const totalValores = precos.reduce((acumulador, preco) => {
	return acumulador + preco;
}, 0);
console.log(totalValores);