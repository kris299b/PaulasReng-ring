<template>

    <!-- Hero section -->
    <section class="relative h-screen flex flex-col items-center py-20 content-start">
        <div class="heroimage absolute top-0 left-0 w-full h-full overflow-hidden">
            <img class="min-w-full min-h-full absolute object-cover" src="../assets/erhverv-billede.jpg" alt="Commercial-cleaning">
        </div>
        <div class="image-content z-10 pt-40 md:pt-80 lg:pt-48 lg:text-left">
            <div>
                <h2 class="font-sans text-white dark:text-white px-5 text-3xl md:text-4xl lg:px-0 lg:pb-2 lg:font-semibold lg:text-5xl">Professionel rengøring til erhverv</h2>
                <p class="font-sans text-white dark:text-white md:text-sm lg:text-lg">
                    Jeg løser rengøringsopgaver for små og mellemstore virksomheder, og institutioner.
                </p>
            </div>
            <div class="font-sans flex flex-col space-y-4 px-24 text-sm pt-5 md:flex-row md:justify-center md:space-x-4 lg:flex-row lg:space-x-4 lg:space-y-0 lg:justify-start lg:px-0 lg:text-md lg:pt-5">
                <RouterLink to="contact"> 
                    <button class="flex bg-white dark:bg-white py-2 px-4 hover:white text-black dark:text-black font-semibold lg:py-2 lg:px-8 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                        <p class="lg:pl-2">Lad os snakke om dine ønsker og behov</p>
                    </button>
                </RouterLink>
            </div>
        </div>
    </section>
    
    
    <!-- Tryghed-section -->
    
    <div class="bg-white light:bg-white dark:bg-white">
        <h2 class="text-center text-2xl pt-10 pb-5 font-semibold text-black dark:text-black lg:font-semibold lg:text-3xl lg:text-center lg:pt-20">Tryghed i vores samarbejde</h2>
    </div>
    
    <div class="bg-white light:bg-white dark:bg-white columns-1 md:gap-x-0 md:columns-2 lg:columns-2 lg:pt-5 lg:gap-x-0">
        <div class="bg-lightgray light:bg-lightgray dark:bg-lightgray px-5 lg:px-20 lg:h-96">
            <p class="font-sans text-gray dark:gray text-sm pt-8 lg:text-sm lg:font-semibold lg:tracking-wider lg:pt-10">PAULAS RENGØRING | TRYGHED</p>
            <h2 class="font-sans text-black dark:text-black pr-10 text-3xl font-semibold mt-3 pb-3 lg:font-semibold lg:text-4xl lg:font-normal lg:pt-0">Det er vigtigt for mig, at du er tryg i vores samarbejde.</h2>
            <p class="font-sans text-black dark:text-black pb-3 lg:pt-4">There are many variations of passages of Lorem Ipsum available, but the majority 
            have suffered alteration.
            </p>
            <p class="font-sans text-black dark:text-black pb-8 lg:pt-2 lg:pr-20">By injected humour, or randomised words which don't look 
                even slightly believable. If you need it. 
            </p>
        </div>
        <div class="pt-0 lg:pt-0">
            <img src="../assets/Erhverv-tryghed.jpg" alt="Erhverv-tryghed">
        </div>
    </div>
    
    <!-- Tilpassede løsninger erhvervsrengøring - section -->
    <!-- Tilpassede løsninger erhvervsrengøring - section -->
<div class="bg-white dark:bg-white text-black dark-text-black lg:pt-20">
    <p class="text-left px-5 pt-12 text-2xl font-semibold md:text-center md:pb-10 md:px-40 lg:font-semibold lg:text-center lg:text-3xl">
        Skræddersyede løsninger tilpasset dine ønsker og behov 
    </p>
</div>

   <div class="bg-white light:bg-white dark:bg-white pb-0 columns-1 md:gap-x-0 md:columns-2 lg:columns-2 lg:gap-x-0 lg:pt-10 lg:pb-20 lg:p-10">
    <div class="pt-10 md:pt-0 lg:pt-0">
        <img src="../assets/Paulas-rengøring.jpg" alt="tilpassede-løsninger-billede">
    </div>
    <div class="bg-lightgray light:bg-lightgray dark:bg-lightgray px-5 lg:px-20">
        <p class="font-sans text-gray dark:gray text-sm pt-8 md:px-2 md:pt-5 lg:text-sm lg:font-semibold lg:pt-12 lg:tracking-wider">PAULAS RENGØRING | ERHVERVSRENGØRING</p>
        <h2 class="font-sans text-black dark:text-black pr-10 text-3xl font-semibold mt-3 pb-3 md:pt-5 md:px-2 lg:text-4xl lg:font-semibold lg:pt-0">Tilpassede rengøringsløsninger</h2>
        <p class="font-sans text-black dark:text-black pb-3 md:px-2 md:text-xs lg:text-sm lg:pt-3 lg:pr-20 lg:font-semibold">
            Jeg tilbyder altid skræddersyede løsninger, som tager udgangspunkt i dine ønsker og behov.  
        </p>
        <p class="font-sans text-black dark:text-black pb-5 md:pb-2 md:px-2 md:text-xs lg:text-sm lg:pt-1 lg:pr-20 lg:pb-5"> 
            Lad os tage en uforpligtigende snak om det, du har brug for hjælp til, og hvor ofte du har behov for rengøringshjælp. Vi vil i fællesskab sammensætte den bedste løsning for dig. Jeg glæder mig til at høre fra dig. 
        </p>
        <h2 class="font-sans text-black dark:text-black pr-10 text-2xl font-semibold mt-3 pb-3 md:px-2 lg:text-2xl lg:font-semibold lg:pt-0">Kontakt oplysninger</h2>
        <div class="flex justify-start px-0 pt-3 md:pt-2 lg:px-3 pb-2 lg:pb-0 lg:pt-3">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#444444" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
            </div>
            <p class="font-sans text-base text-sm pl-2 lg:text-xs text-black dark:text-black lg:pl-2 lg:tracking-wider">
                60145811
            </p>
        </div>
        <div class="flex justify-start px-0 lg:px-3 py-2 lg:pb-0 lg:pt-5">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0,0,256,256" style="fill:#000000;">
                        <g fill="#444444" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
                        <g transform="scale(8.53333,8.53333)">
                            <path d="M15,3c-6.627,0 -12,5.373 -12,12c0,6.016 4.432,10.984 10.206,11.852v-8.672h-2.969v-3.154h2.969v-2.099c0,-3.475 1.693,-5 4.581,-5c1.383,0 2.115,0.103 2.461,0.149v2.753h-1.97c-1.226,0 -1.654,1.163 -1.654,2.473v1.724h3.593l-0.487,3.154h-3.106v8.697c5.857,-0.794 10.376,-5.802 10.376,-11.877c0,-6.627 -5.373,-12 -12,-12z"></path>
                        </g>
                        </g>
                    </svg>
                </div>
                <p class="font-sans text-base text-sm pl-2 lg:pb-0 lg:text-xs text-black dark:text-black lg:pl-2 lg:tracking-wider">
                    PAULAS RENGØRING
                </p>
            </div>
            <div class="flex justify-start px-0 lg:px-3 py-2 lg:pt-5">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#444444">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 1.99 2H20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                        <path d="M0 0h24v24H0z" fill="none"/>
                    </svg>
                </div>
                <p class="font-sans text-base text-sm pl-2 pb-10 lg:text-xs text-black dark:text-black lg:pl-2 lg:pb-10 lg:tracking-wider">
                    PAULASRENGORING@GMAIL.COM
                </p>
            </div>
    </div>
</div>
    
    <!-- Forløb-sektion -->
<div class="bg:white light:bg-white dark:bg-white lg:pt-10 lg:pb-0">
   <h2 class="text-2xl text-left px-5 font-sans pt-12 pb-0 font-semibold text-black md:text-center md:pb-10 lg:pt-0 dark:text-black lg:text-center lg:font-semibold lg:text-3xl">Hvordan foregår forløbet ?</h2> 
</div>

<div class="bg-white light:bg-white dark:bg-white columns-1 md:gap-x-0 md:columns-2 lg:columns-2 lg:gap-x-0 lg:pt-5 lg:pb-20">
    <div class="pt-10 md:pt-0 lg:pt-0">
        <img src="../assets/Forløb-billede.jpg" alt="Forløb-billede">
    </div>
    <div class="bg-lightgray light:bg-lightgray dark:bg-lightgray px-5 lg:px-20 lg:pb-12">
        <p class="font-sans text-gray dark:gray text-sm pt-8 md:px-2 md:pt-7 lg:text-sm lg:font-semibold lg:pt-16 lg:tracking-wider">PAULAS RENGØRING | FORLØBET</p>
        <h2 class="font-sans text-black dark:text-black pr-10 text-2xl font-semibold mt-3 pb-3 md:px-2 lg:text-4xl lg:font-semibold lg:pt-0 lg:pr-10">Sådan foregår forløbet hos mig.</h2>
        <div class="flex pt-2 pb-2 lg:pt-10">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="darkgray" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
            </div>
            <p class="font-sans font-semibold text-lg  pl-2 lg:text-lg text-black dark:text-black lg:font-semibold lg:pl-3">
                Indledende samtale
            </p>
        </div>
        <div class="font-sans text-black dark:black text-semibold text-sm lg:pt-2 lg:pl-9 ">
            <p>I den indledende samtale, vil vi drøfte dine ønsker og behov, så vi sammen kan skræddersy den rette rengøringshjælp til dig. Vi vil her aftale en dato, hvor jeg kan komme ud til dig og holde et formøde.</p>
        </div>
        <div class="flex pt-6 pb-2 lg:pt-8">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="darkgray" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
            </div>
            <p class="font-sans font-semibold text-lg  pl-2 lg:text-lg text-black dark:text-black lg:font-semibold lg:pl-3">
                Formøde 
            </p>
        </div>
        <div class="font-sans text-black dark:black text-semibold text-sm lg:pt-2 lg:pl-9 ">
            <p>Jeg kommer efter aftale hjem til dig, hvor vi får mulighed for at snakke sammen ansigt til ansigt. Vi vil gennemgå dine ønsker og behov, så vi kan udarbejde en arbejdsplan til dig. Det er vigtigt for mig, at du som kunde føler dig tryg i samarbejdet, og du får lejlighed til at stille alle spørgsmål du måtte have.  </p>
        </div>
        <div class="flex pt-6 pb-2 lg:pt-8">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0,0,256,256"
                    style="fill:#000000;">
                    <g fill="#cdd1dc" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(10.66667,10.66667)"><path d="M12,2c-5.514,0 -10,4.486 -10,10c0,5.514 4.486,10 10,10c5.514,0 10,-4.486 10,-10c0,-1.126 -0.19602,-2.2058 -0.54102,-3.2168l-1.61914,1.61914c0.105,0.516 0.16016,1.05066 0.16016,1.59766c0,4.411 -3.589,8 -8,8c-4.411,0 -8,-3.589 -8,-8c0,-4.411 3.589,-8 8,-8c1.633,0 3.15192,0.49389 4.41992,1.33789l1.43164,-1.43164c-1.648,-1.194 -3.66656,-1.90625 -5.85156,-1.90625zM21.29297,3.29297l-10.29297,10.29297l-3.29297,-3.29297l-1.41406,1.41406l4.70703,4.70703l11.70703,-11.70703z"></path></g></g>
                </svg>
            </div>
            <p class="font-sans font-semibold text-lg pl-2 lg:text-lg text-black dark:text-black lg:font-semibold lg:pl-2">
                Samarbejdet 
            </p>
        </div>
        <div class="font-sans pb-10 text-black dark:black text-semibold text-sm lg:pt-2 lg:pb-0 lg:pl-9 ">
            <p>Vi vil i fællesskab udarbejde en plan, over de arbejdsopgaver jeg skal løse for dig, som der altid være plads til at kunne ændre i. Det er dine behov og ønsker, der er i centrum. Når planen er på plads og godkendt, vil vi indgå samarbejdet, og efter aftalt dato vil jeg påbegynde den skræddersyede rengøringshjælp til dig. </p>
        </div>
    </div>
</div>
    
    <!-- Kundeanmeldelser -->
    <div class="bg-white light:bg-white dark:bg-white">
        <div>
            <h2 class="font-sans text-black text-2xl font-semibold dark:text-black pt-10 pb-10 text-center lg:text-4xl lg:text-center lg:font-semibold lg:pt-10 lg:pb-20">
                Det siger mine kunder 
            </h2>
        </div>
    </div>
    
    <div class="bg-white light:bg-white pb-20 dark:bg-white lg:pb-20">
        <div class="grid grid-cols-1 gap-y-10 md:px-5 md:gap-x-5 md:grid-cols-3 lg:grid-cols-3 lg:gap-20 lg:px-20 lg:pb-20">
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
    
    
    </template>
    
    <style>
    
    </style>
    
    <script setup>
    
    </script>
    
    
