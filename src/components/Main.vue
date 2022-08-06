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
import ps6data from "../data/ps6.json"

export default {
  name: 'MainPage',
  props: {
    msg: String
  },
  data() {
    return {
        data: ps6data
    }
  }
}
</script>

<style>
html {
    background-color: lightgrey;
}
</style>