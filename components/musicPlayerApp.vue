<template>
    <div class="absolute ml-[15vw] top-10 h-4/5 w-[70vw] bg-gray-600 rounded-md bg-opacity-90 z-30 p-3">

        <!--bar for closure-->
        <controlBar component="music" />

        <!--album covers-->
        <div class="flex mt-2">
            <div @click="play('thirsty')" class=" text-white" id="album 1">
                <img class=" w-[15vw] h-[15vw] object-cover" src="https://64.media.tumblr.com/13269df25ca07f881e7a84d46f64be32/73e4b9b3628ee176-b7/s1280x1920/43c6be5a927878cfb76025235a9c1a104a8d3338.jpg" />
                <p class=" font-bold">Thirsty</p>
                <p>aespa</p>
            </div>

            <div @click="play('touchdown')" class=" text-white ml-5" id="album 1">
                <img class=" w-[15vw] h-[15vw] object-cover" src="https://abs.twimg.com/sticky/default_profile_images/default_profile.png" />
                <p class=" font-bold">Touch down</p>
                <p>unknown</p>
            </div>
        </div>
        
        <!--music control bar-->
        <div class=" h-20 border-t-4 border-t-white w-[68vw] absolute bottom-0">

        </div>
    </div>
</template>

<script setup>
function play(input){
    new Audio(`../_nuxt/media/${input}.mp3`).play()
}
</script>
