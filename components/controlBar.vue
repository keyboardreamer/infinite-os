<template>
    <div class="  h-8 w-full flex text-white justify-between items-center" id="control bar">
        <p class=" font-bold">{{ props.component }}</p>
        <div class="flex items-center" id="control">

            <!--minimize button-->
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke='#ffffff' stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            
            <!--full screen button-->
            <svg class=" ml-2" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>
            
            <!--exit button-->
            <svg @click="removeComponent()" class="ml-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'
import {useStore} from '../stores/db.js'

const store = useStore()
const props = defineProps({component:String,theme:String})

//remove component from the store
function removeComponent(){
    store.components = store.components.filter(item => item !== props.component)
}

</script>