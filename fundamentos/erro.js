function tratarErroELancar(erro){
    //throw new Error('EUPAAAA...!!!')
    //throw 10
    //throw true
    //throw 'msm'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e){
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }
}

const obj = {nome: 'Robertin'}
imprimirNomeGritado(obj)