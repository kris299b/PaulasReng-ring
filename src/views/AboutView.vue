<template>
<!-- Hero section -->
<section class="relative flex flex-col pt-5 h-[50vh] md:h-[40vh] lg:h-[80vh]">
    <div class="heroimage absolute top-0 left-0 w-full h-full overflow-hidden">
        <img class="min-w-full h-[50vh] md:h-[40vh] lg:h-[80vh] absolute object-cover" src="../assets/Herobillede-om.jpg" alt="kvinde støvsuger">
        <div class="overlay absolute top-0 left-0 w-full h-full bg-black dark:bg-black opacity-40"></div>
    </div>
    <div class="image-content z-10 pt-28 px-10 md:pt-40 lg:pt-48 lg:px-40">
        <div>
            <p class="font-sans text-white text-left pl-5 dark:text-white px-4 text-sm md:text-lg md:text-left lg:text-lg lg:text-left lg:tracking-wider">
                PAULAS RENGØRING | OM FIRMAET
            </p>
            <h2 class="font-sans text-white dark:text-white text-left font-semibold px-4 text-4xl md:text-5xl md:text-left lg:pb-2 lg:font-semibold lg:text-5xl lg:text-left">Dit Lokale rengøringsfirma</h2>
        </div>
    </div>
</section>


<!-- Værdisæt section -->
<div class="bg-white dark:bg-white light:bg-white flex flex-col justify justify-center h-1/2 w-full p-8 md:items-center md:pt-16 md:flex-col lg:flex-row lg:w-full lg:pt-20 lg:pb-16">
    <div class="bg-lightgray p-6 md:p-6 md:w-3/5 lg:w-2/5 lg:px-12">
        <p class="text-gray dark:text-gray tracking-wider text-sm pt-5 font-semibold pb-2 md:pt-1 lg:pt-0 lg:text-sm lg:tracking-wider lg:pt-1">VÆRDISÆT</p>
        <p class="text-black dark:text-black pt-0 text-xl mt-3 font-semibold md:mx-0 md:text-md lg:mx-0 lg:text-lg lg:font-semibold lg:pt-1.5">Gensidig tillid</p>
        <p class="text-black dark:text-black text-base mt-2 md:text-sm md:mx-0 lg:mx-0 lg:text-base lg:mr-10 lg:pb-0">Det er vigtigt for mig, at vi skaber tillid til hinanden fra start, så vi kan indgå det bedste samarbejde med et stærkt fundament.</p>
        <p class="text-black dark:text-black pt-2 text-xl mt-3 font-semibold md:mx-0 md:text-md lg:mx-0 lg:text-lg lg:font-semibold lg:pt-2">Kundetilfredshed</p>
        <p class="text-black dark:text-black text-base mt-2 md:text-sm md:mx-0 lg:mx-0 lg:text-base lg:mr-10 lg:pb-0">Din tilfredshed med rengøringen, er af højeste prioritet for mig. Når du som kunde er glad for resultaterne, giver det en uvurderlig følelse af velvære.</p>
        <p class="text-black dark:text-black pt-2 text-xl mt-3 font-semibold md:mx-0 md:text-md lg:mx-0 lg:text-lg lg:font-semibold lg:pt-2">Tæt samarbejde</p>
        <p class="text-black dark:text-black text-base mt-2 mb-5 md:text-sm md:mx-0 md:mb-0 lg:mx-0 lg:text-base lg:mr-10 lg:pb-3">Kommunikationen imellem os er altafgørende, for at der kan dannes et trygt og tæt samarbejde. Jeg prioriterer den tillidsfulde relation.</p>
    </div>
    <div class="md:w-3/5 lg:w-2/5">
        <img src="../assets/Paulas-rengøring-værdisæt.jpg" alt="Kvinde giver kunde håndtryk">
    </div>
</div>

<!--Paulas Rengøring - erfaring sektion-->
<div class="flex justify bg-white dark:bg-white light:bg-white justify-center text-center max-h-40 w-full md:pt-5 lg:pb-6">
    <div class="w-full md:h-20">
        <h1 class="font-semibold text-black pt-4 text-2xl pb-1 text-left px-8 md:text-xl md:pb-2 md:text-center lg:text-2xl lg:text-center lg:pt-0">PAULAS RENGØRING</h1>
        <p class="text-base text-black px-4 text-left px-8 md:text-center lg:text-center lg:text-lg">Hos mig får du topkvalitet, der er bygget op på mange års erfaring og professionalisme.</p>
    </div>
</div>

<div class="bg-white dark:bg-white light:bg-white flex flex-col justify justify-center h-1/2 w-full p-8 md:items-center md:flex-col lg:pt-2 lg:flex-row lg:w-full">
    <div class="md:w-3/5 lg:w-1/2">
        <img src="../assets/PaulasRengøring-om-billedet.jpg" alt="Kvinde går i gang med køkkenrengøring">
    </div>

    <div class="bg-lightgray p-4 md:p-6 md:w-3/5 lg:w-1/2 lg:px-10">
        <h1 class="text-black text-xs font-semibold pb-2 pt-4 lg:pt-5 lg:text-sm lg:font-semibold lg:tracking-wider">ERFARING</h1>
        <h2 class="text-black text-2xl font-semibold pb-4 md:text-2xl lg:text-3xl">PAULAS RENGØRING</h2>
        <p class="text-black text-lg font-semibold pb-1 lg:pt-1 md:text-lg lg:text-lg lg:text-base">OVER 10 ÅRS ERFARING</p>
        <p class="text-black text-base pb-2 font-semibold md:pb-3 md:font-semibold lg:pb-0 lg:font-semibold lg:text-base">Jeg har mange års erfaring med privat og erhvervsrengøring, så du som kunde kan føle dig i trygge hænder, og altid regne med topkvalitet.</p>
        <p class="text-black text-base pt-2 lg:font-base lg:pt-3 lg:pr-20 lg:text-base">Som kunde hos mig, kan du væres sikker på den bedste service, hvor der ikke bliver gået på kompromis med kvaliteten. Du kan føle dig i trygge hænder, i et samarbejde med mig.  Dine ønsker og behov, vil altid være i centrum, og danne ramme om vores samarbejde. </p>
        <div class="pt-6 pb-5 lg:pt-5 lg:pb-7">
            <RouterLink to="contact"> 
                <button class="flex hover:bg-transparent bg-blue dark:bg-blue font-normal lg:font-normal py-2 px-6 rounded-full lg:py-2 lg:px-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="white" class="w-6 h-6 lg:w-5 lg:h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                    <p class="text-xs text-white font-semibold pt-1 pl-2 light:text-black dark:text-white lg:text-sm lg:pt-0 lg:pl-2 lg:tracking-wider">Lad os tage en uforpligtende snak</p>
                </button>
            </RouterLink>
        </div>
    </div>
</div>


<!-- Om sektion -->
<div class="bg-white dark:bg-white light:bg-white flex justify justify-center h-16 pt-4 md:h-24 md:pt-6">
    <h2 class="font-sans text-2xl text-black font-semibold md:pb-0 md:font-semibold md:text-3xl md:px-20 md:text-center lg:pt-5 lg:pb-5 lg:text-black lg:text-3xl lg:font-semibold lg:text-center">Dit lokale rengøringsfirma</h2>
</div>

<div class="bg-white dark:bg-white light:bg-white flex flex-col justify justify-center h-1/2 w-full p-8 pt-0 md:items-center md:p-0 md:pb-16 md:flex-col lg:flex-row lg:w-full lg:pt-3 lg:pb-20">
    <div class="bg-lightgray p-4 pt-0 md:p-6 md:pb-0 md:w-3/5 lg:w-2/5 lg:px-12">
        <p class="text-gray dark:gray text-sm tracking-wider pt-8 font-semibold pb-1 md:pt-2 lg:pt-10 lg:text-sm lg:tracking-wider">OM MIG</p>
        <h2 class="text-black dark:text-black text-2xl font-semibold pb-4 md:pb-3 lg:pb-6 lg:text-3xl">Jeg værdsætter tillid og tryghed, i det samarbejde jeg indgår med mine kunder </h2>
        <p class="text-black dark:text-black text-base font-semibold md:pb-2 lg:font-semibold lg:text-base">Jeg startede Paulas Rengøring i 2014, da det længe havde været et ønske at blive selvstændig.</p>
        <p class="text-black dark:text-black text-base pt-3 md:pt-1 lg:text-base lg:pt-2 lg:text-base">Sidenhen har jeg opbygget en loyal kundekreds i Ringkøbing-Skjern kommune, som jeg værner om og værdsætter. Personligt betyder gensidig tillid, og et trygt samarbejde meget i de kunderelationer jeg indgår i. Jeg tilbyder rengøring for private samt erhverv.</p>
        <div class="row pb-4 md:flex lg:flex md:pt-3 lg:pt-6 lg:pb-0">
            <div class="py-6 md:pt-5 md:pr-3 lg:pt-0 lg:pr-3">
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

</template>

<style>

</style>

<script setup>

</script>