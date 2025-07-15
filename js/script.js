// função simples
function soma(){
    let numeroUm = 20;
    let numeroDois = 30;
    console.log(numeroUm + numeroDois);
    
}
soma();
console.log("-----------------");

// parametros
function multiplica(v1 = 0, v2 = 0) {
    let resultado = v1 * v2;
    console.log(resultado);
}
multiplica()
multiplica(10, 20);
multiplica(5, 6);
console.log("-----------------");

// função com retorno 
function subtrair(v1 = 0, v2 = 0) {
    return v1 - v2;
}
const resultadoFuncao = subtrair(10, 3);
console.log(resultadoFuncao);
console.log("-----------------");

