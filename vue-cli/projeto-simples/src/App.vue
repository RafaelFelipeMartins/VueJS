<template>
  <div id="app">
    {{ titulo }}
    <button @click="titulo += '#'">Botão</button>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        titulo: 'Tst data'
      }
    }
  }
</script>

<style>
  #app {
    background-color: blueviolet;
    color: rgb(255, 255, 255);
    margin: 0px;
    padding: 10px;
  }
</style>