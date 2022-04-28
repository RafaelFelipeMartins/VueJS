const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];

// sem callback
const notasBaixas1 = [];
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i]);
    }
}

console.log(notasBaixas1);

// Com callback
// se a nota foi menor que 7 vai ser 'true' ai ela entra no array se for maior vai ser 'false' e ela não entra no array
const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7;
});

console.log(notasBaixas2);

// Estudar isso de novo hein Zé
const notasMenorQue7 = (nota) => nota < 7;
const notasBaixas3 = notas.filter(notasMenorQue7);
console.log(notasBaixas3);
