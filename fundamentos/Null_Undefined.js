let valor // nao inicializada
console.log(valor);

valor = null // aus~encia de valor
console.log(valor);
// console.log(valor.toString()) // Erro!

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined // não fazer isso se possivel
// ranca fora delete produto.preco;
console.log(produto);

produto.preco = null // sem preço, coisa boa
console.log(!!produto.preco);
console.log(produto);