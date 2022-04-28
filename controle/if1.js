function soBoaNoticia(nota) {
    if (nota >= 7) {
        console.log(`Aprovas ${nota}`)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(2.5)

function seForVerdadeEuFalo(valor){
    if(valor){
        console.log('É verdade...' + valor)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(true)
seForVerdadeEuFalo(false)
seForVerdadeEuFalo(12)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1,2])
seForVerdadeEuFalo({})