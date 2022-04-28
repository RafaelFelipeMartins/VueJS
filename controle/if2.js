function teste1(num) {
    if(num > 7){
        console.log(num)
    console.log('Final')
    }
}

//teste1(6)
//teste1(8)
function testeErro(erro){
    throw{
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}


function teste2(num) {
    if (num > 7) {
        try{
            console.log('O numero digitado foi: '+ num)
        } catch (t){
            testeErro(t)
        } finally {
            console.log('Teste')
        }
    }
}

teste2(5)
teste2(10)