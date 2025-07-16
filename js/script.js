const simularValorPassagem = function (qtdAdultos, qtdCriancas, idaVolta) {
    const PRECO_PASSAGEM = 1000;

    // calculo adulto 
    const valorAdulto = PRECO_PASSAGEM * qtdAdultos;

    // calculo criança
    const valorCrianca = (PRECO_PASSAGEM * qtdCriancas) * 0.5;

    if (idaVolta) {
        return (valorAdulto + valorCrianca) * 2;
    } else {
        return valorAdulto + valorCrianca;
    }
}

let valorPassagem = simularValorPassagem(2, 3, false);
console.log(`O valor da passagem é: R$ ${valorPassagem.toFixed(2)}`);

valorPassagem = simularValorPassagem(3, 0, true);
console.log(`O valor da passagem é: R$ ${valorPassagem.toFixed(2)}`);