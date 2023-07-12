<template>
  <div class=" absolute z-0 grid w-full justify-center">
    <h1 class=" text-8xl text-white" id="special-font">{{hour}}:{{minute}}</h1>
    <p class=" text-white text-xl font-thin mt-2 text-center">{{ date }}, {{ weekday }}</p>
  </div>
</template>

<script setup>
import {ref} from 'vue'

//list of days
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//initializing value
const hour = ref(0)
const minute = ref(0)
const date = ref(0)
const weekday = ref(0)

//changing value
function timer(){
    var d = new Date()
    date.value = d.getMonth() + 1 + "-" + d.getDate() + "-" + d.getFullYear()
    hour.value = d.getHours()
    minute.value = d.getMinutes()
    weekday.value = days[d.getDay()]

    if (minute.value < 10){
      minute.value = "0" + minute.value
    }
}

//changing the value every second
setInterval(timer,1000)
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Share+Tech+Mono');

#special-font{
  font-family:"Share Tech Mono", sans-serif
}
</style>