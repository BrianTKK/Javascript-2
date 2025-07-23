function calcularSoma(...numeros) {
	let soma = 0;
	for (let numero of numeros) {
		soma += numero;
	}
	return soma;
}

console.log(calcularSoma(10, 20, 30));
console.log(calcularSoma(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
console.log('----------------------------');

function calcularMedia(...numeros) {
	let soma = 0;
	for (let numero of numeros) {
		soma += numero;
	}
	return soma / numeros.length;
}

console.log(calcularMedia(10, 20, 30));
console.log(calcularMedia(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
console.log('----------------------------');
