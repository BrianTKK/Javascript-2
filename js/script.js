const calcularValorHospedagem = (diarias, valorDiaria, taxaLimpeza) => {
    return diarias * valorDiaria + taxaLimpeza;
}

const valorHospedagem = calcularValorHospedagem(5, 100, 50);
console.log(`O valor total da hospedagem é: R$ ${valorHospedagem}`);