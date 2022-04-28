// Pensa ai Rafão
function Carro(valocidadeMax = 200, delta = 5) {
    // Atributo privado (pertence só ao escopo do funçaõ)
    let velocidadeAtual = 0;

    // Metodo publico
    this.acelerar = function () {
        if (velocidadeAtual + delta <= valocidadeMax) {
            velocidadeAtual += delta;
        } else {
            velocidadeAtual = valocidadeMax;
        }
    };

    // Metodo Publico 2
    this.getVelocidadeAtual = function () {
        return velocidadeAtual;
    };
}

const uno = new Carro();
uno.acelerar();
console.log(uno.getVelocidadeAtual());

const ferrari = new Carro(350, 20);
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());

console.log(typeof Carro);
console.log(typeof ferrari);
