<template>
  <div>
    <PrimeiroComponente />
    <p>O dado de app é: {{ testando }}</p>
    <LyfeCycle />
    <Form />
  </div>
</template>

<script>
  import PrimeiroComponente from './components/PrimeiroComponente.vue'
  import LyfeCycle from './components/LyfeCycle.vue'
  import Form from './components/Form.vue'

 

  export default {
    name: 'App',
    components: {
      PrimeiroComponente,
      LyfeCycle,
      Form
     
   
    },
    data() {
      return {
        testando:  "teste "
      }
    }
  }
</script>
