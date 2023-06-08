<template>
  <div>
    <start-screen v-if="mode === 'start'" />
    <timer class=" font-thin ml-[40vw] top-20 mx-auto"  v-if="mode === 'operating' && store.components.includes('timer')"/>
    <navbar class=" mb-5 bottom-2 fixed" v-if="mode === 'operating'"/>
    <commandLine v-if="store.components.includes('cli')"></commandLine>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import {useStore} from './stores/db.js'

//initializing the value
const store = useStore()
const mode = ref('')
mode.value = store.mode
const components = ref([])

//removing the start screen
setTimeout(()=>{
  store.mode = 'operating'
  mode.value = store.mode
},3000)
</script>

<style>
body{
  background-image: url('./media/3dbg.jpg');
  background-size: cover;
}
</style>
