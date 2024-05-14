<template>

<!-- Hero section -->
<section class="relative h-screen flex flex-col items-center py-20 text-center content-start md:h-[40vh] lg:h-[80vh]">
    <div class="heroimage absolute top-0 left-0 w-full h-full overflow-hidden">
        <img class="min-w-full min-h-full absolute object-cover" src="../assets/prisætning.jpg" alt="Prisætning">
    </div>
    <div class="image-content z-10 pt-40 md:pt-40 lg:pt-40">
        <div>
            <p class="font-sans text-white dark:text-white text-lg text-left px-4 md:text-center md:text-lg lg:text-md lg:text-left lg:pb-1 lg:px-5 lg:tracking-wider">PAULAS RENGØRING | PRIS</p>
            <h2 class="font-sans text-white dark:text-white text-4xl text-left px-4 md:font-semibold md:text-center md:text-4xl lg:pb-2 lg:font-semibold lg:text-5xl">Prissætning af ydelser</h2>
        </div>
    </div>
</section>

<!-- Pris sektion -->
<div class="bg-white dark:bg-white light:bg-white flex flex-col justify justify-center h-1/2 w-full p-8 md:pt-20 md:flex-row lg:flex-row lg:w-full lg:pt-20 lg:pb-20">
    <div class="md:w-1/2 lg:w-2/5">
        <img src="../assets/Paulasrengøring-pris-billede.jpg" alt="Paulas-rengøring-pris-billede">
    </div>
    <div class="bg-lightgray p-4 md:p-6 md:w-1/2 md:pt-5 lg:w-2/5 lg:px-12">
        <p class="text-gray dark:gray text-xs pt-5 font-semibold pb-2 lg:pt-12 lg:text-sm lg:tracking-wider">PAULAS RENGØRING | PRIS</p>
        <h2 class="text-black dark:text-black text-2xl font-semibold pb-4 lg:text-4xl">PAULAS RENGØRING </h2>
        <p class="text-black dark:text-black text-sm font-semibold pb-4 md:font-semibold lg:text-base lg:pt-1">There are many variations of passages of Lorem Ipsum available, but the majority. So if you know many variations of passages of Lorem Ipsum. </p>
        <p class="text-black dark:text-black text-lg pb-2 font-semibold md:font-semibold md:pt-4 md:text-lg lg:font-semibold lg:text-lg lg:pt-4">Timepris</p>
        <p class="text-black dark:text-black text-sm pb-4 md:pt-2 lg:text-base lg:pt-1">There are many variations of passages of Lorem Ipsum available, but the majority. So if you know many variations of passages of Lorem Ipsum. </p>
        <p class="text-black dark:text-black text-2xl font-semibold md:pt-4 md:text-3xl lg:font-semibold lg:text-3xl lg:pt-4">280 kr</p>
        <p class="text-black dark:text-black pb-5 text-sm lg:text-base lg:pt-0">Ekskl. moms</p>
    </div>
</div>

<!-- Om sektion -->
<div class="bg-white dark:bg-white light:bg-white flex justify justify-center h-20 pt-4 md:pt-10">
    <h2 class="font-sans text-2xl text-black pt-0 pb-2 font-semibold md:pb-0 md:font-semibold md:text-3xl md:px-20 md:text-center lg:pt-0 lg:pb-5 lg:text-black lg:text-3xl lg:font-semibold lg:text-center">Dit Lokale rengøringsfirma</h2>
</div>

<div class="bg-white dark:bg-white light:bg-white flex flex-col justify justify-center h-1/2 w-full p-8 pb-20 md:pb-20 md:flex-row lg:flex-row lg:w-full lg:pb-16">
    <div class="bg-lightgray p-4 pt-2 md:p-6 md:pb-0 md:w-1/2 lg:w-2/5 lg:px-12">
        <p class="text-gray dark:gray text-xs pt-5 font-semibold pb-2 md:pt-2 lg:pt-8 lg:text-sm lg:tracking-wider">PAULAS RENGØRING | OM MIG</p>
        <h2 class="text-black dark:text-black text-2xl font-semibold pb-4 lg:pb-6 lg:text-3xl">Jeg værdsætter tillid og tryghed, i det samarbejde jeg indgår med mine kunder </h2>
        <p class="text-black dark:text-black text-sm lg:text-base">Personligt betyder by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need. </p>
        <p class="text-black dark:text-black text-sm lg:text-base lg:pt-5">There are many variations of passages of Lorem Ipsum available, but the majority. So if you know many variations of passages of Lorem Ipsum. </p>
        <div class="row pt-6 pb-4 md:flex lg:flex lg:pt-8 lg:pb-0">
            <div class="py-3 md:py-0 md:pr-3 lg:pt-0 lg:pr-3">
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
        <img src="../assets/Paulasrengøring-om-billede.jpg" alt="Paulas-rengøring-om">
    </div>
</div>

    
</template>

<style>

</style>

<script setup>

</script>