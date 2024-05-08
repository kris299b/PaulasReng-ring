<template>

<!-- Hero section -->
<section class="relative h-screen flex flex-col items-center py-20 text-center content-start lg:h-[80vh]">
    <div class="heroimage absolute top-0 left-0 w-full h-full overflow-hidden">
        <img class="min-w-full min-h-full absolute object-cover" src="../assets/prisætning.jpg" alt="Prisætning">
    </div>
    <div class="image-content z-10 pt-40 md:pt-80 lg:pt-40">
        <div>
            <p class="font-sans text-white dark:text-white text-1xl md:text-xl lg:text-md lg:pb-1 lg:tracking-wider">PAULAS RENGØRING | PRIS </p>
            <h2 class="font-sans text-white dark:text-white px-5 text-3xl md:text-4xl lg:pb-2 lg:font-semibold lg:text-5xl">Prissætning af ydelser</h2>
        </div>
    </div>
</section>

<!-- Pris sektion -->
<div class="bg-white light:bg-white dark:bg-white gap-x-0 pt-20 columns-1 md:columns-2 lg:columns-2 lg:gap-x-0 lg:pt-20 lg:pb-3 lg:p-40">
    <div class="inline-block md:inline.block lg:inline-block">
        <img src="../assets/Paulasrengøring-pris-billede.jpg" alt="Pris-billede">
    </div>
    <div class="bg-lightgray pb-10 md:pt-2 dark:bg-lightgray text-black dark:text-black">
        <div class="lg:pt-10">
            <p class="pt-10 pl-10 font-semibold lg:pl-10">
                PAULAS RENGØRING | PRIS
            </p>
            <h2 class="font-semibold text-2xl pl-10 lg:text-2xl lg:pl-10 lg:pt-2">
                PAULAS RENGØRING
            </h2>
            <h2 class="pt-10 pl-10 text-2xl font-semibold lg:pt-5 lg:text-lg lg:font-semibold">
                Timepris
            </h2>
            <p class="pt-2 pl-10 pr-10 text-sm md:text-sm font-normal lg:pt-2 lg:pr-10">
                By injected humour, or randomised words which don't look even slightly 
                believable. If you are going to use a passage of Lorem Ipsum, you need
                 Lorem ipsum to do that.
            </p>
            <h2 class="pt-10 pl-10 text-3xl font-semibold lg:pt-5 lg:text-3xl lg:font-semibold">
                280 kr
            </h2>
            <p class="pt-0 pl-10 pb-10 text-sm font-semibold lg:pt-0 lg:pr-10 lg:text-sm lg:font-semibold">
                Ekskl. moms
            </p>
        </div>
    </div>
</div>

<!-- Om sektion -->
<div class="bg-white dark:bg-white light:bg-white flex justify justify-center h-20 pt-6 md:h-24 md:pt-10">
    <h1 class="text-black font-semibold text-base md:text-lg lg:text-3xl">Dit Lokale rengøringsfirma</h1>
</div>

<div class="bg-white dark:bg-white light:bg-white flex flex-col justify justify-center h-1/2 w-full p-8 md:flex-row lg:flex-row lg:w-full lg:pb-20">
    <div class="bg-lightgray p-4 md:p-6 md:w-1/2 lg:w-2/5 lg:px-12">
        <p class="text-gray dark:gray text-xs pt-5 font-semibold pb-2 lg:pt-10 lg:text-sm lg:tracking-wider">PAULAS RENGØRING | OM MIG</p>
        <h2 class="text-black dark:text-black text-2xl font-semibold pb-4 lg:text-2xl">Jeg værdsætter tillid og tryghed, i det samarbejde jeg indgår med mine kunder </h2>
        <p class="text-black dark:text-black text-sm lg:text-base">Personligt betyder by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need. </p>
        <p class="text-black dark:text-black text-sm lg:text-base lg:pt-5">There are many variations of passages of Lorem Ipsum available, but the majority. So if you know many variations of passages of Lorem Ipsum. </p>
        <div class="row pt-4 pb-4 md:flex lg:flex lg:pt-8">
            <div class="md:pr-3 lg:pt-0 lg:pr-3">
                <RouterLink to="privatecleaning"> 
                    <button class="bg-blue dark:bg-blue hover:bg-darkblue text-lightgray dark:text-lightgray font-semibold py-2 px-8 md:py-1 md:px-4 md:py-1 md:px-6 lg:text-md lg:py-2 lg:px-8 rounded-full lg:text-md">
                        Privatrengøring
                    </button>
                </RouterLink> 
            </div>
            <div class="lg:pt-0">
                <RouterLink to="commercialcleaning"> 
                    <button class="bg-blue dark:bg-blue hover:bg-darkblue text-lightgray dark:text-lightgray font-semibold py-2 px-8 md:py-1 md:px-4 md:py-1 md:px-6 lg:text-md lg:py-2 lg:px-8 rounded-full lg:text-md">
                        Erhvervsrengøring
                    </button>
                </RouterLink>
            </div>
        </div>
    </div>
    <div class="md:w-1/2 lg:w-2/5">
        <img src="../assets/Paulasrengøring-om-billede.jpg" alt="Kvinde der smiler">
    </div>
</div>


    
</template>

<style>

</style>

<script setup>

</script>