<template>
   <div>
        <h2>Esta é a descrição da pessoa: {{ nome }}</h2>
        <!-- <Info /> -->
   </div>
</template>
<script>
    // import LyfeCycle from './form/Info.vue'
    export default {
        name: 'Pessoa',
        // components: {
        //    Info
        // },
        data() {
            return {
                nome: "Rafão"
            }
        }
    }
</script>
