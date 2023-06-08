<template>
  <div class=" absolute z-30 text-center">
    <h1 class=" text-8xl text-white text-shadow font-semibold">{{hour}}:{{minute}}</h1>
    <p class=" text-white text-xl font-normal mt-2">{{ date }}, {{ weekday }}</p>
  </div>
</template>

<script setup>
import {ref} from 'vue'

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const hour = ref(0)
const minute = ref(0)
const date = ref(0)
const weekday = ref(0)

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

setInterval(timer,1000)
</script>

<style>
.text-shadow{
    text-shadow: 5px 5px 10px rgba(101, 178, 181, 0.3);
}
</style>