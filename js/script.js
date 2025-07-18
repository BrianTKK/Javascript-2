const produtos = ['Camiseta', 'Calça', 'Tênis', 'Boné'];

console.log(produtos);
console.table(produtos);

// Adiciona um produto no inicio da array
produtos.unshift('Jaqueta');
console.table(produtos);
console.log('------------------------------------------------');

// Adiciona um produto no final da array
produtos.push('Meias');
console.table(produtos);
console.log('------------------------------------------------');

// Remove o primeiro produto da array
produtos.shift();
console.table(produtos);
console.log('------------------------------------------------');

// Remove o último produto da array
produtos.pop();
console.table(produtos);
console.log('------------------------------------------------');

// Adiciona um produto na posição 2 da array
produtos.splice(2, 0, 'Bermuda');
console.table(produtos);
console.log('------------------------------------------------');

// encontra a posição do produto
console.table(produtos);
console.log(`A posição de Calça é: ${produtos.indexOf('Calça')}`);
console.log('------------------------------------------------');

// encontra a ultima ocorrência do produto 'Calça'
produtos.unshift('Calça');
console.table(produtos);
console.log(`A posição da útima Calça é: ${produtos.lastIndexOf('Calça')}`);
console.log('------------------------------------------------');

// Copia somente os produtos a partir do índice 2 para copiaProdutos
let copiaProdutos = produtos.slice(2);
console.table(copiaProdutos);
