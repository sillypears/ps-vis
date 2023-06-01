<template>
  <div id="container">

    <b-navbar id="navbar" type="dark" variant="dark">
      <b-navbar-brand href="#"><img src="./assets/etf-dark.png" height="40px" /></b-navbar-brand>
      <b-navbar-nav>
        <b-nav-item href="https://www.instagram.com/p/BZUlaw0g1vr/" target="_blank">
          PS1
        </b-nav-item>
        <b-nav-item href="#" target="_blank">
          PS2
        </b-nav-item>
        <b-nav-item href="https://www.instagram.com/p/B0By3RwnSKm/" target="_blank">
          PS3
        </b-nav-item>
        <b-nav-item href="https://www.instagram.com/p/CA6MS6OnWyU/" target="_blank">
          PS4
        </b-nav-item>
        <b-nav-item href="https://www.instagram.com/p/CQzaJt3H3ly/" target="_blank">
          PS5
        </b-nav-item>
        <b-nav-item href="https://www.instagram.com/p/CfffCSbLkJ7/" target="_blank">
          PS6
        </b-nav-item>
        <b-nav-item href="https://www.instagram.com/p/CfffCSbLkJ7/" target="_blank" disabled>
          PS7
        </b-nav-item>
        <b-nav-item href="https://imgur.com/a/uB49rye" target="_blank">
          Menus
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <div id="app">
      <MainPage />
    </div>
    <footer class="footer text-right">
      <a class="text-right" href="https://github.com/sillypears/ps-vis/" target="_blank" title="Hello Github" alt="Link to github repo">
        <img src="./assets/octocat.png" height="40px" />
      </a>
    </footer>
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
@import url('https://fonts.cdnfonts.com/css/bebas-neue?styles=17620');

#container {
  background-color: lightgray;
}

#app {
  font-family: 'Bebas Neue', sans-serif;
  font-size: larger;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: lightgrey;
}
</style>
