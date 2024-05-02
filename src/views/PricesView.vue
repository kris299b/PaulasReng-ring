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
<div class="bg-white light:bg-white dark:bg-white columns-2 gap-x-0 pt-20 md:cols-1 lg:columns-2 lg:gap-x-0 lg:pt-20 lg:pb-3 lg:p-40">
    <div class="inline-block md:inline.block lg:inline-block">
        <img src="../assets/værdisæt-billede.jpg" alt="Værdisæt">
    </div>
    <div class="bg-lightgray pb-10 md:pt-2 dark:bg-lightgray text-gray dark:text-gray">
        <div class="lg:pt-10">
            <p class="pt-10 pl-10 text-gray dark:text-gray font-semibold lg:pl-10">
                PAULAS RENGØRING | PRIS
            </p>
            <h2 class="text-gray dark:text-gray font-semibold text-2xl pl-10 lg:text-2xl lg:pl-10 lg:pt-2">
                PAULAS RENGØRING
            </h2>
            <h2 class="pt-10 pl-10 text-gray text-2xl dark:text-gray font-semibold lg:pt-5 lg:text-lg lg:font-semibold">
                Timepris
            </h2>
            <p class="pt-2 pl-10 pr-10 text-gray dark:text-gray font-normal lg:pt-2 lg:pr-10">
                By injected humour, or randomised words which don't look even slightly 
                believable. If you are going to use a passage of Lorem Ipsum, you need
                 Lorem ipsum to do that.
            </p>
            <h2 class="pt-10 pl-10 text-gray text-3xl dark:text-gray font-semibold lg:pt-5 lg:text-3xl lg:font-semibold">
                280 kr
            </h2>
            <p class="pt-0 pl-10 pb-10 text-gray dark:text-gray font-semibold lg:pt-0 lg:pr-10 lg:text-sm lg:font-semibold">
                Ekskl. moms
            </p>
        </div>
    </div>
</div>

<!-- Samarbejde sektion -->
<div class="bg-white light:bg-white dark:bg-white lg:pt-10">
    <h2 class="text-center text-2xl pt-10 pb-5 font-semibold text-black dark:text-black lg:font-semibold lg:text-3xl lg:text-center lg:pt-10">
        Tillidsfuldt og trygt samarbejde
    </h2>
</div>

<div class="bg-white light:bg-white  dark:bg-white columns-1 pb-20 md:gap-x-0 md:columns-2 lg:columns-2 lg:gap-x-0 lg:pt-5 lg:pb-24">
    <div class="pt-10 md:pt-0 lg:pt-0 inline-block md:hidden lg:hidden">
        <img src="../assets/Guide-billede.jpg" alt="Samarbejde-billede">
    </div>
    <div class="bg-lightgray light:bg-lightgray dark:bg-lightgray px-5 lg:px-10">
        <p class="font-sans text-gray dark:gray text-sm pt-8 md:px-2 md:pt-7 lg:text-sm lg:font-semibold lg:pt-16 lg:tracking-wider">PAULAS RENGØRING | OM MIG</p>
        <h2 class="font-sans text-black dark:text-black pr-10 text-2xl font-semibold mt-3 pb-3 md:px-2 lg:text-3xl lg:font-semibold lg:pt-0">Jeg værdsætter tillid og tryghed, i det samarbejde jeg indgår med mine kunder.</h2>
        <p class="font-sans text-black dark:text-black pb-3 md:px-2 md:text-xs lg:text-sm lg:pt-3 lg:pr-20 lg:font-semibold">
            Personligt betyder by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need. 
        </p>
        <p class="font-sans text-black dark:text-black pb-8 md:px-2 md:pb-19 md:text-xs lg:text-sm lg:pt-1 lg:pr-20 lg:pb-10">
            There are many variations of passages of Lorem Ipsum available, but the majority. So if you know many variations of passages of Lorem Ipsum.
        </p>
        <div class="row md:row lg:flex">
            <div class="font-sans pb-4 md:px-2 md:pb-7 lg:pb-3">
                <RouterLink to="privatecleaning"> 
                    <button class="bg-blue dark:bg-blue text-lightgray dark:text-lightgray font-semibold py-2 px-8 md:py-1 md:px-4 md:py-1 md:px-6 lg:text-md lg:py-2 lg:px-8 rounded-full lg:text-md">
                        Privatrengøring
                    </button>
                </RouterLink>
            </div>
            <div class="font-sans pb-10 md:px-2 md:pb-7 lg:pb-16">
                <RouterLink to="commercialcleaning"> 
                    <button class="bg-blue dark:bg-blue text-lightgray dark:text-lightgray font-semibold py-2 px-8 md:py-1 md:px-4 md:py-1 md:px-6 lg:text-md lg:py-2 lg:px-8 rounded-full lg:text-md">
                        Erhvervsrengøring
                    </button>
                </RouterLink>
            </div>
        </div>
    </div>
    <div class="hidden md:inline-block lg:inline-block pt-10 md:pt-0 lg:pt-0">
        <img src="../assets/Guide-billede.jpg" alt="Samarbejde-billede">
    </div>
</div>

    
</template>

<style>

</style>

<script setup>

</script>