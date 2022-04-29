// Array é uma função
let aprovados = new Array("Bia", "Carlos", "Ana");
console.log(aprovados);
console.log("-------------------");
aprovados = ["Bia", "Carlos", "Ana"];
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]);

aprovados[3] = "Paulo"; // Melhor pra substituir
aprovados.push("Abia"); // Melhor pra adicionar elemento
console.log(aprovados.length);

aprovados[9] = "Rafael";
console.log(aprovados.length);
console.log(aprovados[8] === undefined);

console.log(aprovados);
aprovados.sort();
console.log(aprovados);

delete aprovados[1];
console.log(aprovados[1]);
console.log(aprovados[2]);

aprovados = ["Bia", "Carlos", "Ana"];
aprovados.splice(1, 1, "Elemento1", "Elemento2"); // trabalha assim a primeiro valor é onde começa e o segundo é até onde vc quer ir e tambem os dois parametros que sao chamados "elemento1", "Elemento2" hambos serao colocado no lugar dos indices excluirdos
console.log(aprovados);
