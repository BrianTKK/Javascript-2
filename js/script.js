(function () {
	let carrinho = '';

	function adicionarAoCarrinho(item) {
		carrinho += item + ' ';
		console.log('Item adicionado ao carrinho: ' + item);
	}

	function obterCarrinho() {
		return carrinho;
	}

	adicionarAoCarrinho('Produto 1');
	adicionarAoCarrinho('Produto 2');
	adicionarAoCarrinho('Produto 3');

	console.log('Itens no carrinho: ' + obterCarrinho());
	
})();
