/*console.log(typeof Object);

class Produto {};
console.log(typeof Produto);*/
//função sem retorno
function imprimirSoma(a, b){
    console.log(a + b);
}
imprimirSoma(2, 3);
imprimirSoma(2);

// Com retorno
function soma(a, b = 1){
    return a + b;
}

console.log(soma(2,3));
console.log(soma(2));
