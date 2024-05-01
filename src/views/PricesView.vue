<template>

<!-- Hero section -->
<section class="relative h-screen flex flex-col items-center py-20 text-center content-start">
    <div class="heroimage absolute top-0 left-0 w-full h-full overflow-hidden">
        <img class="min-w-full min-h-full absolute object-cover" src="../assets/prisætning.jpg" alt="Prisætning">
    </div>
    <div class="image-content z-10 pt-40 md:pt-80 lg:pt-48">
        <div>
            <p class="font-sans text-white dark:text-white text-1xl md:text-xl lg:text-md lg:pb-1 lg:tracking-wider">PAULAS RENGØRING | PRIS </p>
            <h2 class="font-sans text-white dark:text-white px-5 text-3xl md:text-4xl lg:pb-2 lg:font-semibold lg:text-5xl">Prissætning af ydelser</h2>
        </div>
    </div>
</section>

<!-- Pris sektion -->
<div class="bg-white dark:bg-white columns-1 md:cols-1 lg:columns-2 lg:gap-x-0 lg:pt-20 lg:pb-3 lg:p-40">
    <div class="inline-block md:hidden lg:inline-block">
        <img src="../assets/værdisæt-billede.jpg" alt="Værdisæt">
    </div>
    <div class="bg-lightgray md:pt-2 dark:bg-lightgray text-gray dark:text-gray">
        <div class="lg:pt-10">
            <p class="pt-10 pl-10 text-gray dark:text-gray font-semibold lg:pl-10">
                PAULAS RENGØRING | PRIS
            </p>
            <h2 class="text-gray dark:text-gray font-semibold lg:text-2xl lg:pl-10 lg:pt-2">
                PAULAS RENGØRING
            </h2>
            <h2 class="pt-10 pl-10 text-gray dark:text-gray font-normal lg:pt-5 lg:text-lg lg:font-semibold">
                Timepris
            </h2>
            <p class="pt-10 pl-10 text-gray dark:text-gray font-normal lg:pt-2 lg:pr-10">
                By injected humour, or randomised words which don't look even slightly 
                believable. If you are going to use a passage of Lorem Ipsum, you need
                 Lorem ipsum to do that.
            </p>
            <h2 class="pt-10 pl-10 text-gray dark:text-gray font-normal lg:pt-5 lg:text-2xl lg:font-semibold">
                280 kr
            </h2>
            <p class="pt-10 pl-10 text-gray dark:text-gray font-normal lg:pt-0 lg:pr-10 lg:text-sm lg:font-semibold">
                Ekskl. moms
            </p>
        </div>
        <div class="lg:pl-10 lg:pt-10 lg:pb-24">
            <RouterLink to="contact"> 
                <button class="flex bg-darkblue dark:bg-darkblue text-lightgray dark:text-lightgray py-2 px-6 hover:beige font-semibold lg:py-3 lg:px-8 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 lg:w-6 lg:h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                    <p class="hidden md:inline-block lg:inline-block lg:pl-2">Lad os tage en udforpligtende snak</p>
                </button>
            </RouterLink> 
        </div>
    </div>
</div>

<!-- Samarbejde sektion -->
<div class="bg-white dark:bg-white lg:pt-10">
    <h2 class="text-center text-lg pt-10 pb-5 font-semibold text-black dark:text-black lg:font-semibold lg:text-3xl lg:text-center lg:pt-10">
        Tillidsfuldt og trygt samarbejde
    </h2>
</div>

<div class="bg-white dark:bg-white columns-1 md:gap-x-0 md:columns-2 lg:columns-2 lg:gap-x-0 lg:pt-5 lg:pb-24">
    <div class="bg-lightgray dark:bg-lightgray px-5 lg:px-10">
        <p class="font-sans text-gray dark:gray text-sm pt-8 md:px-2 md:pt-7 lg:text-sm lg:font-semibold lg:pt-16 lg:tracking-wider">PAULAS RENGØRING | OM MIG</p>
        <h2 class="font-sans text-black dark:text-black pr-10 text-2xl font-semibold mt-3 pb-3 md:px-2 lg:text-3xl lg:font-semibold lg:pt-0">Jeg værdsætter tillid og tryghed, i det samarbejde jeg indgår med mine kunder.</h2>
        <p class="font-sans text-black dark:text-black pb-3 md:px-2 md:text-xs lg:text-sm lg:pt-3 lg:pr-20 lg:font-semibold">
            Personligt betyder by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need. 
        </p>
        <p class="font-sans text-black dark:text-black pb-8 md:px-2 md:text-xs lg:text-sm lg:pt-1 lg:pr-20 lg:pb-10">There are many variations of passages of Lorem Ipsum available, but the majority. So if you know many variations of passages of Lorem Ipsum.
        </p>
        <div class="flex">
            <div class="font-sans pb-10 md:px-2 md:pb-7 lg:pb-3">
                <RouterLink to="privatecleaning"> 
                    <button class="bg-blue dark:bg-blue text-lightgray dark:text-lightgray font-semibold py-2 px-8 md:py-1 md:px-6 lg:text-md lg:py-2 lg:px-8 rounded-full lg:text-md">
                        Privatrengøring
                    </button>
                </RouterLink>
            </div>
            <div class="font-sans pb-10 md:px-2 md:pb-7 lg:pb-16">
                <RouterLink to="commercialcleaning"> 
                    <button class="bg-blue dark:bg-blue text-lightgray dark:text-lightgray font-semibold py-2 px-8 md:py-1 md:px-6 lg:text-md lg:py-2 lg:px-8 rounded-full lg:text-md">
                        Erhvervsrengøring
                    </button>
                </RouterLink>
            </div>
        </div>
    </div>
    <div class="pt-10 md:pt-0 lg:pt-0">
        <img src="../assets/Guide-billede.jpg" alt="Samarbejde-billede">
    </div>
</div>

    
</template>

<style>

</style>

<script setup>

</script>