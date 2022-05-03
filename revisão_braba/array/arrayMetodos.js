const pilotos = ["Vettel", "alonso", "Raikkonen", "Massa"];
pilotos.pop(); // Remove o ultimo elemento
console.log(pilotos);

pilotos.push("Verstappen");
console.log(pilotos);

pilotos.shift(); // Remove o primeiro elemento
console.log(pilotos);

pilotos.unshift("Hamilton"); // Adiciona no inicio
console.log(pilotos);

// Splice pode adicionar e remover elemetos

// Adicionar
pilotos.splice(2, 0, "Bottas", "Massa");
console.log(pilotos);

// Remover
pilotos.splice(3, 1); // Remove apenas o indice 3
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2); // Função Slice retorna um novo array apartir do indice indicado; pega um pedaço do array
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4);
console.log(algunsPilotos2);
