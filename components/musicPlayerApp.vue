<template>
    <div class="absolute ml-[15vw] top-10 h-4/5 w-[70vw] bg-gray-600 rounded-md bg-opacity-90 z-30 p-3">

        <!--bar for closure-->
        <controlBar component="music" />

        <button @click="play()">hi queen</button>

        <div class=" " id="album 1">
            <img class=" w-[20vw] h-[20vw] object-cover" src="https://64.media.tumblr.com/13269df25ca07f881e7a84d46f64be32/73e4b9b3628ee176-b7/s1280x1920/43c6be5a927878cfb76025235a9c1a104a8d3338.jpg" />

        </div>
    </div>
</template>

<script setup>
function play(){
    new Audio("../_nuxt/media/thirsty.mp3").play()
}
</script>

