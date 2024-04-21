<template>

<!-- Hero section -->
<section class="relative h-screen flex flex-col items-center py-20 text-center content-start text-white">
    <div class="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
        <video class="min-w-full min-h-full absolute object-cover"
            src="../assets/herovideo.mp4"
            type="video/mp4" autoplay muted loop>
        </video>
    </div>
    <div class="video-content z-10 pt-20 lg:pt-40">
        <p class="text-white dark:text-white text-1xl md:text-2xl lg:text-md lg:tracking-wider">PROFESSIONEL RENGØRING</p>
        <h2 class="text-white text-3xl md:text-6xl lg:text-5xl py-1">MED DIG SOM KUNDE I CENTRUM</h2>
            
        <div class="flex flex-col text-sm pt-5 lg:flex-row lg:space-x-4 lg:justify-center lg:text-sm lg:pt-5">
            <button class="bg-beige dark:bg-beige hover:beige text-darkgray dark:text-darkgray font-semibold py-2 px-8 rounded-full">
                    JEG TILBYDER
            </button>
            <button class="bg-transparent dark:bg-transparent hover:bg-transparent border-2 text-white font-semibold py-2 px-8 rounded-full">
                    KONTAKT MIG
            </button>
        </div>
    </div>
</section>

<!-- Værdisæt section -->
<div class="bg-white dark:bg-white text-darkgray dark:text-darkgray pt-10 pb-10 text-center text-lg lg:text-darkgray lg:text-3xl lg:text-center lg:pt-10 lg:pb-12 lg:font-normal dark:text-darkgray">
    MIT VÆRDISÆT
</div>

<div class="bg-white dark:bg-white px-5 columns-1 md:columns-1 lg:px-40 lg:columns-2 lg:gap-x-0">
    <div class="inline-block lg:hidden">
        <img src="../assets/PaulasRengøringbillede.jpg" alt="Værdisæt">
    </div>
    <div class="bg-lightblue dark:bg-lightblue text-darkgray dark:text-darkgray pb-10 lg:pb-5 lg:p-5">
        <div class="pt-0 pl-5 pb-3 lg:p-10 lg:pt-0 lg:pt-6 lg:pb-5">
            <h2 class="text-lg mt-3 lg:text-xl lg:font-semibold">TILLID</h2>
            <p class="text-sm mt-3 lg:mr-10">There are many variations of passages of Lorem Ipsum 
                available, but the majority have suffered alteration in some form.</p>
        </div>
        <div class="pt-0 pl-5 pb-3 lg:p-10 lg:pt-0 lg:pb-5">
            <h2 class="text-lg mt-3 lg:text-xl lg:font-semibold">KUNDETILFREDSHED</h2>
            <p class="text-sm mt-3 lg:mr-10">There are many variations of passages of Lorem Ipsum 
                available, but the majority have suffered alteration in some form.</p>
        </div>
        <div class="pl-5 lg:p-10 lg:pt-0">
            <h2 class="text-lg mt-3 lg:text-xl lg:font-semibold">TÆT SAMARBEJDE</h2>
            <p class="text-sm mt-3 lg:mr-10">There are many variations of passages of Lorem Ipsum 
                available, but the majority have suffered alteration in some form.</p>
        </div>
    </div>
    <div class="hidden md:hidden lg:inline-block">
        <img src="../assets/PaulasRengøringbillede.jpg" alt="Værdisæt">
    </div>
</div>


<!-- Guide section -->
<div class="bg-white text-darkgray pt-12 pl-5 text-lg lg:text-darlgray lg:text-3xl lg:text-center lg:pt-20 lg:pb-12 dark:text-darkgray">
    <div class="lg:font-normal">
        GÅR DU I OVERVEJELSERNE 
    </div>
    <div class="lg:font-normal">
        OM AT ANSÆTTE RENGØRINGSHJÆLP ?
    </div>
    <div>
        <p class="text-sm mt-3 lg:mr-10 lg:text-sm">There are many variations of passages 
        of Lorem Ipsum available, but the majority have suffered alteration in some form. 
        </p>
    </div>
</div>

<!-- Guide sektion -->
<div class="bg-white dark:bg-white columns-1 md:columns-1 lg:columns-2">
    <div class="hidden md:hidden lg:inline-block">
        <img src="../assets/Rengøring.png" alt="Rengøring">
    </div>
    <div class="bg-beige dark:bg-beige lg:px-20">
        <p class="text-darkgray dark:text-darkgray mt-3 text-lg lg:text-sm lg:font-semibold lg:pt-10 lg:tracking-wider">GUIDE</p>
        <h2 class="text-darkgray dark:text-darkgray font-semibold text-md mt-3 lg:mr-10 lg:text-2xl lg:font-semibold lg:pt-0">SÅDAN FÅR DU MEST MULIG UD, AF DIN RENGØRINGSHJÆLP.</h2>
        <p class="text-darkgray dark:text-darkgray lg:pt-4 lg:pr-20">There are many variations of passages of Lorem Ipsum available, but the majority 
        have suffered alteration.
        </p>
        <p class="text-darkgray dark:text-darkgray lg:pt-4 lg:pr-20 lg:pb-10">By injected humour, or randomised words which don't look 
            even slightly believable. If you are going to use a passage of Lorem Ipsum, you need. 
        </p>
        <div class="lg:pb-10">
            <button class="bg-darkbeige dark:bg-darkbeige hover:darkbeige text-darkgray dark:text-darkgray font-semibold py-2 px-8 rounded-full lg:text-sm">
                LÆS MERE
            </button>
        </div>
    </div>
</div>

<!-- Ydelser sektion -->
<div class="bg-white dark:bg-white text-darkgray dark:text-darkgray pt-10 pb-10 text-center text-lg lg:text-darkgray lg:text-3xl lg:text-center lg:pt-20 lg:pb-12 lg:font-normal dark:text-darkgray">
    JEG TILBYDER
</div>

<div class="flex bg-white dark:bg-white columns-1 md:columns-1 lg:columns-2 lg:pb-20 lg:justify-center lg:gap-20">
    <div class="bg-lightgray dark:bg-lightgray w-1/4 overflow-hidden shadow-md text-darkgray dark:text-darkgray">
        <div class="px-6 py-10">
            <div class="font-bold text-xl">PRIVAT</div>
            <div class="font-bold text-xl mb-10">RENGØRING</div>
            <div>
                <div class="flex justify-between lg:jusify-between">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0,0,256,256"
                    style="fill:#000000;">
                    <g fill="#cdd1dc" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(10.66667,10.66667)"><path d="M12,2c-5.514,0 -10,4.486 -10,10c0,5.514 4.486,10 10,10c5.514,0 10,-4.486 10,-10c0,-1.126 -0.19602,-2.2058 -0.54102,-3.2168l-1.61914,1.61914c0.105,0.516 0.16016,1.05066 0.16016,1.59766c0,4.411 -3.589,8 -8,8c-4.411,0 -8,-3.589 -8,-8c0,-4.411 3.589,-8 8,-8c1.633,0 3.15192,0.49389 4.41992,1.33789l1.43164,-1.43164c-1.648,-1.194 -3.66656,-1.90625 -5.85156,-1.90625zM21.29297,3.29297l-10.29297,10.29297l-3.29297,-3.29297l-1.41406,1.41406l4.70703,4.70703l11.70703,-11.70703z"></path></g></g>
                    </svg>
                    <p class="text-base lg:text-sm lg:pb-5">
                        HOVEDRENGØRING
                    </p>
                </div>
                <div class="flex justify-between lg:jusify-between">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0,0,256,256"
                    style="fill:#000000;">
                    <g fill="#cdd1dc" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(10.66667,10.66667)"><path d="M12,2c-5.514,0 -10,4.486 -10,10c0,5.514 4.486,10 10,10c5.514,0 10,-4.486 10,-10c0,-1.126 -0.19602,-2.2058 -0.54102,-3.2168l-1.61914,1.61914c0.105,0.516 0.16016,1.05066 0.16016,1.59766c0,4.411 -3.589,8 -8,8c-4.411,0 -8,-3.589 -8,-8c0,-4.411 3.589,-8 8,-8c1.633,0 3.15192,0.49389 4.41992,1.33789l1.43164,-1.43164c-1.648,-1.194 -3.66656,-1.90625 -5.85156,-1.90625zM21.29297,3.29297l-10.29297,10.29297l-3.29297,-3.29297l-1.41406,1.41406l4.70703,4.70703l11.70703,-11.70703z"></path></g></g>
                    </svg>
                    <p class="text-base lg:text-sm lg:pb-5">
                        FLYTTERENGØRING
                    </p>
                </div>
                <div class="flex justify-between lg:jusify-between">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0,0,256,256"
                    style="fill:#000000;">
                    <g fill="#cdd1dc" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(10.66667,10.66667)"><path d="M12,2c-5.514,0 -10,4.486 -10,10c0,5.514 4.486,10 10,10c5.514,0 10,-4.486 10,-10c0,-1.126 -0.19602,-2.2058 -0.54102,-3.2168l-1.61914,1.61914c0.105,0.516 0.16016,1.05066 0.16016,1.59766c0,4.411 -3.589,8 -8,8c-4.411,0 -8,-3.589 -8,-8c0,-4.411 3.589,-8 8,-8c1.633,0 3.15192,0.49389 4.41992,1.33789l1.43164,-1.43164c-1.648,-1.194 -3.66656,-1.90625 -5.85156,-1.90625zM21.29297,3.29297l-10.29297,10.29297l-3.29297,-3.29297l-1.41406,1.41406l4.70703,4.70703l11.70703,-11.70703z"></path></g></g>
                    </svg>
                    <p class="text-base lg:text-sm lg:pb-5">
                        VINDUESPUDSNING
                    </p>
                </div>
            </div>
        </div>
        <div class="px-6 pt-0 pb-10">
            <button class="bg-lightblue dark:bg-lightblue hover:lightblue text-darkgray dark:text-darkgray font-semibold py-2 px-8 rounded-full lg:text-sm">
                    LÆS MERE
            </button>
        </div>
    </div>
    <div class="bg-lightgray dark:bg-lightgray w-1/4 overflow-hidden shadow-md text-darkgray dark:text-darkgray">
        <div class="px-6 py-10">
            <div class="font-bold text-xl">ERHVERVS</div>
            <div class="font-bold text-xl mb-10">RENGØRING</div>
            <div>
                <div class="flex justify-between lg:jusify-between">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0,0,256,256"
                    style="fill:#000000;">
                    <g fill="#cdd1dc" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(10.66667,10.66667)"><path d="M12,2c-5.514,0 -10,4.486 -10,10c0,5.514 4.486,10 10,10c5.514,0 10,-4.486 10,-10c0,-1.126 -0.19602,-2.2058 -0.54102,-3.2168l-1.61914,1.61914c0.105,0.516 0.16016,1.05066 0.16016,1.59766c0,4.411 -3.589,8 -8,8c-4.411,0 -8,-3.589 -8,-8c0,-4.411 3.589,-8 8,-8c1.633,0 3.15192,0.49389 4.41992,1.33789l1.43164,-1.43164c-1.648,-1.194 -3.66656,-1.90625 -5.85156,-1.90625zM21.29297,3.29297l-10.29297,10.29297l-3.29297,-3.29297l-1.41406,1.41406l4.70703,4.70703l11.70703,-11.70703z"></path></g></g>
                    </svg>
                    <p class="text-base lg:text-sm lg:pb-5">
                        KONTORRENGØRING
                    </p>
                </div>
                <div class="flex justify-between lg:jusify-between">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0,0,256,256"
                    style="fill:#000000;">
                    <g fill="#cdd1dc" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(10.66667,10.66667)"><path d="M12,2c-5.514,0 -10,4.486 -10,10c0,5.514 4.486,10 10,10c5.514,0 10,-4.486 10,-10c0,-1.126 -0.19602,-2.2058 -0.54102,-3.2168l-1.61914,1.61914c0.105,0.516 0.16016,1.05066 0.16016,1.59766c0,4.411 -3.589,8 -8,8c-4.411,0 -8,-3.589 -8,-8c0,-4.411 3.589,-8 8,-8c1.633,0 3.15192,0.49389 4.41992,1.33789l1.43164,-1.43164c-1.648,-1.194 -3.66656,-1.90625 -5.85156,-1.90625zM21.29297,3.29297l-10.29297,10.29297l-3.29297,-3.29297l-1.41406,1.41406l4.70703,4.70703l11.70703,-11.70703z"></path></g></g>
                    </svg>
                    <p class="text-base lg:text-sm lg:pb-5">
                        FLYTTERENGØRING
                    </p>
                </div>
                <div class="flex justify-between lg:jusify-between">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0,0,256,256"
                    style="fill:#000000;">
                    <g fill="#cdd1dc" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(10.66667,10.66667)"><path d="M12,2c-5.514,0 -10,4.486 -10,10c0,5.514 4.486,10 10,10c5.514,0 10,-4.486 10,-10c0,-1.126 -0.19602,-2.2058 -0.54102,-3.2168l-1.61914,1.61914c0.105,0.516 0.16016,1.05066 0.16016,1.59766c0,4.411 -3.589,8 -8,8c-4.411,0 -8,-3.589 -8,-8c0,-4.411 3.589,-8 8,-8c1.633,0 3.15192,0.49389 4.41992,1.33789l1.43164,-1.43164c-1.648,-1.194 -3.66656,-1.90625 -5.85156,-1.90625zM21.29297,3.29297l-10.29297,10.29297l-3.29297,-3.29297l-1.41406,1.41406l4.70703,4.70703l11.70703,-11.70703z"></path></g></g>
                    </svg>
                    <p class="text-base lg:text-sm lg:pb-5">
                        VINDUESPUDSNING
                    </p>
                </div>
            </div>
        </div>
        <div class="px-6 pt-0 pb-10">
            <button class="bg-lightblue dark:bg-lightblue hover:lightblue text-darkgray dark:text-darkgray font-semibold py-2 px-8 rounded-full lg:text-sm">
                    LÆS MERE
            </button>
        </div>
    </div>
</div>

<!-- Kontaktformular sektion -->
<div class="bg-white dark:bg-white text-darkgray dark:text-darkgray pt-10 pb-10 text-center text-lg lg:text-darkgray lg:text-center lg:pt-5 lg:pb-12 lg:font-normal dark:text-darkgray">
    <h2 class="lg:text-3xl">HAR DU SPØRGSMÅL?</h2>
    <p class="lg:text-sm lg:px-24 lg:pt-5">There are many variations of passages of Lorem Ipsum available, but the majority 
    have suffered alteration in some form. by injected humour, or randomised words which
    don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,
     you need to be  </p>
</div>

</template>

<style>

</style>

<script setup>

</script>