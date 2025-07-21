const produtos = [
	'Celular',
	'Notebook',
	'Tablet',
	'Smartwatch',
	'Fone de Ouvido',
	'Câmera',
	'Impressora',
	'Monitor',
	'Teclado',
	'Mouse'
];

console.table(produtos);

// percorrendo com for
for (let i = 0; i < produtos.length; i++) {
	console.log(produtos[i]);
}
console.log('--------------------------------------');

// usando for in
for (let index in produtos) {
	console.log(produtos[index]);
}
console.log('--------------------------------------');

// usando for of (Não trabalha com indice)
for (let produto of produtos) {
	console.log(produto);
}
console.log('--------------------------------------');

// usando forEach
produtos.forEach((produto, index) => {
	console.log(`${index} - ${produto}`);
});
