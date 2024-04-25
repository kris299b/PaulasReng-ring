<template>

<!-- Hero section -->
<section class="relative h-screen flex flex-col items-center py-20 text-center content-start">
    <div class="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
        <video class="min-w-full min-h-full absolute object-cover"
            src="../assets/herovideo.mp4"
            type="video/mp4" autoplay muted loop>
        </video>
    </div>
    <div class="video-content z-10 pt-40 md:pt-80 lg:pt-40">
        <div>
            <p class="text-white dark:text-white text-1xl md:text-xl lg:text-md lg:tracking-wider">PROFESSIONEL RENGØRING</p>
            <h2 class="text-white dark:text-white pb-5 text-3xl md:text-4xl lg:text-5xl py-1">MED DIG SOM KUNDE I CENTRUM</h2>
        </div>
        <div class="flex flex-col space-y-4 px-24 text-sm pt-5 md:flex-row md:justify-center md:space-x-4 lg:flex-row lg:space-x-4 lg:space-y-0 lg:justify-center lg:text-sm lg:pt-5">
            <button class="bg-white dark:bg-white py-3 px-8 hover:beige text-darkgray dark:text-darkgray font-semibold lg:py-2 lg:px-8 rounded-full">
                    JEG TILBYDER
            </button>
            <button class="bg-transparent py-3 px-8 dark:bg-transparent hover:bg-transparent border-2 text-white dark:text-white font-semibold lg:py-2 lg:px-8 rounded-full">
                    KONTAKT MIG
            </button>
        </div>
    </div>
</section>

<!-- Værdisæt section -->
<div class="bg-white dark:bg-white">
    <h2 class="text-darkgray dark:text-darkgray pt-10 pb-10 text-center text-lg lg:text-2xl lg:text-center lg:pt-10 lg:pb-12 lg:font-normal dark:text-darkgray">
        MIT VÆRDISÆT
    </h2>
</div>

<div class="bg-white dark:bg-white px-5 columns-1 md:columns-2 lg:px-52 lg:columns-2 lg:gap-x-0">
    <div class="inline-block md:hidden lg:hidden">
        <img src="../assets/PaulasRengøringbillede.jpg" alt="Værdisæt">
    </div>
    <div class="bg-lightblue dark:bg-lightblue pb-10 text-darkgray dark:text-darkgray lg:py-5 lg:px-5">
        <div class="pt-0 pl-5 pb-3">
            <h2 class="pt-8 text-lg mt-3 lg:text-xl lg:font-semibold lg:pt-2">TILLID</h2>
            <p class="text-sm mt-3 lg:mr-10 lg:pb-3">There are many variations of passages of Lorem Ipsum 
                available, but the majority have suffered alteration in some form.</p>
        </div>
        <div class="pt-0 pl-5 pb-3">        
            <h2 class="text-lg mt-3 lg:text-xl lg:font-semibold">KUNDETILFREDSHED</h2>
            <p class="text-sm mt-3 lg:mr-10">There are many variations of passages of Lorem Ipsum 
                available, but the majority have suffered alteration in some form.</p>
        </div>
        <div class="pl-5">
            <h2 class="text-lg mt-3 lg:text-xl lg:font-semibold">TÆT SAMARBEJDE</h2>
            <p class="text-sm mt-3 lg:mr-10 lg:pb-5">There are many variations of passages of Lorem Ipsum 
                available, but the majority have suffered alteration in some form.</p>
        </div>
    </div>
    <div class="hidden md:inline-block lg:inline-block">
        <img src="../assets/PaulasRengøringbillede.jpg" alt="Værdisæt">
    </div>
</div>


<!-- Guide section -->
<div class="bg-white dark:bg-white px-5 pb-5 pt-12 pl-5 text-lg text-darkgray dark:text-darkgray lg:text-center lg:pt-20 lg:pb-12">
    <div class="text-2xl lg:font-normal">
        <h2>GÅR DU I OVERVEJELSERNE </h2>
    </div>
    <div class="text-2xl lg:font-normal">
        <h2>OM AT ANSÆTTE RENGØRINGSHJÆLP ?</h2>
    </div>
    <div>
        <p class="text-sm mt-3 lg:mr-10 lg:text-sm">There are many variations of passages 
        of Lorem Ipsum available, but the majority have suffered alteration in some form. 
        </p>
    </div>
</div>

<div class="bg-white dark:bg-white columns-1 md:columns-1 lg:columns-2">
    <div class="inline-block md:hidden lg:inline-block">
        <img src="../assets/Rengøring.png" alt="Rengøring">
    </div>
    <div class="bg-lightgray dark:bg-lightgray px-5 lg:px-20">
        <p class="text-darkgray dark:text-darkgray pt-8 text-sm lg:text-sm lg:font-semibold lg:pt-10 lg:tracking-wider">GUIDE</p>
        <h2 class="text-darkgray dark:text-darkgray font-semibold text-xl mt-3 pb-3 lg:mr-10 lg:text-2xl lg:font-semibold lg:pt-0">SÅDAN FÅR DU MEST MULIG UD, AF DIN RENGØRINGSHJÆLP.</h2>
        <p class="text-darkgray dark:text-darkgray pb-3 lg:pt-4 lg:pr-20">There are many variations of passages of Lorem Ipsum available, but the majority 
        have suffered alteration.
        </p>
        <p class="text-darkgray dark:text-darkgray pb-8 lg:pt-4 lg:pr-20 lg:pb-10">By injected humour, or randomised words which don't look 
            even slightly believable. If you are going to use a passage of Lorem Ipsum, you need. 
        </p>
        <div class="pb-10 lg:pb-10">
            <button class="bg-beige dark:bg-beige hover:beige text-darkgray dark:text-darkgray font-semibold py-2 px-8 rounded-full lg:text-sm">
                LÆS MERE
            </button>
        </div>
    </div>
</div>

<!-- Ydelser sektion -->
<div class="bg-white dark:bg-white">
    <div class="text-darkgray dark:text-darkgray pt-10 pb-0 text-center text-lg lg:text-lg lg:text-center lg:pt-20 lg:pb-5 lg:font-normal">
        <p>PAULAS RENGØRING</p>
    </div>
    <div class="text-darkgray dark:text-darkgray lg:text-3xl lg:text-center lg:px-80 lg:pb-20">
        <h2>
            ''Jeg brænder for, at skabe skinnende resultater, hvor du som kunde er i centrum.'' 
        </h2>
    </div>
</div>

<div class="bg-white dark:bg-white">
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 lg:gap-20 lg:px-40 lg:pb-20">
        <div class="max-w-sm overflow-hidden shadow-lg bg-white dark:bg-white">
            <div class="px-6 py-4">
                <div>
                <h2 class="font-bold text-xl text-gray dark:text-gray">
                    PRIVAT
                </h2>
            </div>
            <div>
                <h2 class="font-bold text-xl lg:mb-10 text-gray dark:text-gray">
                    RENGØRING
                </h2>
            </div>
            <div class="space-y-5">
                <div class="flex justify-between">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0,0,256,256"
                        style="fill:#000000;">
                        <g fill="#cdd1dc" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(10.66667,10.66667)"><path d="M12,2c-5.514,0 -10,4.486 -10,10c0,5.514 4.486,10 10,10c5.514,0 10,-4.486 10,-10c0,-1.126 -0.19602,-2.2058 -0.54102,-3.2168l-1.61914,1.61914c0.105,0.516 0.16016,1.05066 0.16016,1.59766c0,4.411 -3.589,8 -8,8c-4.411,0 -8,-3.589 -8,-8c0,-4.411 3.589,-8 8,-8c1.633,0 3.15192,0.49389 4.41992,1.33789l1.43164,-1.43164c-1.648,-1.194 -3.66656,-1.90625 -5.85156,-1.90625zM21.29297,3.29297l-10.29297,10.29297l-3.29297,-3.29297l-1.41406,1.41406l4.70703,4.70703l11.70703,-11.70703z"></path></g></g>
                        </svg>
                    </div>
                    <p class="text-base lg:text-sm text-gray dark:text-gray">
                        HOVEDRENGØRING
                    </p>
                </div>
                <div class="flex justify-between">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0,0,256,256"
                        style="fill:#000000;">
                        <g fill="#cdd1dc" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(10.66667,10.66667)"><path d="M12,2c-5.514,0 -10,4.486 -10,10c0,5.514 4.486,10 10,10c5.514,0 10,-4.486 10,-10c0,-1.126 -0.19602,-2.2058 -0.54102,-3.2168l-1.61914,1.61914c0.105,0.516 0.16016,1.05066 0.16016,1.59766c0,4.411 -3.589,8 -8,8c-4.411,0 -8,-3.589 -8,-8c0,-4.411 3.589,-8 8,-8c1.633,0 3.15192,0.49389 4.41992,1.33789l1.43164,-1.43164c-1.648,-1.194 -3.66656,-1.90625 -5.85156,-1.90625zM21.29297,3.29297l-10.29297,10.29297l-3.29297,-3.29297l-1.41406,1.41406l4.70703,4.70703l11.70703,-11.70703z"></path></g></g>
                        </svg>
                    </div>
                    <p class="text-base lg:text-sm text-gray dark:text-gray">
                        FLYTTERENGØRING
                    </p>
                </div>
                <div class="flex justify-between">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0,0,256,256"
                        style="fill:#000000;">
                        <g fill="#cdd1dc" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(10.66667,10.66667)"><path d="M12,2c-5.514,0 -10,4.486 -10,10c0,5.514 4.486,10 10,10c5.514,0 10,-4.486 10,-10c0,-1.126 -0.19602,-2.2058 -0.54102,-3.2168l-1.61914,1.61914c0.105,0.516 0.16016,1.05066 0.16016,1.59766c0,4.411 -3.589,8 -8,8c-4.411,0 -8,-3.589 -8,-8c0,-4.411 3.589,-8 8,-8c1.633,0 3.15192,0.49389 4.41992,1.33789l1.43164,-1.43164c-1.648,-1.194 -3.66656,-1.90625 -5.85156,-1.90625zM21.29297,3.29297l-10.29297,10.29297l-3.29297,-3.29297l-1.41406,1.41406l4.70703,4.70703l11.70703,-11.70703z"></path></g></g>
                        </svg>
                    </div>
                    <p class="text-base lg:text-sm text-gray dark:text-gray">
                        VINDUESPUDSNING
                    </p>
                </div>
                <div class="px-6 pt-0 pb-10 lg:text-center">
                    <button class="bg-lightblue dark:bg-lightblue hover:lightblue text-darkgray dark:text-darkgray font-semibold py-2 px-8 rounded-full lg:text-sm">
                        LÆS MERE
                    </button>
                </div>
            </div>
            </div>
        </div>
        <div class="max-w-sm overflow-hidden shadow-lg bg-white dark:bg-white">
            <div class="px-6 py-4">
                <div>
                <h2 class="font-bold text-xl text-gray dark:text-gray">
                    PRIVAT
                </h2>
            </div>
            <div>
                <h2 class="font-bold text-xl lg:mb-10 text-gray dark:text-gray">
                    RENGØRING
                </h2>
            </div>
            <div class="space-y-5">
                <div class="flex justify-between">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0,0,256,256"
                        style="fill:#000000;">
                        <g fill="#cdd1dc" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(10.66667,10.66667)"><path d="M12,2c-5.514,0 -10,4.486 -10,10c0,5.514 4.486,10 10,10c5.514,0 10,-4.486 10,-10c0,-1.126 -0.19602,-2.2058 -0.54102,-3.2168l-1.61914,1.61914c0.105,0.516 0.16016,1.05066 0.16016,1.59766c0,4.411 -3.589,8 -8,8c-4.411,0 -8,-3.589 -8,-8c0,-4.411 3.589,-8 8,-8c1.633,0 3.15192,0.49389 4.41992,1.33789l1.43164,-1.43164c-1.648,-1.194 -3.66656,-1.90625 -5.85156,-1.90625zM21.29297,3.29297l-10.29297,10.29297l-3.29297,-3.29297l-1.41406,1.41406l4.70703,4.70703l11.70703,-11.70703z"></path></g></g>
                        </svg>
                    </div>
                    <p class="text-base lg:text-sm text-gray dark:text-gray">
                        HOVEDRENGØRING
                    </p>
                </div>
                <div class="flex justify-between">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0,0,256,256"
                        style="fill:#000000;">
                        <g fill="#cdd1dc" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(10.66667,10.66667)"><path d="M12,2c-5.514,0 -10,4.486 -10,10c0,5.514 4.486,10 10,10c5.514,0 10,-4.486 10,-10c0,-1.126 -0.19602,-2.2058 -0.54102,-3.2168l-1.61914,1.61914c0.105,0.516 0.16016,1.05066 0.16016,1.59766c0,4.411 -3.589,8 -8,8c-4.411,0 -8,-3.589 -8,-8c0,-4.411 3.589,-8 8,-8c1.633,0 3.15192,0.49389 4.41992,1.33789l1.43164,-1.43164c-1.648,-1.194 -3.66656,-1.90625 -5.85156,-1.90625zM21.29297,3.29297l-10.29297,10.29297l-3.29297,-3.29297l-1.41406,1.41406l4.70703,4.70703l11.70703,-11.70703z"></path></g></g>
                        </svg>
                    </div>
                    <p class="text-base lg:text-sm text-gray dark:text-gray">
                        FLYTTERENGØRING
                    </p>
                </div>
                <div class="flex justify-between">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0,0,256,256"
                        style="fill:#000000;">
                        <g fill="#cdd1dc" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(10.66667,10.66667)"><path d="M12,2c-5.514,0 -10,4.486 -10,10c0,5.514 4.486,10 10,10c5.514,0 10,-4.486 10,-10c0,-1.126 -0.19602,-2.2058 -0.54102,-3.2168l-1.61914,1.61914c0.105,0.516 0.16016,1.05066 0.16016,1.59766c0,4.411 -3.589,8 -8,8c-4.411,0 -8,-3.589 -8,-8c0,-4.411 3.589,-8 8,-8c1.633,0 3.15192,0.49389 4.41992,1.33789l1.43164,-1.43164c-1.648,-1.194 -3.66656,-1.90625 -5.85156,-1.90625zM21.29297,3.29297l-10.29297,10.29297l-3.29297,-3.29297l-1.41406,1.41406l4.70703,4.70703l11.70703,-11.70703z"></path></g></g>
                        </svg>
                    </div>
                    <p class="text-base lg:text-sm text-gray dark:text-gray">
                        VINDUESPUDSNING
                    </p>
                </div>
                <div class="px-6 pt-0 pb-10 lg:text-center">
                    <button class="bg-lightblue dark:bg-lightblue hover:lightblue text-darkgray dark:text-darkgray font-semibold py-2 px-8 rounded-full lg:text-sm">
                        LÆS MERE
                    </button>
                </div>
            </div>
            </div>
        </div>
    </div>
</div>

<!-- Kontaktformular sektion -->
<div class="bg-white dark:bg-white text-darkgray dark:text-darkgray px-5 pt-10 pb-10 text-lg lg:text-center lg:pt-10 lg:pb-12 lg:font-normal">
    <h2 class="text-lg text-left lg:text-center lg:text-2xl">HAR DU SPØRGSMÅL?</h2>
    <p class="text-sm text-left pt-3 lg:text-center lg:text-sm lg:px-32 lg:pt-5">There are many variations of passages of Lorem Ipsum available, but the majority 
    have suffered alteration in some form. by injected humour, or randomised words which
    don't look even slightly believable. </p>
</div>

<div class="bg-white dark:bg-white">
    <div>
        <h2 class="text-darkgray dark:text-darkgray pt-10 pb-10 text-center text-lg lg:text-2xl lg:text-center lg:pt-10 lg:pb-12 lg:font-normal">
            DET SIGER MINE KUNDER
        </h2>
    </div>
</div>

<div class="bg-white dark:bg-white">
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 lg:gap-20 lg:px-40 lg:pb-20">
        <div class="max-w-sm overflow-hidden shadow-lg bg-white dark:bg-white">
            <div class="px-6 py-4">
                <div class="text-darkgray lg:text-darkgray font-bold text-xl mb-2 lg:text-lg lg:text-center">ELSEBETH</div>
                <p class="text-darkgray lg:text-darkgray text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
        </div>
        <div class="max-w-sm overflow-hidden shadow-lg bg-white dark:bg-white">
            <div class="px-6 py-4">
                <div class="text-darkgray lg:text-darkgray font-bold text-xl mb-2 lg:text-lg lg:text-center">RUTH</div>
                <p class="text-darkgray lg:text-darkgray text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
        </div>
        <div class="max-w-sm overflow-hidden shadow-lg bg-white dark:bg-white">
            <div class="px-6 py-4">
                <div class="text-darkgray lg:text-darkgray font-bold text-xl mb-2 lg:text-lg lg:text-center">JETTE</div>
                <p class="text-darkgray lg:text-darkgray text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
        </div>
    </div>
</div>

<div class="bg-white dark:bg-white py-4 mx-auto">
    <div class="text-center mb-20">
        <p class="mt-4 text-sm text-gray dark:text-gray lg:text-lg font-regular">
            FAQ
        </p>
        <h3 class="text-lg lg:text-2xl leading-normal font-semibold tracking-tight text-darkgray dark:text-darkgray">
            OFTE STILLEDE <span class="text-indigo-600">SPØRGSMÅL</span>
        </h3>
    </div>
</div>



</template>

<style>

</style>

<script setup>

</script>