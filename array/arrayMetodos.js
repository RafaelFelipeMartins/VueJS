// Removendo o ultimo elemento com a função "POP"
const pilotos = ["Vettel", "Alonos", "Raikkonen", "Massa"];
pilotos.pop(); // Massa quebrou o Carro!
console.log(pilotos);
pilotos.pop(); // Agora provavel que saia o Raikkonen
console.log(pilotos);

// Adicionando um elemento a última posiçao com a função "PUSH"
pilotos.push("Verstappen");
console.log(pilotos);

// Tirando um elemento da primeira posição com a função "SHIFT"
pilotos.shift();
console.log(pilotos);

// Adicionando um elemento a primeira posição com a função "UNSHIFT"
pilotos.unshift("Hamilton");
console.log(pilotos);

// Adicionar
pilotos.splice(2, 0, "teste_splice1", "teste_splice2");
console.log(pilotos);

// Remover
pilotos.splice(3, 1); // Retirando do indice 3
console.log(pilotos);

// Retorna um novo Array apartir do índice 2
const algunsPilotos1 = pilotos.slice(2);
console.log(algunsPilotos1);

// Retorna um novo Array apartir do índice 2 até o 4
const algunsPilotos2 = pilotos.slice(1, 4);
console.log(algunsPilotos2);
