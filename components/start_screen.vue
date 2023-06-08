<template>
  <div class=" h-screen w-screen backdrop-blur-sm bg-white bg-opacity-20 grid -z-10">
    <div class=" self-center object-center justify-center">
      <div class=" loader ml-auto mr-auto"></div>
      <br />
      <h1 class=" text-5xl text-center special-text font-sans">L O A D I N G</h1>
    </div>
  </div>
</template>

<style>
.loader {
  border-radius: 50%;
  box-shadow: #30fff8 0px -3px 10px;
  width: 80px;
  height: 80px;
  animation: spinner 4s linear infinite;
}

.special-text{
  background: -webkit-linear-gradient(#eee, rgb(246, 246, 246,0.08));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@keyframes spinner {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>