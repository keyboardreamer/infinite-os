<template>
  <div>
    <start_screen v-if="mode === 'start'" />
    <timer class=" font-thin top-20 mx-auto"  v-if="mode === 'operating' && components.includes('timer')"/>
    <navbar class=" mb-5 bottom-2 fixed" v-if="mode === 'operating'"/>
    <MusicWidget v-if="components.includes('musicWidget')"></MusicWidget>
    <CommandLineApp v-if="components.includes('cli')"></commandLineApp>
    <musicPlayerApp v-if="components.includes('music')"></musicPlayerApp>
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
