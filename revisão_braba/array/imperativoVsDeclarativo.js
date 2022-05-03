const alunos = [
    { nome: "João", nota: 7.9 },
    { nome: "MAria", nota: 9.2 },
];

// Imperativo isso aqui tudo é uma coisa só é uma forma de ensinar pra alguem todos os passos sem deixar nenhum detalhe faltando
let total1 = 0;
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota;
}
console.log(total1 / alunos.length);

// Delcarativo é melhor pq tudo isso e feitos por parte e da pra reutilizar as partes tipo um lego vc so diz oq tem q ser feito e as coisas internamentes sao feitas
// Exemplo um comando SQL pois o que eu quero o so o resultado agora como ele faz isso pouco me importa
const getNota = (aluno) => aluno.nota;
const soma = (total, atual) => total + atual;
const total2 = alunos.map(getNota).reduce(soma);
console.log(total2 / alunos.length);

// select codigo, nome, email from clientes where ativo = 1
