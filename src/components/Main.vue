<template>
    <div>
        <header class="header h1">
            <b-link style="color:black; text-decoration: none;" href="https://instagram.com/nightcaps.keycaps" target="_blank">
                Nightcaps
            </b-link>
            Poisoned Summer 6 (2022)
        </header>
        <b-row class="m-4" style="background-color: lightgrey;">
            <b-card class="col-lg-2 shadow-lg" v-for="day in data" :key="day.day">
                <b-card-title>
                    Day {{ day.day }}
                </b-card-title>
                <b-card-text>
                    <a :href="day.link" target="_blank">link</a>
                </b-card-text>
            </b-card>
        </b-row>
    </div>
</template>

<script>
import axios from 'axios'; 

export default {
  name: 'MainPage',
  props: {
    msg: String
  },
  data() {
    return {
        data: null
    }
  },
  mounted() {
    axios
        .get('https://raw.githubusercontent.com/sillypears/ps6-stuff/main/ps6.json')
        .then(response => (this.data = response.data))
  }
}
</script>

<style>
html {
    background-color: lightgrey;
}
b-link {
    text-decoration: none;
    color:black;
}
</style>