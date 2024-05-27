<template>

<!-- Hero section -->
<main>
<section class="relative flex flex-col pt-5 h-[50vh] md:h-[40vh] lg:h-[80vh]">
    <div class="heroimage absolute top-0 left-0 w-full h-full overflow-hidden">
        <img class="min-w-full h-[50vh] md:h-[40vh] lg:h-[80vh] absolute object-cover" src="../assets/Prisbillede-hero.jpg" alt="Kvinde rengør krukke med plante">
        <div class="overlay absolute top-0 left-0 w-full h-full bg-black dark:bg-black opacity-40"></div>
    </div>
    <div class="image-content z-10 pt-32 px-1 md:pt-40 lg:pt-48 lg:px-40">
        <div>
            <p class="font-sans text-white text-left pl-5 dark:text-white px-4 text-sm md:text-lg md:text-left lg:text-lg lg:text-left lg:tracking-wider">
                PAULAS RENGØRING | PRIS
            </p>
            <h2 class="font-sans text-white dark:text-white text-left font-semibold px-4 text-3xl md:text-5xl md:text-left lg:pb-2 lg:font-semibold lg:text-5xl lg:text-left">Professionel rengøring til private og erhverv</h2>
        </div>
    </div>
</section>

<!-- Pris sektion -->
<div class="bg-white dark:bg-white light:bg-white flex flex-col justify justify-center h-1/2 w-full p-8 pt-10 md:items-center md:pt-20 md:pb-10 md:flex-col lg:flex-row lg:w-full lg:pt-24 lg:pb-20">
    <div class="md:w-3/5 lg:w-2/5">
        <img src="../assets/Rengøring-pris-billede.jpg" alt="Kvinde rengør sofabord">
    </div>
    <div class="bg-lightgray p-4 md:p-6 md:w-3/5 md:pt-5 lg:w-2/5 lg:px-10">
        <p class="text-gray dark:gray text-sm tracking-wider pt-5 font-semibold pb-2 md:pt-0 lg:pt-1 lg:text-sm lg:tracking-wider">PRIS FOR YDELSER</p>
        <h2 class="text-black dark:text-black text-2xl font-semibold pb-4 lg:text-4xl">Paulas Rengøring</h2>
        <p class="text-black dark:text-black text-base font-semibold pb-4 md:font-semibold lg:text-base lg:pt-0">Hos mig får du en kvalitetsbevidsthed samarbejdspartner, med en professionel tilgang til rengøringen. Mine værdier ligger fundamentet for vores samarbejde. </p>
        <p class="text-black dark:text-black text-lg pb-2 font-semibold md:font-semibold md:pt-4 md:text-lg lg:font-semibold lg:text-xl lg:pt-1">Faste timepriser</p>
        <p class="text-black dark:text-black text-base pb-4 md:pt-0 lg:text-base lg:pt-0">Jeg kører med faste timepriser for alm. rengøring og hovedrengøring hvor vinduespudsning indgår i prisen. Du er som kunde altid garanteret topkvalitet og professionalisme hos mig.</p>
        <div class="flex flex-col md:flex-row lg:flex-row pt-2 pb-2 md:space-x-20 lg:pt-0 lg:pb-0 lg:space-x-20">
            <div class="lg:w-1/3">
                <p class="text-black dark:text-black text-2xl font-semibold md:pt-0 md:text-lg lg:font-semibold lg:text-lg lg:pt-0">Alm. rengøring</p>
                <p class="text-black dark:text-black text-2xl font-semibold md:pt-0 md:text-3xl lg:font-semibold lg:text-2xl lg:pt-1">280 kr</p>
                <p class="text-black dark:text-black pb-5 text-sm lg:text-sm lg:pt-0 lg:pb-0">Ekskl. moms</p>
            </div>
            <div class="lg:w-1/3">
                <p class="text-black dark:text-black text-2xl font-semibold md:pt-0 md:text-lg lg:font-semibold lg:text-lg lg:pt-0">Hovedrengøring</p>
                <p class="text-black dark:text-black text-2xl font-semibold md:pt-0 md:text-3xl lg:font-semibold lg:text-2xl lg:pt-1">330 kr</p>
                <p class="text-black dark:text-black pb-5 text-sm lg:text-sm lg:pt-0 lg:pb-0">Ekskl. moms</p>
            </div>
        </div>
    </div>
</div>

<!-- Om sektion -->
<div class="bg-white dark:bg-white light:bg-white flex justify justify-center h-10 pt-4 md:pt-0 lg:h-24">
    <h2 class="font-sans text-2xl text-black font-semibold pt-3 md:pb-0 md:font-semibold md:text-3xl md:px-20 md:text-center lg:text-black lg:text-3xl lg:font-semibold lg:text-center">Dit lokale rengøringsfirma</h2>
</div>

<div class="bg-white dark:bg-white light:bg-white flex flex-col justify justify-center h-1/2 w-full p-8 pt-12 pb-20 md:items-center md:p-0 md:flex-col lg:flex-row lg:w-full lg:pt-0 lg:pb-20">
    <div class="bg-lightgray p-4 pt-0 md:p-6 md:pb-0 md:w-3/5 lg:w-2/5 lg:px-12">
        <p class="text-gray dark:gray text-sm tracking-wider pt-8 font-semibold pb-1 md:pt-2 lg:pt-10 lg:text-sm lg:tracking-wider">OM MIG</p>
        <h2 class="text-black dark:text-black text-2xl font-semibold pb-4 md:pb-3 lg:pb-6 lg:text-3xl">Jeg værdsætter tillid og tryghed, i det samarbejde jeg indgår med mine kunder </h2>
        <p class="text-black dark:text-black text-base font-semibold md:pb-2 lg:font-semibold lg:text-base">Jeg startede Paulas Rengøring i 2014, da det længe havde været et ønske at blive selvstændig.</p>
        <p class="text-black dark:text-black text-base pt-3 md:pt-1 lg:text-base lg:pt-2 lg:text-base">Sidenhen har jeg opbygget en loyal kundekreds i Ringkøbing-Skjern kommune, som jeg værner om og værdsætter. Personligt betyder gensidig tillid, og et trygt samarbejde meget i de kunderelationer jeg indgår i. Jeg tilbyder rengøring for private samt erhverv.</p>
        <div class="row pt-6 pb-4 md:flex lg:flex md:pt-3 lg:pt-6 lg:pb-0">
            <div class="py-3 md:pt-5 md:pr-3 lg:pt-0 lg:pr-3">
                <RouterLink to="/privatecleaning">
                    <a href="#top"> 
                        <button class="bg-blue dark:bg-blue hover:bg-darkblue text-lightgray dark:text-lightgray font-semibold py-2 px-8 md:py-2 md:px-3 md:py-1 md:px-6 lg:text-md lg:py-2 lg:px-8 rounded-full lg:text-md">
                            Privatrengøring
                        </button>
                    </a>
                </RouterLink> 
            </div>
            <div class="md:pt-5 md:pb-5 lg:pt-0 lg:pb-14">
                <RouterLink to="/commercialcleaning"> 
                    <button class="bg-blue dark:bg-blue hover:bg-darkblue text-lightgray dark:text-lightgray font-semibold py-2 px-8 md:py-2 md:px-3 md:py-1 md:px-6 lg:text-md lg:py-2 lg:px-8 rounded-full lg:text-md">
                        Erhvervsrengøring
                    </button>
                </RouterLink>
            </div>
        </div>
    </div>
    <div class="md:w-3/5 lg:w-2/5">
        <img src="../assets/Paulasrengøring-om-billede.jpg" alt="Kvinde står med rengøringsprodukt">
    </div>
</div>
</main>
</template>

<script setup>
</script>

<style>
</style>