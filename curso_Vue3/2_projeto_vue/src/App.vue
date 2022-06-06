<template>
  <div>
    <PrimeiroComponente />
    <P>O dado de app é: {{ testando }}</P>
  </div>
</template>

<script>
  import PrimeiroComponente from './components/PrimeiroComponente.vue'
  import LifeCycle from './components/LyfeCycle.vue'

  export default {
    name: 'App',
    components: {
      PrimeiroComponente,
      LifeCycle
    },
    data() {
      return {
        testando:  "teste "
      }
    }
  }
</script>
