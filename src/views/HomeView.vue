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
<div class="bg-white light:bg-white dark:bg-white pt-12 px-5 columns-1 md:gap-x-0 md:columns-2 lg:px-52 lg:columns-2 lg:gap-x-0 lg:pt-20">
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
<div class="bg-white light:bg-white dark:bg-white">
    <h2 class="font-sans text-2xl text-black pl-5 pr-10 pt-10 font-semibold md:pb-0 md:font-semibold md:text-3xl md:px-20 md:text-center lg:pt-20 lg:pb-5 lg:text-black lg:text-3xl lg:font-semibold lg:text-center">
        Går du i overvejelserne om at få rengøringshjælp ?
    </h2>
    <h2 class="font-sans text-sm text-black pl-5 pr-3 pt-5 font-normal md:px-10 md:pb-10 md:font-normal md:text-center lg:text-black lg:pt-1 lg:pb-10 lg:px-40 lg:text-sm lg:text-center">
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form. 
        by injected humour, or randomised words which don't look even. There are many variations of passages of Lorem Ipsum available, 
        but the majority have suffered alteration in some form. 
    </h2>
</div>

<div class="bg-white light:bg-white dark:bg-white columns-1 md:gap-x-0 md:columns-2 lg:columns-2 lg:gap-x-0 lg:pt-5">
    <div class="pt-10 md:pt-0 lg:pt-0">
        <img src="../assets/Guide-billede.jpg" alt="Guide-billede">
    </div>
    <div class="bg-beige light:bg-beige dark:bg-beige px-5 lg:px-20">
        <p class="font-sans text-gray dark:gray text-sm pt-8 md:px-2 md:pt-5 lg:text-sm lg:font-semibold lg:pt-12 lg:tracking-wider">GUIDE</p>
        <h2 class="font-sans text-black dark:text-black pr-10 text-2xl font-semibold mt-3 pb-3 md:px-2 lg:text-4xl lg:font-semibold lg:pt-0">Sådan får du mest mulig ud af din rengøringshjælp.</h2>
        <p class="font-sans text-black dark:text-black pb-3 md:px-2 md:text-xs lg:text-sm lg:pt-3 lg:pr-20 lg:font-semibold">
            Går du med overvejelserne om, at ansætte en professionel til at udføre rengøringshjælpen i dit hjem? 
        </p>
        <p class="font-sans text-black dark:text-black pb-5 md:px-2 md:text-xs lg:text-sm lg:pt-1 lg:pr-20 lg:pb-10">Jeg har samlet nogle råd til dig i den indledende fase, 
            som sikrer dig at du får mest muligt ud af din rengøringshjælp, og bliver mest mulig tilfreds. 
        </p>
        <div class="font-sans pb-10 md:px-2 md:pb-7 lg:pb-12">
            <RouterLink to="guide"> 
                <button class="bg-darkbeige light:bg-darkbeige dark:bg-darkbeige rounded-full text-black dark:text-black font-normal py-2 px-8 md:py-1 md:px-6 lg:text-md lg:py-2 lg:px-8 lg:text-md lg:font-semibold">
                    Læs mere
                </button>
            </RouterLink>
        </div>
    </div>
</div>

<!-- Ydelser sektion -->
<div class="bg-white light:bg-white dark:bg-white px-5 md:px-40 lg:px-56">
    <div class="font-sans text-darkgray dark:text-darkgray pt-12 pl-5 pb-0 text-center text-sm pb-2 lg:text-lg lg:text-center lg:pt-20 lg:pb-2 lg:font-normal lg:tracking-wider">
        <p>PAULAS RENGØRING</p>
    </div>
    <div class="font-sans text-black dark:text-black font-semibold text-2xl pb-10 text-center lg:text-3xl lg:text-center lg:font-semibold lg:pb-10">
        <h2>
            ''Jeg brænder for, at skabe skinnende resultater, hvor du som kunde er i centrum.'' 
        </h2>
    </div>
</div>

<div class="bg-whitelight:bg-white dark:bg-white flex justify-center">
    <div class="grid grid-cols-1 pb-10 md:grid-cols-2 md:pt-5 md:space-x-10 lg:grid-cols-2 lg:space-x-12 lg:pb-20">
        <div class="max-w-xs mx-auto mb-10 overflow-hidden shadow-lg bg-white dark:bg-white lg:p-10 lg:pb-0 relative">
            <img src="../assets/Shine-element.png" class="h-24 lg:h-40 pl-44 mt-56 absolute lg:pl-48 lg:mt-44" alt="Shine-element">
                <div class="absolute top-0 left-0 w-full h-32 bg-darkblue dark:bg-darkblue lg:top-3 lg:left-0 lg:w-full lg:h-40"></div>
                    <div class="px-6 py-4 relative z-10">
                        <div class="font-sans pb-10 pt-5 font-bold text-2xl text-white dark:text-white lg:text-3xl lg:pt-0 lg:pb-10">
                            <h2>
                                PRIVAT
                            </h2>
                            <h2>
                                RENGØRING
                            </h2>
                        </div>
                    <div class="space-y-5">
                    <div class="flex pt-5 lg:pt-12">
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
        <div class="max-w-xs mx-auto mb-10 overflow-hidden shadow-lg bg-white dark:bg-white lg:p-10 lg:pb-0 relative">
            <img src="../assets/Shine-element.png" class="h-24 lg:h-40 pl-44 mt-56 absolute lg:pl-48 lg:mt-44" alt="Shine-element">
                <div class="absolute top-0 left-0 h-32 w-full bg-darkblue dark:bg-darkblue lg:top-3 lg:left-0 lg:w-full lg:h-40"></div>
                    <div class="px-6 py-4 relative z-10">
                        <div class="font-sans pb-10 pt-5 font-bold text-2xl text-white dark:text-white lg:text-3xl lg:pt-0 lg:pb-10">
                            <h2>
                                ERHVERVS
                            </h2>
                            <h2>
                                RENGØRING
                            </h2>
                        </div>
                    <div class="space-y-5">
                    <div class="flex pt-5 lg:pt-12">
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
                        <RouterLink to="commercialcleaning"> 
                            <button class="bg-lightblue dark:bg-lightblue hover:lightblue text-sm text-black dark:text-black font-semibold py-2 px-8 rounded-full lg:text-md">
                                Læs mere
                            </button>
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- kontaktformular sektion -->
<section class="relative h-full flex flex-col items-center text-center content-start pt-10 py-12 lg:py-12">
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden">
        <img class="min-w-full min-h-full absolute object-cover" src="../assets/Sprøgsmål-billede.jpg" alt="Private-cleaning">
    </div>
    <div class="image-content text-white dark:text-white z-10 md:pt-10">
        <p class="text-sm md:mx-5 lg:text-sm lg:font-semibold lg:pt-0 text-white dark:text-white lg:text-center lg:tracking-wider">PAULAS RENGØRING | KONTAKT</p>
        <h2 class="font-sans text-4xl font-semibold text-center md:text-center lg:text-5xl lg:font-semibold lg:text-center">
            Har du spørgsmål?
        </h2>
        <p class="pb-10 font-sans text-sm text-center px-10 pt-3 md:pt-4 md:text-center md:px-10 lg:text-center lg:text-sm lg:px-40 lg:pt-5">There are many variations of passages of Lorem Ipsum available, but the majority 
            have suffered alteration in some form. by injected humour, or randomised words which
            don't look even slightly believable. 
        </p>
    </div>
    
    <div class="flex justify justify-center flex-col lg:flex-row lg:space-x-0 lg:pt-10 lg:w-3/4 z-20 lg:pt-24">
        <div class="bg-white dark:bg-white max-w-lg shadow-sm lg:w-2/3">
            <div class="bg-white dark:bg-white max-w-lg">
                <h2 class="mb-4 text-4xl tracking-tight font-semibold text-left pt-10 px-5 text-black dark:text-black md:px-5 md:pt-10 md:text-3xl md:text-left lg:text-3xl lg:px-5 lg:pr-10 lg:font-semibold lg:pt-10 lg:text-left">
                    Lad os tage en uforpligtende snak om dine ønsker og behov.
                </h2>
                <p class="mb-8 text-sm text-left px-5 font-light text-black dark:text-black md:px-5 md:text-sm md:text-left lg:mb-16 lg:mb-4 lg:px-5 lg:font-normal lg:text-sm lg:text-left">
                    Udfyld venligst formularen herunder, så kontakter jeg dig hurtigst muligt.
                </p>
                <!--Mailchimp Contactform-->
                <div id="mc_embed_shell">
                    <div id="mc_embed_signup">
                        <form action="https://gmail.us17.list-manage.com/subscribe/post?u=529fa2bc5942a0147307ea268&amp;id=90a02a22b5&amp;v_id=4389&amp;f_id=00f8d5e3f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
                            <div id="mc_embed_signup_scroll">
                                <div class="mc-field-group text-black"><label for="mce-EMAIL">Din email <span class="asterisk">*</span></label><input type="email" name="EMAIL" class="required email" id="mce-EMAIL" required="" value=""></div><div class="mc-field-group text-black font-semibold"><label for="mce-FNAME">Dit fulde navn <span class="asterisk">*</span></label><input type="text" name="FNAME" class="required text" id="mce-FNAME" required="" value=""></div><div class="mc-field-group text-black font-semibold"><label for="mce-MMERGE3">Din besked </label><input type="text" name="MMERGE3" class=" text" id="mce-MMERGE3" value=""></div><div class="indicates-required text-black font-semibold text-sm"><span class="asterisk">*</span>Påkrævet</div><div id="mergeRow-gdpr" class="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group"><div class="content__gdpr text-black font-bold text-base"><label>GDPR - overholdelseserklæring</label></div><div class="content__gdpr text-black text-sm"><p>Vi tager dit privatliv alvorligt. Ved at indsende denne formular giver du dit samtykke til indsamling, behandling og opbevaring af dine personlige data i henhold til vores privatlivspolitik. Dine oplysninger vil udelukkende blive brugt med det formål at besvare din henvendelse. </p><div class="content__gdpr text-black font-semibold text-xs"></div><fieldset class="mc_fieldset gdprRequired mc-field-group" name="interestgroup_field"><label class="checkbox subfield" for="gdpr212271"><input type="checkbox" id="gdpr_212271" name="gdpr[212271]" class="gdpr" value="Y"><span>Ja</span></label><label class="checkbox subfield" for="gdpr212274"><input type="checkbox" id="gdpr_212274" name="gdpr[212274]" class="gdpr" value="Y"><span>Nej</span></label></fieldset><p class="text-base pt-4">For mere information om håndtering dine data og rettigheder under GDPR, henvises til vores privatlivspolitik her.</p></div><div class="content__gdprLegal text-black"><p class="pt-4 pb-4">Vi bruger Mailchimp til vores kontaktforme.<a class="text-darkblue" href="https://mailchimp.com/legal/terms"> Læs mere</a> om Mailchimp's privatlivspolitik.</p></div></div>
                                <div id="mce-responses" class="clear foot">
                                    <div class="response" id="mce-error-response" style="display: none;"></div>
                                    <div class="response" id="mce-success-response" style="display: none;"></div>
                                </div>
                                <div style="position: absolute; left: -5000px;" aria-hidden="true">/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */
                                    <input type="text" name="b_529fa2bc5942a0147307ea268_90a02a22b5" tabindex="-1" value="">
                                </div>
                                <div class="optionalParent">
                                    <div class="clear foot">
                                        <input type="submit" name="subscribe" id="mc-embedded-subscribe" class="button" value="SEND">
                                        <p style="margin: 0px auto;"><a href="http://eepurl.com/iPjQYc" title="Mailchimp - email marketing made easy and fun"><span style="display: inline-block; background-color: transparent; border-radius: 4px;"></span></a></p>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="h-48 bg-lightgray light:bg-lightgray dark:bg-lightgray md:h-60 lg:h-96 lg:w-1/3 lg:justify-start lg:text-left">
            <h2 class="justify-start pr-24 font-sans text-2xl text-black pt-6 pb-6 font-semibold md:pr-60 md:pb-10 md:font-semibold md:text-center lg:pt-24 lg:pb-0 lg:text-black lg:text-2xl lg:font-semibold lg:pl-8">
                Kontaktoplysninger 
            </h2>
            <div class="flex justify-start px-8 pb-2 lg:pt-10">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#444444" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                </div>
                <p class="font-sans text-base text-sm pl-2 lg:text-xs text-black dark:text-black lg:pl-2 lg:tracking-wider">
                    60145811
                </p>
            </div>
            <div class="flex justify-start px-8 py-2 lg:pt-5">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0,0,256,256" style="fill:#000000;">
                        <g fill="#444444" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
                        <g transform="scale(8.53333,8.53333)">
                            <path d="M15,3c-6.627,0 -12,5.373 -12,12c0,6.016 4.432,10.984 10.206,11.852v-8.672h-2.969v-3.154h2.969v-2.099c0,-3.475 1.693,-5 4.581,-5c1.383,0 2.115,0.103 2.461,0.149v2.753h-1.97c-1.226,0 -1.654,1.163 -1.654,2.473v1.724h3.593l-0.487,3.154h-3.106v8.697c5.857,-0.794 10.376,-5.802 10.376,-11.877c0,-6.627 -5.373,-12 -12,-12z"></path>
                        </g>
                        </g>
                    </svg>
                </div>
                <p class="font-sans text-base text-sm pl-2 lg:text-xs text-black dark:text-black lg:pl-2 lg:tracking-wider">
                    PAULAS RENGØRING
                </p>
            </div>
            <div class="flex justify-start px-8 py-2 lg:pt-5">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#444444">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 1.99 2H20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                        <path d="M0 0h24v24H0z" fill="none"/>
                    </svg>
                </div>
                <p class="font-sans text-base text-sm pl-2 lg:text-xs text-black dark:text-black lg:pl-2 lg:tracking-wider">
                    PAULASRENGORING@GMAIL.COM
                </p>
            </div>
        </div>
    </div>
</section>


<!-- Kundeanmeldelser -->
<div class="bg-white light:bg-white dark:bg-white lg:pt-10">
    <div>
        <h2 class="font-sans text-black text-2xl font-semibold dark:text-black pt-10 pb-10 text-center lg:text-4xl lg:text-center lg:font-semibold lg:pb-20">
            Det siger mine kunder 
        </h2>
    </div>
</div>

<div class="bg-white light:bg-white dark:bg-white">
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

<div class="bg-white light:bg-white dark:bg-white py-4 mx-auto">
    <div class="text-center mb-5">
        <h3 class="font-sans text-2xl text-center font-semibold pt-12 lg:text-4xl tracking-tight text-black dark:text-black lg:font-semibold">
            Ofte stillede spørgsmål
        </h3>
    </div>
</div>

<!-- FAQ -->
<section class="pb-10 bg-white light:bg-white dark:bg-white text-darkgray dark:text-darkgray flex lg:justify-center lg:pb-20">
    <div class="container flex justify-center px-4 pb-10 mx-auto md:p-8">
        <div class="space-y-4 w-full md:w-full lg:w-4/5 lg:px-40">
            <div class="w-full md:w-full w-4/5 bg-white dark:white shadow-md lg:shadow-md cursor-pointer" data-toggle-content="content1">
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
            <div class="w-full md:w-full w-4/5 bg-white dark:white shadow-md lg:shadow-md cursor-pointer" data-toggle-content="content2">
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
            <div class="w-full md:w-full w-4/5 bg-white dark:white shadow-md lg:shadow-md cursor-pointer" data-toggle-content="content3">
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
            <div class="w-full md:w-full w-4/5 bg-white dark:white shadow-md lg:shadow-md cursor-pointer" data-toggle-content="content4">
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
            <div class="w-full md:w-full w-4/5 bg-white dark:white shadow-md lg:shadow-md cursor-pointer" data-toggle-content="content5">
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
#mc-embedded-subscribe-form input[type=checkbox]{display: inline; width: auto;margin-right: 10px;}
#mergeRow-gdpr {margin-top: 20px;}
#mergeRow-gdpr fieldset label {font-weight: normal;}
#mc-embedded-subscribe-form .mc_fieldset{border:none;min-height: 0px;padding-bottom:0px;}
#mc-embedded-subscribe {background-color:rgb(110, 118, 167); border-radius: 50%;}
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