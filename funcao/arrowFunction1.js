let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // return ja vem padrão
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá' // Parametro  TP 1º ()
ola = _ => 'Olá' // Paramentro TP 2º _

console.log(ola())