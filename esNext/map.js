const tecnologias = new Map();
tecnologias.set("react", { framework: false });
tecnologias.set("Angular", { framework: true });

console.log(tecnologias.react);
console.log(tecnologias.get("react").framework);

const chavesVaridas = new Map([
    [function () {}, "Função"],
    [{}, "Objeto"],
    [123, "Número"],
]);

chavesVaridas.forEach((vl, ch) => {
    console.log(ch, vl);
});

console.log(chavesVaridas.has(123));
chavesVaridas.delete(123);
console.log(chavesVaridas.has(123));
console.log(chavesVaridas.size);

chavesVaridas.set(123, "A");
chavesVaridas.set(123, "B");
chavesVaridas.set(456, "B");
console.log(chavesVaridas);
