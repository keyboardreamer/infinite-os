<template>
    <div class="absolute ml-[25vw] top-10 h-4/5 w-[50vw] bg-gray-800 bg-opacity-90 z-30 p-3 overflow-y-scroll">

        <!--controling the size, closure of the app-->
        <ControlBar component="cli"/>

        <!--showing all the input and responses-->
        <div v-for="input in inputs" class=" text-white mt-" :key="input.key">
            <span class=" text-gray-500">:C/</span> {{ input.input }}
            <p>{{ input.response }}</p>
        </div>

        <!--input field-->
        <div class=" flex text-white items-center">
            <p>:C/</p>
            <input class="text-white w-full p-2 bg-transparent" placeholder=" write here" v-model="input" @keypress.enter="addCommand"/>
        </div>

    </div>
</template>

<script setup>
import {ref} from 'vue'

const input = ref()
const inputs = ref([])

const commandList = [
    {keyword:"help",response:"You could try these commands, time(for showing you the time). more(for showing more details for the product),help(for searching commands),echo(for repeating what u said)"},
    {keyword:"time",response:new Date()},
    {keyword:"echo",response:"echo"},
    {keyword:"more",response:"hello, this is a website developed by naffis and this website is just for fun hehe"}
]

function addCommand(){

    //check for the response
    commandList.forEach((command)=>{
        if (command.keyword.includes(input.value)){
            inputs.value.push({
                input:input.value,
                response:command.response,
                key:Math.round(Math.random()*10000)
            })

            console.log(inputs)

            return inputs.value;
        }
    })

    //if nothing happens
    inputs.value.push({
                input:input.value,
                response:"",
                key:Math.round(Math.random()*10000)
    })

    //empty the input
    input.value = ""
}
</script>