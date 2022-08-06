<template>
    <div>
        <b-card v-for="day in data" :key="day.day">
            <b-title>
                Day {{ day.day }}
            </b-title>
        </b-card>
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
</style>