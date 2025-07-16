function calcularDesconto(preco, porcentagemDesconto) {
	const desconto = (preco * porcentagemDesconto) / 100;
	return preco - desconto;
}

function calcularPrecoFinal(preco, porcentagemDesconto, callback) {
	const precoFinal = callback(preco, porcentagemDesconto);
	console.log(`O preço final após o desconto é: R$ ${precoFinal.toFixed(2)}`);
}

console.log('Calculando o preço final com desconto...');
calcularPrecoFinal(100, 10, calcularDesconto);
