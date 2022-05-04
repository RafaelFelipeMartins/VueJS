// operador Rest(juntar)/spread(espalhar)
// usar rest com parâmetro de função

// Usar spread com objeto
const funcionario = { nome: "Maria", salario: 12348.99 };
const clone = { ativo: true, ...funcionario };
console.log(clone);

// Usar spread com array
const grupoA = ["João", "Pedro", "Gloria"];
const grupoFinal = ["Maria", ...grupoA, "rafaela"];
console.log(grupoFinal);
