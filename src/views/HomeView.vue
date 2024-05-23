<template>

<!-- Hero section -->
<section class="relative h-screen flex flex-col pt-20 content-start md:h-[40vh] lg:h-[100vh] lg:pt-20">
    <div class="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
        <video class="min-w-full min-h-full absolute object-cover" alt="Kvinde gør overflade rent"
            src="../assets/herovideo.mp4"
            type="video/mp4" autoplay muted loop>
        </video>
    </div>
    <div class="video-content z-10 pt-24 md:pt-20 lg:pt-32">
        <div>
            <p class="font-sans text-white dark:text-white px-4 text-sm md:text-lg md:text-center lg:text-lg lg:text-center">
                PAULAS RENGØRING | PROFESSIONEL RENGØRING
            </p>
            <h2 class="font-sans text-white dark:text-white text-left font-semibold px-4 text-5xl md:text-5xl md:text-center lg:px-0 lg:pb-2 lg:font-semibold lg:text-5xl lg:text-center">Rengøring til private og erhverv</h2>
            <p class="font-sans text-white dark:text-white px-4 pt-2 md:text-md md:px-20 md:text-center lg:text-lg lg:text-center lg:pt-3 lg:px-72">
                Jeg løser rengøringsopgaver for små og mellemstore virksomheder samt private. Jeg forstår vigtigheden af et rent miljø, og betydningen heraf for dig.
            </p>
        </div>
        <div class="font-sans row md:flex lg:flex px-4 justify-start text-sm pt-5 md:justify-center md:space-x-4 lg:px-0 lg:space-x-1 lg:space-y-0 lg:justify-center lg:text-md lg:pt-5">
            <div class="font-sans pb-4 md:px-0 md:pb-4 lg:pb-3">
                <RouterLink to="privatecleaning"> 
                    <button class="bg-transparent dark:bg-transparent text-white dark:text-white border-2 border-white font-semibold py-2 px-8 md:py-2 md:px-4 md:py-1 md:px-8 lg:text-md lg:py-3 lg:px-8 rounded-full lg:text-md lg:tracking-wider">
                        Privatrengøring
                    </button>
                </RouterLink>
            </div>
            <div class="font-sans pb-10 md:px-2 md:pb-7 lg:pb-16">
                <RouterLink to="commercialcleaning"> 
                    <button class="bg-transparent dark:bg-transparent text-white dark:text-white border-2 border-white font-semibold py-2 px-8 md:py-1 md:px-4 md:py-2 md:px-8 lg:text-md lg:py-3 lg:px-8 rounded-full lg:text-md lg:tracking-wider">
                        Erhvervsrengøring
                    </button>
                </RouterLink>
            </div>
            <CookieBanner v-if="showBanner" @hideBanner="showBanner = false"/>
        </div>
    </div>
</section>



<!-- Værdisæt section -->
<div class="bg-white dark:bg-white light:bg-white flex flex-col justify justify-center h-1/2 w-full p-8 md:pt-16 md:flex-row lg:flex-row lg:w-full lg:pt-20 lg:pb-16">
    <div class="bg-lightgray p-6 md:p-6 md:w-1/2 lg:w-2/5 lg:px-12">
        <p class="text-gray dark:text-gray text-xs pt-5 font-semibold pb-2 md:pt-1 lg:pt-10 lg:text-sm lg:tracking-wider">PAULAS RENGØRING | VÆRDISÆT</p>
        <p class="text-black dark:text-black pt-0 text-xl mt-3 font-semibold md:mx-0 md:text-md lg:mx-0 lg:text-lg lg:font-semibold lg:pt-2">Gensidig tillid</p>
        <p class="text-black dark:text-black text-sm mt-2 md:text-xs md:mx-0 lg:mx-0 lg:text-sm lg:mr-10 lg:pb-0">Det er vigtigt for mig, at vi skaber tillid til hinanden fra start, så vi kan indgå det bedste samarbejde med et stærkt fundament.</p>
        <p class="text-black dark:text-black pt-2 text-xl mt-3 font-semibold md:mx-0 md:text-md lg:mx-0 lg:text-lg lg:font-semibold lg:pt-2">Kundetilfredshed</p>
        <p class="text-black dark:text-black text-sm mt-2 md:text-xs md:mx-0 lg:mx-0 lg:text-sm lg:mr-10 lg:pb-0">Din tilfredshed med rengøringen, er af højeste prioritet for mig. Når du som kunde er glad for resultaterne, giver det en uvurderlig følelse af velvære.</p>
        <p class="text-black dark:text-black pt-2 text-xl mt-3 font-semibold md:mx-0 md:text-md lg:mx-0 lg:text-lg lg:font-semibold lg:pt-2">Tæt samarbejde</p>
        <p class="text-black dark:text-black text-sm mt-2 mb-5 md:text-xs md:mx-0 md:mb-0 lg:mx-0 lg:text-sm lg:mr-10 lg:pb-0">Kommunikationen imellem os er altafgørende, for at der kan dannes et trygt og tæt samarbejde. Jeg prioriterer den tillidsfulde relation.</p>
    </div>
    <div class="md:w-1/2 lg:w-2/5">
        <img src="../assets/Paulas-rengøring-værdisæt.jpg" alt="Kvinde giver kunde håndtryk">
    </div>
</div>


<!-- Guide section -->
<div class="bg-white light:bg-white dark:bg-white">
    <h2 class="font-sans text-2xl text-black pl-5 pr-10 pt-5 font-semibold md:pb-0 md:font-semibold md:text-3xl md:px-20 md:text-center lg:pt-0 lg:pb-5 lg:text-black lg:text-3xl lg:font-semibold lg:text-center">
        Går du i overvejelserne om at få rengøringshjælp ?
    </h2>
    <h2 class="font-sans text-sm text-black pl-5 pr-5 pt-5 font-normal md:px-10 md:pb-6 md:font-normal md:text-center lg:text-black lg:pt-1 lg:pb-10 lg:px-40 lg:text-sm lg:text-center">
        Har du har en travl hverdag, er du ældre og har behov for ekstra hjælp til at udføre rengøringen, eller vil du blot priotere din tid anderledes, så har jeg samlet nogle gode råd til dig i den indledende fase, som gerne skulle give dig det gode overblik inden valg af rengøringshjælp.
    </h2>
</div>

<div class="bg-white dark:bg-white light:bg-white px-0 flex flex-col justify justify-center h-full w-full p-8 md:px-0 md:flex-row md:pt-2 lg:flex-row lg:w-full lg:pt-0 lg:pb-5 lg:px-0">
    <div class="relative w-full md:w-full lg:w-full">
        <img src="../assets/Guide-billede.jpg" alt="Kvinde rengør bord" class="w-full h-auto">
    </div>
    <div class="bg-beige light:bg-beige dark:bg-beige p-6 md:p-0 w-full md:w-full lg:w-full lg:px-12">
        <p class="text-gray dark:text-gray text-sm pt-1 font-semibold pb-2 md:pt-10 md:mx-5 lg:pt-20 lg:text-sm lg:tracking-wider">PAULAS RENGØRING | GUIDE</p>
        <h2 class="text-black dark:text-black text-3xl font-semibold mt-2 md:text-3xl md:mx-5 lg:mx-0 lg:font-semibold lg:text-4xl lg:pl-5 lg:mr-10 lg:pb-0">Sådan får du mest mulig ud af din rengøringshjælp.</h2>
        <p class="text-black dark:text-black pt-2 text-lg mt-3 font-semibold md:mx-5 md:text-sm lg:text-lg lg:font-semibold lg:pt-2">Går du med overvejelserne om, at ansætte en professionel til at udføre rengøringshjælpen i dit hjem?</p>
        <p class="text-black dark:text-black pt-0 pb-2 text-sm mt-2 font-base md:pt-1 md:mx-5 md:font-base md:mx-0 md:text-sm lg:pl-5 lg:mx-0 lg:text-sm lg:font-base lg:pt-2">Jeg har samlet nogle råd til dig i den indledende fase, som sikrer dig at du får mest muligt ud af din rengøringshjælp, og opnår størst mulig tilfredshed. Du kan læser mere om guiden <RouterLink to="guide" class="text-black font-semibold">her.</RouterLink></p>
    </div>
</div>


<!-- Om sektion -->
<div class="bg-white dark:bg-white light:bg-white flex justify justify-center h-20 pt-4 md:h-24 md:pt-6 lg:pt-10">
    <h2 class="font-sans text-2xl text-black font-semibold md:font-semibold md:text-3xl md:px-20 md:text-center lg:pb-5 lg:text-black lg:text-3xl lg:font-semibold lg:text-center">Dit Lokale rengøringsfirma</h2>
</div>

<div class="bg-white dark:bg-white light:bg-white flex flex-col justify justify-center h-1/2 w-full p-8 pt-0 md:p-0 md:flex-row lg:flex-row lg:w-full lg:pt-3 lg:pb-16">
    <div class="bg-lightgray p-4 pt-0 md:p-6 md:pb-0 md:w-1/2 lg:w-2/5 lg:px-12">
        <p class="text-gray dark:gray text-xs pt-8 font-semibold pb-2 md:pt-4 lg:pt-10 lg:text-sm lg:tracking-wider">PAULAS RENGØRING | OM MIG</p>
        <h2 class="text-black dark:text-black text-2xl font-semibold pb-4 md:pb-2 lg:pb-6 lg:text-3xl">Jeg værdsætter tillid og tryghed, i det samarbejde jeg indgår med mine kunder </h2>
        <p class="text-black dark:text-black text-sm font-semibold md:pb-1 lg:font-semibold lg:text-base">Jeg startede Paulas Rengøring i 2014, da det længe havde været et ønske at gå selvstændig.</p>
        <p class="text-black dark:text-black text-sm pt-3 md:pt-1 lg:text-base lg:pt-2 lg:text-base">Sidenhen har jeg opbygget en loyal kundekreds i Ringkøbing-Skjern omregn, som jeg værner om og værdsætter. Personligt betyder gensidig tillid, og et trygt samarbejde meget i de kunderelationer jeg indgår i. Jeg tilbyder rengøring for private samt erhverv.</p>
        <div class="row pt-6 pb-4 md:flex lg:flex md:pt-3 lg:pt-6 lg:pb-0">
            <div class="py-3 md:pt-5 md:pr-3 lg:pt-0 lg:pr-3">
                <RouterLink to="privatecleaning"> 
                    <button class="bg-blue dark:bg-blue hover:bg-darkblue text-lightgray dark:text-lightgray font-semibold py-2 px-8 md:py-1 md:px-3 md:py-1 md:px-6 lg:text-md lg:py-2 lg:px-8 rounded-full lg:text-md">
                        Privatrengøring
                    </button>
                </RouterLink> 
            </div>
            <div class="md:pt-5 lg:pt-0">
                <RouterLink to="commercialcleaning"> 
                    <button class="bg-blue dark:bg-blue hover:bg-darkblue text-lightgray dark:text-lightgray font-semibold py-2 px-8 md:py-1 md:px-3 md:py-1 md:px-6 lg:text-md lg:py-2 lg:px-8 rounded-full lg:text-md">
                        Erhvervsrengøring
                    </button>
                </RouterLink>
            </div>
        </div>
    </div>
    <div class="md:w-1/2 lg:w-2/5">
        <img src="../assets/Paulasrengøring-om-billede.jpg" alt="Kvinde står med rengøringsprodukt">
    </div>
</div>


<!-- Ydelser sektion -->
<div class="bg-white light:bg-white dark:bg-white px-5 md:pt-5 md:px-40 lg:px-56">
    <div class="font-sans text-darkgray dark:text-darkgray pt-6 pb-2 text-center text-sm lg:text-lg lg:text-center lg:pt-0 lg:pb-2 lg:font-normal lg:tracking-wider">
        <p>PAULAS RENGØRING</p>
    </div>
    <div class="font-sans text-black dark:text-black font-semibold text-2xl pb-10 text-center md:pb-5 lg:text-3xl lg:text-center lg:font-semibold lg:pb-5">
        <h2>
            ''Jeg brænder for, at skabe skinnende resultater, hvor du som kunde er i centrum.'' 
        </h2>
    </div>
</div>

<div class="bg-whitelight:bg-white dark:bg-white flex justify-center">
    <div class="grid grid-cols-1 z-0 pb-10 md:grid-cols-2 md:pt-5 md:space-x-10 lg:grid-cols-2 lg:space-x-12 lg:pb-20">
        <div class="max-w-xs mx-auto mb-10 overflow-hidden shadow-lg bg-white dark:bg-white lg:p-10 lg:pb-0 relative">
            <img src="../assets/Shine-element.png" class="h-24 lg:h-40 pl-48 mt-56 absolute lg:pl-48 lg:mt-44">
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
                        <p class="font-sans font-semibold text-xs pt-1 pl-2 lg:text-sm text-black dark:text-black lg:pl-2 lg:font-semibold">
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
                        <p class="font-sans font-semibold text-xs pt-1 pl-2 lg:text-sm text-black dark:text-black lg:pl-2 lg:font-semibold">
                            ALM. RENGØRING
                        </p>
                    </div>
                    <div class="flex">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0,0,256,256"
                            style="fill:#000000;">
                            <g fill="#cdd1dc" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(10.66667,10.66667)"><path d="M12,2c-5.514,0 -10,4.486 -10,10c0,5.514 4.486,10 10,10c5.514,0 10,-4.486 10,-10c0,-1.126 -0.19602,-2.2058 -0.54102,-3.2168l-1.61914,1.61914c0.105,0.516 0.16016,1.05066 0.16016,1.59766c0,4.411 -3.589,8 -8,8c-4.411,0 -8,-3.589 -8,-8c0,-4.411 3.589,-8 8,-8c1.633,0 3.15192,0.49389 4.41992,1.33789l1.43164,-1.43164c-1.648,-1.194 -3.66656,-1.90625 -5.85156,-1.90625zM21.29297,3.29297l-10.29297,10.29297l-3.29297,-3.29297l-1.41406,1.41406l4.70703,4.70703l11.70703,-11.70703z"></path></g></g>
                            </svg>
                        </div>
                        <p class="font-sans font-semibold text-xs pt-1 pl-2 pb-5 lg:text-sm text-black dark:text-black lg:pl-2 lg:font-semibold">
                            VINDUESPUDSNING
                        </p>
                    </div>
                    <div class="font-sans px-6 pt-0 pb-5 lg:text-center">
                        <RouterLink to="privatecleaning"> 
                            <button class="bg-lightblue dark:bg-lightblue hover:lightblue text-sm text-black dark:text-black font-semibold py-3 px-10 rounded-full lg:text-md">
                                Læs mere
                            </button>
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
        <div class="max-w-xs mx-auto mb-10 overflow-hidden shadow-lg bg-white dark:bg-white lg:p-10 lg:pb-0 relative">
            <img src="../assets/Shine-element.png" class="h-24 lg:h-40 pl-48 mt-56 absolute lg:pl-48 lg:mt-44">
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
                        <p class="font-sans font-semibold text-xs pt-1 pl-2 lg:text-sm text-black dark:text-black lg:pl-2 lg:font-semibold">
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
                        <p class="font-sans font-semibold text-xs pt-1 pl-2 lg:text-sm text-black dark:text-black lg:pl-2 lg:font-semibold">
                            ALM. RENGØRING
                        </p>
                    </div>
                    <div class="flex">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0,0,256,256"
                            style="fill:#000000;">
                            <g fill="#cdd1dc" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(10.66667,10.66667)"><path d="M12,2c-5.514,0 -10,4.486 -10,10c0,5.514 4.486,10 10,10c5.514,0 10,-4.486 10,-10c0,-1.126 -0.19602,-2.2058 -0.54102,-3.2168l-1.61914,1.61914c0.105,0.516 0.16016,1.05066 0.16016,1.59766c0,4.411 -3.589,8 -8,8c-4.411,0 -8,-3.589 -8,-8c0,-4.411 3.589,-8 8,-8c1.633,0 3.15192,0.49389 4.41992,1.33789l1.43164,-1.43164c-1.648,-1.194 -3.66656,-1.90625 -5.85156,-1.90625zM21.29297,3.29297l-10.29297,10.29297l-3.29297,-3.29297l-1.41406,1.41406l4.70703,4.70703l11.70703,-11.70703z"></path></g></g>
                            </svg>
                        </div>
                        <p class="font-sans font-semibold text-xs pt-1 pl-2 pb-5 lg:text-sm text-black dark:text-black lg:pl-2 lg:font-semibold">
                            VINDUESPUDSNING
                        </p>
                    </div>
                    <div class="font-sans px-6 pt-0 pb-5 lg:text-center">
                        <RouterLink to="commercialcleaning"> 
                            <button class="bg-lightblue dark:bg-lightblue hover:lightblue text-sm text-black dark:text-black font-semibold py-3 px-10 rounded-full lg:text-md">
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
<section class="relative h-full flex flex-col items-center text-center content-start z-0 pt-10 md:flex-col lg:py-12">
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden">
        <img class="min-w-full min-h-full absolute object-cover" src="../assets/Kontakt-form-billede.jpg" alt="Kvinde rengør sofabord">
    </div>
    <div class="image-content text-white dark:text-white z-10 md:pt-10">
        <p class="text-sm md:mx-5 lg:text-sm lg:font-semibold lg:pt-0 text-white dark:text-white lg:text-center lg:tracking-wider">PAULAS RENGØRING | KONTAKT</p>
        <h2 class="font-sans text-4xl font-semibold lg:pt-0 text-center md:text-center lg:text-5xl lg:font-semibold lg:text-center">
            Har du spørgsmål?
        </h2>
        <p class="pb-10 font-sans text-sm text-center px-10 pt-3 md:pt-4 md:text-center md:px-10 lg:text-center lg:text-base lg:px-40 lg:pt-5"> 
            Du er altid velkommen til at kontakte mig, hvis du har behov for rådgivning eller har tvivlsspørgsmål. 
        </p>
    </div>
    
    <div class="flex justify justify-center flex-col md:flex-col md:w-full md:pl-40 md:pb-20 lg:flex-row lg:space-x-0 lg:pt-5 lg:w-3/4 z-20 lg:pt-24">
        <div class="bg-white dark:bg-white max-w-lg shadow-sm lg:w-2/3">
            <div class="bg-white dark:bg-white max-w-lg">
                <h2 class="mb-4 text-2xl tracking-tight font-semibold text-left pt-10 px-5 text-black dark:text-black md:px-5 md:pt-10 md:text-3xl md:text-left lg:text-3xl lg:px-5 lg:pr-10 lg:font-semibold lg:pt-10 lg:text-left">
                    Kontaktforumlar
                </h2>
                <p class="mb-8 text-sm text-left px-5 font-light text-black dark:text-black md:px-5 md:text-sm md:text-left lg:mb-16 lg:mb-4 lg:px-5 lg:font-normal lg:text-sm lg:text-left">
                    Udfyld venligst formularen herunder, så kontakter jeg dig hurtigst muligt.
                </p>
                <!--Mailchimp Contactform-->
                <div id="mc_embed_shell">
                    <div id="mc_embed_signup">
                        <form action="https://gmail.us17.list-manage.com/subscribe/post?u=529fa2bc5942a0147307ea268&amp;id=90a02a22b5&amp;v_id=4389&amp;f_id=00f8d5e3f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
                            <div id="mc_embed_signup_scroll">
                                <div class="mc-field-group text-black"><label for="mce-EMAIL">Din email <span class="asterisk">*</span></label><input type="email" name="EMAIL" class="required email" id="mce-EMAIL" required="" value=""></div><div class="mc-field-group text-black font-semibold"><label for="mce-FNAME">Dit fulde navn <span class="asterisk">*</span></label><input type="text" name="FNAME" class="required text" id="mce-FNAME" required="" value=""></div><div class="mc-field-group text-black font-semibold"><label for="mce-MMERGE3">Din besked </label><input type="text" name="MMERGE3" class=" text" id="mce-MMERGE3" value=""></div><div class="indicates-required text-black font-semibold text-sm"><span class="asterisk">*</span>Påkrævet</div><div id="mergeRow-gdpr" class="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group"><div class="content__gdpr text-black font-bold text-base"><label class="font-semibold pt-2">GDPR - Overholdelseserklæring</label></div><div class="content__gdpr text-black pt-2 text-xs lg:text-xs"><p>Vi tager dit privatliv alvorligt. Ved at indsende denne formular giver du dit samtykke til indsamling, behandling og opbevaring af dine personlige data i henhold til vores privatlivspolitik. Dine oplysninger vil udelukkende blive brugt med det formål at besvare din henvendelse. </p><div class="content__gdpr text-black font-semibold text-xs"></div><fieldset class="mc_fieldset gdprRequired mc-field-group" name="interestgroup_field"><label class="checkbox subfield pt-3 lg:pt-3" for="gdpr212271"><input type="checkbox" id="gdpr_212271" name="gdpr[212271]" class="gdpr" value="Y"><span>Ja</span></label><label class="checkbox subfield" for="gdpr212274"><input type="checkbox" id="gdpr_212274" name="gdpr[212274]" class="gdpr" value="Y"><span>Nej</span></label></fieldset><label class="font-semibold pt-5 text-lg lg:pt-5 lg:text-lg">Privatlivspolitik</label><p class="text-base text-xs lg:pt-2 lg:text-xs">For mere information om håndtering dine data og rettigheder under GDPR, henvises til vores privatlivspolitik <strong>her.</strong></p></div><div class="content__gdprLegal text-sm text-black"><p class="pt-4 pb-4 text-xs lg:text-xs">Vi bruger Mailchimp til vores kontaktforme. Du kan læse mere om Mailchimp's privatlivspolitik. <a class="text-darkblue" href="https://mailchimp.com/legal/terms">Læs mere</a></p></div></div>
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
        <div class="h-67 bg-lighgray light:bg-lightgray dark:bg-lightgray md:w-1/2 md:h-72 lg:h-96 lg:w-1/3 lg:justify-start lg:text-left">
            <h2 class="justify-start pr-24 font-sans text-2xl text-black pt-6 pb-6 font-semibold md:pb-5 md:pt-7 md:font-semibold md:text-left md:px-8 lg:pt-10 lg:pb-0 lg:text-black lg:text-2xl lg:font-semibold lg:pl-5">
                Kontaktoplysninger 
            </h2>
            <p class="text-black px-8 text-left lg:text-black lg:text-sm lg:px-5 lg:pt-2"> Ønsker du at kontakte mig pr. telefon, over mail eller Facebook er du også meget velkommen til at gøre dette.</p>
            <div class="flex justify-start px-8 pt-5 pb-2 lg:px-5 lg:pt-10">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#444444" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                </div>
                <p class="font-sans font-semibold text-xs pl-2 lg:text-xs text-black dark:text-black lg:pl-2 lg:tracking-wider">
                    60145811
                </p>
            </div>
            <div class="flex justify-start px-8 py-2 lg:px-5 lg:pt-5">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0,0,256,256" style="fill:#000000;">
                        <g fill="#444444" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
                        <g transform="scale(8.53333,8.53333)">
                            <path d="M15,3c-6.627,0 -12,5.373 -12,12c0,6.016 4.432,10.984 10.206,11.852v-8.672h-2.969v-3.154h2.969v-2.099c0,-3.475 1.693,-5 4.581,-5c1.383,0 2.115,0.103 2.461,0.149v2.753h-1.97c-1.226,0 -1.654,1.163 -1.654,2.473v1.724h3.593l-0.487,3.154h-3.106v8.697c5.857,-0.794 10.376,-5.802 10.376,-11.877c0,-6.627 -5.373,-12 -12,-12z"></path>
                        </g>
                        </g>
                    </svg>
                </div>
                <p class="font-sans font-semibold text-xs pl-2 lg:text-xs text-black dark:text-black lg:pl-2 lg:tracking-wider">
                    PAULAS RENGØRING
                </p>
            </div>
            <div class="flex justify-start px-8 py-2 pb-7 lg:px-5 lg:pt-5">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#444444">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 1.99 2H20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                        <path d="M0 0h24v24H0z" fill="none"/>
                    </svg>
                </div>
                <p class="font-sans font-semibold text-xs pl-2 lg:text-xs text-black dark:text-black lg:pl-2 lg:tracking-wider">
                    PAULASRENGORING@GMAIL.COM
                </p>
            </div>
        </div>
    </div>
</section>


<!-- Kundeanmeldelser -->
<div class="bg-white light:bg-white dark:bg-white pt-4 lg:pt-10">
    <div>
        <h2 class="font-sans text-black text-2xl font-semibold dark:text-black pt-10 pb-10 text-center md:pb-5 lg:text-3xl lg:text-center lg:font-semibold lg:pb-10">
            Det siger mine kunder 
        </h2>
    </div>
</div>

<div class="bg-white light:bg-white dark:bg-white">
    <div class="grid grid-cols-1 gap-y-10 md:gap-x-5 md:p-5 md:grid-cols-3 lg:grid-cols-3 lg:gap-20 lg:px-20 lg:pb-10">
        <div class="max-w-xs mx-auto overflow-hidden shadow-lg bg-white dark:bg-white">
            <div class="px-6 py-10 flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="gray" class="w-14 h-14">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                <div class="font-sans text-darkgray lg:text-darkgray font-bold text-xl mb-2 lg:text-lg lg:text-center lg:pt-2">Lisbeth</div>
                <p class="font-sans text-darkgray text-center text-sm text-base md:pt-2 lg:text-darkgray lg:text-center lg:text-sm lg:pt-2">
                    ''Jeg nyder hver gang Paula har været forbi, og rengøre vores hjem. Hun har en smittende personlighed og er professionel i hendes arbejde.''
                </p>
            </div>
        </div>
        <div class="max-w-xs mx-auto overflow-hidden shadow-lg bg-white dark:bg-white">
            <div class="px-6 py-10 flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="gray" class="w-14 h-14">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                <div class="font-sans text-darkgray lg:text-darkgray font-bold text-xl mb-2 lg:text-lg lg:text-center lg:pt-2">Kenneth</div>
                <p class="font-sans text-darkgray text-center text-sm text-base md:pt-2 lg:text-darkgray lg:text-center lg:text-sm lg:pt-2">
                    ''Grundet en rygskade, måtte jeg få rengøringshjælp på. Jeg må sige, at det er en fornøjelse at samarbejde med Paulas Rengøring hvor kvalieten er i top.''
                </p>
            </div>
        </div>
        <div class="max-w-xs mx-auto overflow-hidden shadow-lg bg-white dark:bg-white">
            <div class="px-6 py-10 flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="gray" class="w-14 h-14">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                <div class="font-sans text-darkgray lg:text-darkgray font-bold text-xl mb-2 lg:text-lg lg:text-center lg:pt-2">Dorthe</div>
                <p class="font-sans text-darkgray text-center text-sm text-base md:pt-2 lg:text-darkgray lg:text-center lg:text-sm lg:pt-2">
                    ''I en travl hverdag er det en stor prioritet for mig, at mit hjem er pænt og rent. Paula er fantastik til at gøre rent, og jeg har stor tillid til hende personligt og professionelt.''
                </p>
            </div>
        </div>
    </div>
</div>

<!-- FAQ -->
<div class="bg-white light:bg-white dark:bg-white py-4 mx-auto">
    <div class="text-center mb-5">
        <h3 class="font-sans text-2xl text-center font-semibold pt-12 lg:text-3xl tracking-tight text-black dark:text-black lg:font-semibold">
            Ofte stillede spørgsmål
        </h3>
    </div>
</div>

<section class="pb-10 bg-white light:bg-white dark:bg-white text-darkgray dark:text-darkgray flex lg:justify-center lg:pb-20">
    <div class="container flex justify-center px-4 pb-10 mx-auto md:p-8">
        <div class="space-y-4 w-full md:w-full lg:w-4/5 lg:px-40">
            <div class="w-full md:w-full w-4/5 bg-white dark:white shadow-md lg:shadow-md cursor-pointer" data-toggle-content="content1">
                <div class="flex justify-between items-center px-5 py-4 focus:outline-none focus-visible:ri lg:pl-8">
                    <span class="font-sans lg:font-semibold font-base text-xs text-black dark:text-black md:text-lg md:font-semibold lg:text-semibold lg:text-sm lg:font-semibold ">Hvor meget koster det at få gjort rent?</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </div>
                <div id="content1" class="font-sans hidden px-6 py-6 pt-0 ml-4 text-black dark:text-black lg:text-sm lg:mt-1">
                    Jeg kører en fast timepris på 280 kr. ekskl. moms.
                </div>
            </div>
            <div class="w-full md:w-full w-4/5 bg-white dark:white shadow-md lg:shadow-md cursor-pointer" data-toggle-content="content2">
                <div class="flex justify-between items-center px-5 py-4 focus:outline-none focus-visible:ri lg:pl-8">
                    <span class="lg:font-semibold font-base text-xs text-black dark:text-black md:text-lg md:font-semibold lg:text-semibold lg:text-sm lg:font-semibold ">Kan ydelserne blive skræddersyet efter behov?</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </div>
                <div id="content2" class="font-sans hidden px-6 py-6 pt-0 ml-4 text-black dark:text-black lg:text-sm lg:mt-1">
                    Det er dine behov og dine ønsker der er i højsædet. Ydelserne kan derfor sagtens blive skræddersyet, så de passer til din behov og ønsker, og dette vil vi sammen kunne lægge en plan for.
                </div>
            </div>
            <div class="w-full md:w-full w-4/5 bg-white dark:white shadow-md lg:shadow-md cursor-pointer" data-toggle-content="content3">
                <div class="flex justify-between items-center px-5 py-4 focus:outline-none focus-visible:ri lg:pl-8">
                    <span class="lg:font-semibold font-base text-xs text-black dark:text-black md:text-lg md:font-semibold lg:text-semibold lg:text-sm lg:font-semibold ">Hvor ofte bør jeg få gjort rent?</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </div>
                <div id="content3" class="font-sans hidden px-6 py-6 pt-0 ml-4 text-black dark:text-black lg:text-sm lg:mt-1">
                    Dette er helt og holdent op til dig. Nogle vælger at få rengøringshjælp 1 gang om ugen, mens andre kun føler et behov for at få rengøringshjælp 1 gang om måneden. Rengøringshjælpen skal passe ind i din hverdag og til dit budget, og det er derfor noget vi vil tage en snak om under det indledende møde. 
                </div>
            </div>
            <div class="w-full md:w-full w-4/5 bg-white dark:white shadow-md lg:shadow-md cursor-pointer" data-toggle-content="content4">
                <div class="flex justify-between items-center px-5 py-4 focus:outline-none focus-visible:ri lg:pl-8">
                    <span class="font-sans lg:font-semibold font-base text-xs text-black dark:text-black md:text-lg md:font-semibold lg:text-semibold lg:text-sm lg:font-semibold ">Skal jeg være hjemme, når rengøringen kommer?</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </div>
                <div id="content4" class="font-sans hidden px-6 py-6 pt-0 ml-4 text-black dark:text-black lg:text-sm lg:mt-1">
                    Det er helt op til dig, om du ønsker at være hjemme mens rengøringsopgaverne bliver udført, og er noget som enhver rengøringshjælp skal respektere. Det handler om, hvad der gør dig tryg, og hvad du har det bedst med. 
                </div>
            </div>
            <div class="w-full md:w-full w-4/5 bg-white dark:white shadow-md lg:shadow-md cursor-pointer" data-toggle-content="content5">
                <div class="flex justify-between items-center px-5 py-4 focus:outline-none focus-visible:ri lg:pl-8">
                    <span class="font-sans lg:font-semibold font-base text-xs text-black dark:text-black md:text-lg md:font-semibold lg:text-semibold lg:text-sm lg:font-semibold ">Hvor kan jeg komme i kontakt med Paula?</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </div>
                <div id="content5" class="font-sans hidden px-6 py-6 pt-0 ml-4 text-black dark:text-black lg:text-sm lg:mt-1">
                    Du kan komme i kontakt med Paula pr. telefon og mail, eller du kan udfylde kontaktformularen, som findes på Kontakt-siden.
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
#mce-FNAME {font-weight: normal}
#mce-MMERGE3 {font-weight: normal}


/* Base styles */
.relative {
    position: relative;
}
.center-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #c4a484; /* Replace with your actual color */
    color: #000000;
    border-radius: 9999px;
    font-weight: 400;
    padding: 0.5rem 2rem; /* 8px 32px */
    display: none; /* Hidden by default */
}
.md\:inline-block {
    display: inline-block;
}
.lg\:hidden {
    display: none;
}

/* Medium screen */
@media (min-width: 768px) {
    .center-button {
        padding: 0.25rem 1.5rem; /* 4px 24px */
        display: inline-block; /* Visible on medium screens */
    }
}
@media (min-width: 1024px) {
    .center-button {
        font-size: 1rem; /* 16px */
        padding: 0.5rem 2rem; /* 8px 32px */
        font-weight: 600;
    }
}

</style>


<script>
import CookieBanner from '../components/CookieBanner.vue'

export default {
  name: 'App',
  components: {
    CookieBanner
  },
  data: function() {
    return {
        showBanner: !(this.$posthog.has_opted_in_capturing() || this.$posthog.has_opted_out_capturing())
    }
  }
}

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