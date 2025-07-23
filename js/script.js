// Desestruturação de Arrays

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [a, b, c, ...restante] = numeros;
console.log(a);
console.log(b);
console.log(c);
console.log(restante);
console.log('----------------------------');

// Desestruturação de Objetos
const livro = {
	titulo: 'JavaScript Essencial',
	autor: 'John Doe',
	ano: 2023,
	editora: 'Tech Books',
	paginas: 300
};

const {titulo, autor, ano, editora, paginas} = livro;
console.log(titulo);
console.log(autor);
console.log(ano);
console.log(editora);
console.log(paginas);