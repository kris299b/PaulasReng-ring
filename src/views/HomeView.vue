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
            <p class="font-sans text-white dark:text-white text-1xl md:text-xl lg:text-md lg:pb-1 lg:tracking-wider">PROFESSIONEL RENGØRING</p>
            <h2 class="font-sans text-white dark:text-white pb-3 px-5 py-1 text-3xl md:text-4xl lg:text-5xl lg:font-semibold">Jeg forstår vigtigheden af et rent miljø</h2>
        </div>
        <div class="font-sans flex flex-col space-y-4 px-24 text-sm pt-5 md:flex-row md:justify-center md:space-x-4 lg:flex-row lg:space-x-4 lg:space-y-0 lg:justify-center lg:text-md lg:pt-5">
            <button class="flex bg-transparent dark:bg-transparent border-2 border-white lg:border-white py-2 px-6 hover:beige text-white dark:text-white font-semibold lg:py-2 lg:px-8 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 lg:w-6 lg:h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                <RouterLink to="contact"> 
                    <p class="hidden md:inline-block lg:inline-block lg:pl-2 lg:tracking-wider">Lad os tage en udforpligtende snak</p>
                    <p class="inline-block md:hidden pl-2 text-md lg:hidden lg:pl-2 lg:tracking-wider">Lad os samtale</p>
                </RouterLink>
            </button>
        </div>
    </div>
</section>


<!-- Værdisæt section -->
<div class="bg-white dark:bg-white pt-12 px-5 columns-1 md:gap-x-0 md:columns-2 lg:px-52 lg:columns-2 lg:gap-x-0 lg:pt-20">
    <div class="inline-block pt-10 md:hidden lg:hidden">
        <img src="../assets/værdisæt-billede.jpg" alt="Værdisæt">
    </div>
    <div class="bg-lightgray md:pt-2 dark:bg-lightgray pb-10 text-black dark:text-black lg:py-5 lg:px-5">
        <div class="font-sans pt-0 pl-5 pb-3">
            <p class="pt-8 text-sm mt-3 md:mx-5 md:pt-2 lg:text-sm lg:font-semibold lg:pt-1 text-gray dark:text-gray lg:tracking-wider">PAULAS RENGØRING | VÆRDISÆT</p>
        </div>
        <div class="font-sans pt-0 pl-5 pb-3">
            <h2 class="pt-0 text-xl mt-3 font-semibold md:mx-5 md:text-md lg:text-lg lg:font-semibold lg:pt-2">Gensidig tillid</h2>
            <p class="text-sm mt-3 md:text-xs md:mx-5 lg:text-sm lg:mr-10 lg:pb-0">There are many variations of passages of Lorem Ipsum 
                available, but the majority have suffered alteration in some form.</p>
        </div>
        <div class="font-sans pt-0 pl-5 pb-3">        
            <h2 class="text-xl mt-3 font-semibold font-semiboldmd:mx-5 md:text-md lg:text-lg lg:font-semibold lg:pl-5">Kundetilfredshed</h2>
            <p class="text-sm mt-3 md:text-xs md:mx-5 lg:text-sm lg:mr-10">There are many variations of passages of Lorem Ipsum 
                available, but the majority have suffered alteration in some form.</p>
        </div>
        <div class="font-sans pl-5">
            <h2 class="text-xl mt-3 font-semibold md:mx-5 md:text-md lg:text-lg lg:font-semibold">Tæt samarbejde</h2>
            <p class="text-sm mt-3 md:text-xs md:mx-5 lg:text-sm lg:mr-10 lg:pb-5">There are many variations of passages of Lorem Ipsum 
                available, but the majority have suffered alteration in some form.</p>
        </div>
    </div>
    <div class="hidden md:inline-block lg:inline-block">
        <img src="../assets/værdisæt.jpg" alt="Værdisæt">
    </div>
</div>


<!-- Guide section -->
<div class="bg-white dark:bg-white">
    <h2 class="font-sans text-2xl text-black pl-5 pr-10 pt-10 font-semibold md:pb-10 md:font-semibold md:text-center lg:pt-20 lg:pb-5 lg:text-black lg:text-3xl lg:font-semibold lg:text-center">
        Går du i overvejelserne om at få rengøringshjælp ?
    </h2>
    <h2 class="font-sans text-sm text-black pl-5 pr-3 pt-5 font-normal md:pb-10 md:font-normal md:text-center lg:text-black lg:pt-1 lg:pb-10 lg:px-40 lg:text-sm lg:text-center">
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form. 
        by injected humour, or randomised words which don't look even. There are many variations of passages of Lorem Ipsum available, 
        but the majority have suffered alteration in some form. 
    </h2>
</div>

<div class="bg-white dark:bg-white columns-1 md:gap-x-0 md:columns-2 lg:columns-2 lg:gap-x-0 lg:pt-5">
    <div class="pt-10 md:pt-0 lg:pt-0">
        <img src="../assets/Guide-billede.jpg" alt="Guide-billede">
    </div>
    <div class="bg-lightgray dark:bg-lightgray px-5 lg:px-20">
        <p class="font-sans text-gray dark:gray text-sm pt-8 md:px-2 md:pt-7 lg:text-sm lg:font-semibold lg:pt-12 lg:tracking-wider">GUIDE</p>
        <h2 class="font-sans text-black dark:text-black pr-10 text-2xl font-semibold mt-3 pb-3 md:px-2 lg:text-4xl lg:font-semibold lg:pt-0">Sådan får du mest mulig ud af din rengøringshjælp.</h2>
        <p class="font-sans text-black dark:text-black pb-3 md:px-2 md:text-xs lg:text-sm lg:pt-3 lg:pr-20 lg:font-semibold">
            Går du med overvejelserne om, at ansætte en professionel til at udføre rengøringshjælpen i dit hjem? 
        </p>
        <p class="font-sans text-black dark:text-black pb-8 md:px-2 md:text-xs lg:text-sm lg:pt-1 lg:pr-20 lg:pb-10">Jeg har samlet nogle råd til dig i den indledende fase, 
            som sikrer dig at du får mest muligt ud af din rengøringshjælp, og bliver mest mulig tilfreds. 
        </p>
        <div class="font-sans pb-10 md:px-2 md:pb-7 lg:pb-12">
            <RouterLink to="guide"> 
                <button class="bg-beige dark:bg-beige rounded-full text-black dark:text-black font-normal py-2 px-8 md:py-1 md:px-6 lg:text-md lg:py-2 lg:px-8 lg:text-md lg:font-semibold">
                    Læs mere
                </button>
            </RouterLink>
        </div>
    </div>
</div>

<!-- Ydelser sektion -->
<div class="bg-white dark:bg-white px-5 md:px-40 lg:px-56">
    <div class="font-sans text-darkgray dark:text-darkgray pt-12 pl-5 pb-0 text-center text-sm pb-2 lg:text-lg lg:text-center lg:pt-20 lg:pb-2 lg:font-normal lg:tracking-wider">
        <p>PAULAS RENGØRING</p>
    </div>
    <div class="font-sans text-black dark:text-black font-semibold text-2xl pb-10 text-center lg:text-3xl lg:text-center lg:font-semibold lg:pb-10">
        <h2>
            ''Jeg brænder for, at skabe skinnende resultater, hvor du som kunde er i centrum.'' 
        </h2>
    </div>
</div>

<div class="bg-white dark:bg-white flex justify-center">
    <div class="grid grid-cols-1 md:grid-cols-2 md:pt-5 md:space-x-10 lg:grid-cols-2 lg:space-x-12 lg:pb-20">
        <div class="max-w-xs mx-auto mb-10 overflow-hidden shadow-lg bg-white dark:bg-white lg:p-10 relative">
            <img src="../assets/Shine-element.png" class="h-32 lg:h-40 absolute lg:pl-48 lg:mt-44" alt="Shine-element">
                <div class="absolute top-0 left-0 w-full bg-darkblue dark:bg-darkblue lg:top-0 lg:left-0 lg:w-full lg:h-40"></div>
                    <div class="px-6 py-4 relative z-10">
                        <div class="font-sans pb-10 pt-5 font-bold text-xl text-white dark:text-white lg:text-3xl lg:pt-0 lg:pb-10">
                            <h2>
                                PRIVAT
                            </h2>
                            <h2>
                                RENGØRING
                            </h2>
                        </div>
                    <div class="space-y-5">
                    <div class="flex lg:pt-10">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0,0,256,256"
                            style="fill:#000000;">
                            <g fill="#cdd1dc" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(10.66667,10.66667)"><path d="M12,2c-5.514,0 -10,4.486 -10,10c0,5.514 4.486,10 10,10c5.514,0 10,-4.486 10,-10c0,-1.126 -0.19602,-2.2058 -0.54102,-3.2168l-1.61914,1.61914c0.105,0.516 0.16016,1.05066 0.16016,1.59766c0,4.411 -3.589,8 -8,8c-4.411,0 -8,-3.589 -8,-8c0,-4.411 3.589,-8 8,-8c1.633,0 3.15192,0.49389 4.41992,1.33789l1.43164,-1.43164c-1.648,-1.194 -3.66656,-1.90625 -5.85156,-1.90625zM21.29297,3.29297l-10.29297,10.29297l-3.29297,-3.29297l-1.41406,1.41406l4.70703,4.70703l11.70703,-11.70703z"></path></g></g>
                            </svg>
                        </div>
                        <p class="font-sans text-base text-sm pl-2 lg:text-sm text-black dark:text-black lg:pl-2">
                            HOVEDRENGØRING
                        </p>
                    </div>
                    <div class="flex">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0,0,256,256"
                            style="fill:#000000;">
                            <g fill="#cdd1dc" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(10.66667,10.66667)"><path d="M12,2c-5.514,0 -10,4.486 -10,10c0,5.514 4.486,10 10,10c5.514,0 10,-4.486 10,-10c0,-1.126 -0.19602,-2.2058 -0.54102,-3.2168l-1.61914,1.61914c0.105,0.516 0.16016,1.05066 0.16016,1.59766c0,4.411 -3.589,8 -8,8c-4.411,0 -8,-3.589 -8,-8c0,-4.411 3.589,-8 8,-8c1.633,0 3.15192,0.49389 4.41992,1.33789l1.43164,-1.43164c-1.648,-1.194 -3.66656,-1.90625 -5.85156,-1.90625zM21.29297,3.29297l-10.29297,10.29297l-3.29297,-3.29297l-1.41406,1.41406l4.70703,4.70703l11.70703,-11.70703z"></path></g></g>
                            </svg>
                        </div>
                        <p class="font-sans text-base text-sm pl-2 lg:text-sm text-black dark:text-black lg:pl-2">
                            FLYTTERENGØRING
                        </p>
                    </div>
                    <div class="flex">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0,0,256,256"
                            style="fill:#000000;">
                            <g fill="#cdd1dc" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(10.66667,10.66667)"><path d="M12,2c-5.514,0 -10,4.486 -10,10c0,5.514 4.486,10 10,10c5.514,0 10,-4.486 10,-10c0,-1.126 -0.19602,-2.2058 -0.54102,-3.2168l-1.61914,1.61914c0.105,0.516 0.16016,1.05066 0.16016,1.59766c0,4.411 -3.589,8 -8,8c-4.411,0 -8,-3.589 -8,-8c0,-4.411 3.589,-8 8,-8c1.633,0 3.15192,0.49389 4.41992,1.33789l1.43164,-1.43164c-1.648,-1.194 -3.66656,-1.90625 -5.85156,-1.90625zM21.29297,3.29297l-10.29297,10.29297l-3.29297,-3.29297l-1.41406,1.41406l4.70703,4.70703l11.70703,-11.70703z"></path></g></g>
                            </svg>
                        </div>
                        <p class="font-sans text-base text-sm pl-2 pb-5 lg:text-sm text-black dark:text-black lg:pl-2">
                            VINDUESPUDSNING
                        </p>
                    </div>
                    <div class="font-sans px-6 pt-0 pb-5 lg:text-center">
                        <RouterLink to="privatecleaning"> 
                            <button class="bg-lightblue dark:bg-lightblue hover:lightblue text-sm text-black dark:text-black font-semibold py-2 px-8 rounded-full lg:text-md">
                                Læs mere
                            </button>
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
        <div class="max-w-xs mx-auto mb-10 overflow-hidden shadow-lg bg-white dark:bg-white lg:p-10 relative">
            <img src="../assets/Shine-element.png" class="h-32 lg:h-40 absolute lg:pl-48 lg:mt-44" alt="Shine-element">
                <div class="absolute top-0 left-0 w-full bg-darkblue dark:bg-darkblue lg:top-0 lg:left-0 lg:w-full lg:h-40"></div>
                    <div class="px-6 py-4 relative z-10">
                        <div class="font-sans pb-10 pt-5 font-bold text-xl text-white dark:text-white lg:text-3xl lg:pt-0 lg:pb-10">
                            <h2>
                                ERHVERVS
                            </h2>
                            <h2>
                                RENGØRING
                            </h2>
                        </div>
                    <div class="space-y-5">
                    <div class="flex lg:pt-10">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0,0,256,256"
                            style="fill:#000000;">
                            <g fill="#cdd1dc" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(10.66667,10.66667)"><path d="M12,2c-5.514,0 -10,4.486 -10,10c0,5.514 4.486,10 10,10c5.514,0 10,-4.486 10,-10c0,-1.126 -0.19602,-2.2058 -0.54102,-3.2168l-1.61914,1.61914c0.105,0.516 0.16016,1.05066 0.16016,1.59766c0,4.411 -3.589,8 -8,8c-4.411,0 -8,-3.589 -8,-8c0,-4.411 3.589,-8 8,-8c1.633,0 3.15192,0.49389 4.41992,1.33789l1.43164,-1.43164c-1.648,-1.194 -3.66656,-1.90625 -5.85156,-1.90625zM21.29297,3.29297l-10.29297,10.29297l-3.29297,-3.29297l-1.41406,1.41406l4.70703,4.70703l11.70703,-11.70703z"></path></g></g>
                            </svg>
                        </div>
                        <p class="font-sans text-base text-sm pl-2 lg:text-sm text-black dark:text-black lg:pl-2">
                            HOVEDRENGØRING
                        </p>
                    </div>
                    <div class="flex">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0,0,256,256"
                                style="fill:#000000;">
                                <g fill="#cdd1dc" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(10.66667,10.66667)"><path d="M12,2c-5.514,0 -10,4.486 -10,10c0,5.514 4.486,10 10,10c5.514,0 10,-4.486 10,-10c0,-1.126 -0.19602,-2.2058 -0.54102,-3.2168l-1.61914,1.61914c0.105,0.516 0.16016,1.05066 0.16016,1.59766c0,4.411 -3.589,8 -8,8c-4.411,0 -8,-3.589 -8,-8c0,-4.411 3.589,-8 8,-8c1.633,0 3.15192,0.49389 4.41992,1.33789l1.43164,-1.43164c-1.648,-1.194 -3.66656,-1.90625 -5.85156,-1.90625zM21.29297,3.29297l-10.29297,10.29297l-3.29297,-3.29297l-1.41406,1.41406l4.70703,4.70703l11.70703,-11.70703z"></path></g></g>
                            </svg>
                        </div>
                        <p class="font-sans text-base text-sm pl-2 lg:text-sm text-black dark:text-black lg:pl-2">
                            FLYTTERENGØRING
                        </p>
                    </div>
                    <div class="flex">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0,0,256,256"
                                style="fill:#000000;">
                                <g fill="#cdd1dc" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(10.66667,10.66667)"><path d="M12,2c-5.514,0 -10,4.486 -10,10c0,5.514 4.486,10 10,10c5.514,0 10,-4.486 10,-10c0,-1.126 -0.19602,-2.2058 -0.54102,-3.2168l-1.61914,1.61914c0.105,0.516 0.16016,1.05066 0.16016,1.59766c0,4.411 -3.589,8 -8,8c-4.411,0 -8,-3.589 -8,-8c0,-4.411 3.589,-8 8,-8c1.633,0 3.15192,0.49389 4.41992,1.33789l1.43164,-1.43164c-1.648,-1.194 -3.66656,-1.90625 -5.85156,-1.90625zM21.29297,3.29297l-10.29297,10.29297l-3.29297,-3.29297l-1.41406,1.41406l4.70703,4.70703l11.70703,-11.70703z"></path></g></g>
                            </svg>
                        </div>
                        <p class="font-sans text-base text-sm pl-2  pb-5 lg:text-sm text-black dark:text-black lg:pl-2">
                            VINDUESPUDSNING
                        </p>
                    </div>
                    <div class="px-6 pt-0 pb-5 lg:text-center">
                        <RouterLink to="commercialcleaning"> 
                            <button class="font-sans bg-lightblue dark:bg-lightblue hover:lightblue text-sm text-black dark:text-black font-semibold py-2 px-8 rounded-full lg:text-md">
                                Læs mere
                            </button>
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Kontaktformular sektion -->
<section class="relative h-screen flex flex-col items-center text-center content-start py-20 lg:py-12">
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden">
        <img class="min-w-full min-h-full absolute object-cover" src="../assets/Sprøgsmål-billede.jpg" alt="Private-cleaning">
    </div>
    <div class="image-content text-white dark:text-white z-10 pt-40 md:pt-40 lg:pt-0">
        <h2 class="font-sans text-2xl font-semibold text-left md:text-center lg:font-semibold lg:text-center lg:text-4xl">
            Har du spørgsmål?
        </h2>
        <p class="font-sans text-sm text-left pt-3 md:pt-4 md:text-center md:px-10 lg:text-center lg:text-sm lg:px-40 lg:pt-5">There are many variations of passages of Lorem Ipsum available, but the majority 
            have suffered alteration in some form. by injected humour, or randomised words which
            don't look even slightly believable. 
        </p>
    </div>
</section>

<!-- Kundeanmeldelser -->
<div class="bg-white dark:bg-white lg:pt-10">
    <div>
        <h2 class="font-sans text-black text-2xl font-semibold dark:text-black pt-10 pb-10 text-center lg:text-4xl lg:text-center lg:font-semibold lg:pt-10 lg:pb-20">
            Det siger mine kunder 
        </h2>
    </div>
</div>

<div class="bg-white dark:bg-white">
    <div class="grid grid-cols-1 gap-y-10 md:gap-x-5 md:grid-cols-3 lg:grid-cols-3 lg:gap-20 lg:px-20 lg:pb-10">
        <div class="max-w-xs mx-auto overflow-hidden shadow-lg bg-white dark:bg-white">
            <div class="px-6 py-10 flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="gray" class="w-14 h-14">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                <div class="font-sans text-darkgray lg:text-darkgray font-bold text-xl mb-2 lg:text-lg lg:text-center lg:pt-2">ELSEBETH</div>
                <p class="font-sans text-darkgray text-center text-base lg:text-darkgray lg:text-center lg:pt-2">
                    ''Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.''
                </p>
            </div>
        </div>
        <div class="max-w-xs mx-auto overflow-hidden shadow-lg bg-white dark:bg-white">
            <div class="px-6 py-10 flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="gray" class="w-14 h-14">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                <div class="font-sans text-darkgray lg:text-darkgray font-bold text-xl mb-2 lg:text-lg lg:text-center lg:pt-2">ELSEBETH</div>
                <p class="font-sans text-darkgray text-center text-base lg:text-darkgray lg:text-center lg:pt-2">
                    ''Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.''
                </p>
            </div>
        </div>
        <div class="max-w-xs mx-auto overflow-hidden shadow-lg bg-white dark:bg-white">
            <div class="px-6 py-10 flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="gray" class="w-14 h-14">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                <div class="font-sans text-darkgray lg:text-darkgray font-bold text-xl mb-2 lg:text-lg lg:text-center lg:pt-2">ELSEBETH</div>
                <p class="font-sans text-darkgray text-center text-base lg:text-darkgray lg:text-center lg:pt-2">
                    ''Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.''
                </p>
            </div>
        </div>
    </div>
</div>

<div class="bg-white dark:bg-white py-4 mx-auto">
    <div class="text-center mb-5">
        <h3 class="font-sans text-2xl text-center font-semibold pt-12 lg:text-4xl tracking-tight text-black dark:text-black lg:font-semibold">
            Ofte stillede spørgsmål
        </h3>
    </div>
</div>

<!-- FAQ -->
<section class="pb-10 bg-white dark:bg-white text-darkgray dark:text-darkgray flex lg:justify-center lg:pb-20">
    <div class="container flex justify-center px-4 pb-10 mx-auto md:p-8">
        <div class="space-y-4 w-full md:w-full lg:w-4/5 lg:px-40">
            <div class="w-full md:w-full w-4/5 bg-lightgray dark:lightgray cursor-pointer" data-toggle-content="content1">
                <div class="flex justify-between items-center px-5 py-4 focus:outline-none focus-visible:ri lg:pl-8">
                    <span class="font-sans lg:font-semibold font-base text-xs text-black dark:text-black lg:text-semibold lg:text-sm lg:font-semibold ">Hvor meget koster en hjemmeside hos jer?</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </div>
                <div id="content1" class="font-sans hidden px-6 py-6 pt-0 ml-4 text-black dark:text-black lg:text-sm lg:mt-1">
                    Prisen på en hjemmeside afhænger af dine ønsker og krav. Du vil ved kontakt få en estimeret pris, som vil ændre sig alt efter dine ønsker til det visuelle udtryk samt funktionalitet.
                </div>
            </div>
            <div class="w-full md:w-full w-4/5 bg-lightgray dark:lightgray cursor-pointer" data-toggle-content="content2">
                <div class="flex justify-between items-center px-5 py-4 focus:outline-none focus-visible:ri lg:pl-8">
                    <span class="lg:font-semibold font-base text-xs text-black dark:text-black lg:text-semibold lg:text-sm lg:font-semibold ">Hvor meget koster en hjemmeside hos jer?</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </div>
                <div id="content2" class="font-sans hidden px-6 py-6 pt-0 ml-4 text-black dark:text-black lg:text-sm lg:mt-1">
                    Prisen på en hjemmeside afhænger af dine ønsker og krav. Du vil ved kontakt få en estimeret pris, som vil ændre sig alt efter dine ønsker til det visuelle udtryk samt funktionalitet.
                </div>
            </div>
            <div class="w-full md:w-full w-4/5 bg-lightgray dark:lightgray cursor-pointer" data-toggle-content="content3">
                <div class="flex justify-between items-center px-5 py-4 focus:outline-none focus-visible:ri lg:pl-8">
                    <span class="lg:font-semibold font-base text-xs text-black dark:text-black lg:text-semibold lg:text-sm lg:font-semibold ">Hvor meget koster en hjemmeside hos jer?</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </div>
                <div id="content3" class="font-sans hidden px-6 py-6 pt-0 ml-4 text-black dark:text-black lg:text-sm lg:mt-1">
                    Prisen på en hjemmeside afhænger af dine ønsker og krav. Du vil ved kontakt få en estimeret pris, som vil ændre sig alt efter dine ønsker til det visuelle udtryk samt funktionalitet.
                </div>
            </div>
            <div class="w-full md:w-full w-4/5 bg-lightgray dark:lightgray cursor-pointer" data-toggle-content="content4">
                <div class="flex justify-between items-center px-5 py-4 focus:outline-none focus-visible:ri lg:pl-8">
                    <span class="font-sans lg:font-semibold font-base text-xs text-black dark:text-black lg:text-semibold lg:text-sm lg:font-semibold ">Hvor meget koster en hjemmeside hos jer?</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </div>
                <div id="content4" class="font-sans hidden px-6 py-6 pt-0 ml-4 text-black dark:text-black lg:text-sm lg:mt-1">
                    Prisen på en hjemmeside afhænger af dine ønsker og krav. Du vil ved kontakt få en estimeret pris, som vil ændre sig alt efter dine ønsker til det visuelle udtryk samt funktionalitet.
                </div>
            </div>
            <div class="w-full md:w-full w-4/5 bg-lightgray dark:lightgray cursor-pointer" data-toggle-content="content5">
                <div class="flex justify-between items-center px-5 py-4 focus:outline-none focus-visible:ri lg:pl-8">
                    <span class="font-sans lg:font-semibold font-base text-xs text-black dark:text-black lg:text-semibold lg:text-sm lg:font-semibold ">Hvor meget koster en hjemmeside hos jer?</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </div>
                <div id="content5" class="font-sans hidden px-6 py-6 pt-0 ml-4 text-black dark:text-black lg:text-sm lg:mt-1">
                    Prisen på en hjemmeside afhænger af dine ønsker og krav. Du vil ved kontakt få en estimeret pris, som vil ændre sig alt efter dine ønsker til det visuelle udtryk samt funktionalitet.
                </div>
            </div>
        </div>
    </div>
</section>





</template>

<style>

</style>

<script setup>
// FAQ 
    const toggleContent = (id) => {
    const content = document.getElementById(id);
    content.classList.toggle("hidden");
};

document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll("[data-toggle-content]");
    elements.forEach(function(element) {
        element.addEventListener("click", function() {
            const targetId = this.getAttribute("data-toggle-content");
            toggleContent(targetId);
        });
    });
});
</script>