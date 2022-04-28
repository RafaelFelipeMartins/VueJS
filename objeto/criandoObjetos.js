// Usando a notação literal
const obj1 = {};

// Object em JS
console.log(typeof Object, typeof new Object());
const obj2 = new Object();
console.log(obj2);

// Funções construtoras
function Produto(nome, preco, desc) {
    this.nome = nome;
    this.getPrecoCOmDesconto = () => {
        return (preco = 1 - desc);
    };
}

const p1 = new Produto("Caneta", 7.99, 0.15);
const p2 = new Produto("Notebook", 2998.99, 0.25);
console.log(p1.getPrecoCOmDesconto(), p2.getPrecoCOmDesconto());

// Função Factory -> padrão de projeto
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas);
        },
    };
}

const f1 = criarFuncionario("Jão", 7980, 4);
const f2 = criarFuncionario("Maria", 11400, 1);
console.log(f1.getSalario(), f2.getSalario());

// Object.create
const filha = Object.create(null);
filha.nome = "Ana";
console.log(filha);

// Um fanção que retorna um OBJ
const fromJSON = JSON.parse('{"info": "Sou JSON"}');
console.log(fromJSON.info);
