<template>
  <div id="app">
    <MainPage />
  </div>
</template>

<script>
import MainPage from './components/Main.vue'

export default {
  name: 'App',
  components: {
    MainPage
  }
}
</script>

<style>
@import url('http://fonts.cdnfonts.com/css/bebas-neue?styles=17620');

#app {
  font-family: 'Bebas Neue', sans-serif;
  font-size: larger;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
    background-color: lightgrey;
}

</style>
