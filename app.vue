<template>
  <div>
    <start_screen v-if="filter('start_screen')" />
    <timer class=" font-thin top-20 mx-auto"  v-if="filter('timer')"/>
    <navbar class=" mb-5 bottom-2 fixed" v-if="filter('navbar')"/>
    <MusicWidget v-if="mode === 'operating' && filter('musicWidget')"></MusicWidget>
    <CommandLineApp v-if="filter('cli')"></commandLineApp>
    <musicPlayerApp v-if="filter('music')"></musicPlayerApp>
  </div>
</template>

<script setup>
import {useStore} from './stores/db.js'
import {storeToRefs} from 'pinia'

//initializing the value
const store = useStore()
const {mode, components} = storeToRefs(store)

//removing the start screen
setTimeout(()=>{
  mode.value = 'operating'
},1000)

//this function will determine which item should be shown and which should not
function filter(input){
  if (input === 'start_screen'){
    return mode.value === 'start'
  }

  else{
    if (input === 'navbar'){
      return mode.value === 'operating'
    }

    return mode.value === 'operating' && components.value.includes(input)
  }
}

//giving the page a title
useHead({
  title:'infinite-os 1.0'
})
</script>

<style>
body{
  background-image: url('./media/3dbg.jpg');
  background-size: cover;
}
</style>
