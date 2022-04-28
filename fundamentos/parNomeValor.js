// par nomeValor
const saudacao = 'opa' // contxto léxico 1

function exec() {
    const saudacao = 'Falaa' // contexto léxico 2
    return saudacao
}

// Objeto são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Dr Danilo Gomes',
        numero: 1846
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)