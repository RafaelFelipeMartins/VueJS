const pessoa = {
    nome: "Rebeca",
    idade: 2,
    peso: 13,
};

console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));

// Coisa boa isso aqui hein
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`);
});

Object.defineProperty(pessoa, "dataNascimento", {
    enumerable: true, // mostrar no console ou nao
    writable: false, // re-escrever a propriedade
    value: "01/01/2019", // a data padrão
});

pessoa.dataNascimento = "01/01/2020";
console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa));

// Object.assing [ECMAScript 2015] Concatena dentro do obj de destino Object.assign
const dest = { a: 1 };
const o1 = { b: 2 };
const o2 = { c: 3, a: 4 };
const obj = Object.assign(dest, o1, o2);
console.log(dest);

Object.freeze(obj);
obj.c = 1234;
console.log(obj);
