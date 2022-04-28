// PEssoa -> 123 enderecço de memómia 123 a pessoa aponta para esse endereço
const pessoa = { nome: "Jão" };
pessoa.nome = "Pedro";
console.log(pessoa);

// Pessoa <- 456 -> {...}
//pessoa = { nome: "Ana" }; Isso aqui dá erro

Object.freeze(pessoa); // conjela o objeto apartir da linha 9 mas depois do freeze ele nao muda

pessoa.nome = "Maria";
pessoa.end = "Rua ABC";
delete pessoa.nome;

console.log(pessoa.nome);
console.log(pessoa);

const pessoaConstante = Object.freeze({ nome: "Joao" });
pessoaConstante.nome = "Maria";
console.log(pessoaConstante);
