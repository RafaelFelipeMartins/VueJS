const aprovados = ["Agatha", "Aldo", "Daniel", "Raquel"];

aprovados.forEach(function (nome, indice, array) {
    console.log(`${indice + 1}) ${nome}`);
    console.log(array);
});

aprovados.forEach((nome, indice) => console.log(indice, nome));

const exibirAprovados = (aprovados) => console.log(aprovados);
aprovados.forEach(exibirAprovados);
