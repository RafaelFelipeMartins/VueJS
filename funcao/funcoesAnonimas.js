const soma = function (x, y) {
    return x + y;
};

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b));
};

const mult = function (c, d) {
    return c * d;
};

const imprimirResultado2 = function (d, f, op = mult) {
    console.log(op(d, f));
};

imprimirResultado(1, 2);
imprimirResultado2(1, 2, function (x, y) {
    return x - y;
});

imprimirResultado(3, 4, (x, y) => x * y);

const pessoa = {
    falar: function () {
        console.log("UEPAA!!");
    },
    arroto: function () {
        console.log("ARROTIN");
    },
};

pessoa.falar();
pessoa.arroto();
