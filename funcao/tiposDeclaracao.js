console.log(soma(3, 4)); // No caso soma ta aqui
// Function declaration
// Esse tipo de função pode ser chamada em baixo em cima em qualquer canto
function soma(x, y) {
    return x + y;
}

// Function expression
// Esse tipo de função pode ser chamada dela para baixo
const sub = function (x, y) {
    return x - y;
};

console.log(sub(3, 4)); // Função sub ta aqui

// Named function expression
// Esse tipo de função tambem só funciona dela para baixo que nem a 'Expression'
const mult = function mult(x, y) {
    return x * y;
};

console.log(mult(3, 4)); // No caso a 'Named' ta sendo chamada aqui
