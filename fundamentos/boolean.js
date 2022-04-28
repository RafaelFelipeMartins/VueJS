let Ativo = false;
console.log(Ativo);

Ativo = true;
console.log(!!Ativo);

Ativo = 1;
console.log(!!Ativo); // inverte 2 vezes;
console.log(!Ativo); // converte 1 vez;

console.log('Verdadeiros...');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(Ativo = Infinity));

console.log('falso...');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(Ativo = false));

console.log('Finalizar...');
console.log(!!('' || null|| 0 || ' '));

let nome = 'txt';
console.log(nome || 'Desconhecido');