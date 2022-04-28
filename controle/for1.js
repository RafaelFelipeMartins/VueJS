function contadorP(contador){
    while(contador <= 10){
        console.log(`Contador = ${contador}`)
        contador++
    }
}

function FOR(i,n){
    for (let i = i;i <= n; i++){
        console.log(`i = ${i}`)
    }
}

const notas = [6, 5, 3, 4, 8]

for(let i = 0; i < notas.length; i++){
    console.log(`Notas = ${notas[i]}`)
}
