// Array é um objeto
// Operador new junto de uma função resultado é um objeto
// Array literal [] // Objeto literal {}
console.log(typeof Array, typeof new Array(), typeof []);

let aprovados = new Array("Bia", "Carlos", "Ana");
console.log(aprovados);

aprovados = ["Bia", "Carlos", "Ana"];
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]);

aprovados[3] = "Paulo";
aprovados.push("Abia"); // coloca um novo valor na ultima posição
console.log(aprovados.length);

aprovados[9] = "Rafael";
console.log(aprovados.length);
console.log(aprovados);

console.log(aprovados);
aprovados.sort(); // ordena o array em ordem alfabetica
console.log(aprovados);

delete aprovados[1];
console.log(aprovados[1]);
console.log(aprovados[2]);

aprovados = ["Bia", "Carlos", "Ana"];
aprovados.splice(
    1 /*A partir do indice indicado*/,
    1 /*O segunda valor é até onde você quer q vá*/,
    "Elemento1",
    "Elementos2" /*Dessa forma você atribiu valores aos determinados indices*/
);
console.log(aprovados);
