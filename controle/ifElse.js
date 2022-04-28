const imprimirResultado = function(nota) {
    if(nota >= 7){
        console.log('O valor da nota é maior ou igual a 7: '+ nota)
    }else{
        console.log('O valor da nota é menor que 7: '+ nota)
    }
}

imprimirResultado(10)
imprimirResultado(5)
imprimirResultado('erro')