new Vue({
    el: "#desafio",
    data: {
        idade: '21',
        imgLink : 'https://aventurasnahistoria.uol.com.br/media/_versions/arqueologia/crocodilo_do_nilo_widelg.jpg',
        nome: 'Rafael'
    },
    methods: {
        idadeMult(){
           const result = this.idade * 3
           return result
        },
        random(min, max){
            const num = Math.floor(Math.random() * 10)
            return num
        },
        mudaNome(event){
            this.nome = event.target.value
        }
    }
})