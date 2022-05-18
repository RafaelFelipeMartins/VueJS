new Vue({
    el: '#desafio',
    data: {
        valor: 'teste'
    },
    methods: {
        exibirAlerta(){
            alert('DANCA GATINHO... .DANCA!!!')
        },
        telaPa(){
            alert('Uma tecla foi apertada')
        },
        enter(){
            alert('A tecla enter foi pressionada')
        },
        alternarValor1(event){
            this.valor = event.target.value
        },
        alternarValor2(event){
            this.valor = event.target.value
        }
    }
})