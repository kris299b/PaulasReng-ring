<template>
    <section class="relative h-screen flex flex-col items-center py-20 text-center content-start text-white">
        <div class="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
            <video class="min-w-full min-h-full absolute object-cover"
                src="../assets/herovideo.mp4"
                type="video/mp4" autoplay muted loop>
            </video>
        </div>
        <div class="video-content z-10 pt-20 lg:pt-32">
            <p class="text-white text-1xl md:text-2xl lg:text-sm">PROFESSIONEL RENGØRING</p>
            <h2 class="text-white text-3xl md:text-6xl lg:text-4xl py-1">MED DIG SOM KUNDE I CENTRUM</h2>
            
            <div class="flex flex-col text-sm pt-5 lg:flex-row lg:space-x-4 lg:justify-center lg:text-sm lg:pt-5">
                <button class="bg-stone-500 hover:stone-500 text-white font-semibold py-2 px-8 rounded-full">
                    JEG TILBYDER
                </button>
                <button class="bg-transparent hover:bg-transparent border-2 text-white font-semibold py-2 px-8 rounded-full">
                    KONTAKT MIG
                </button>
            </div>
        </div>
    </section>
</template>

<style>

</style>

<script setup>

</script>