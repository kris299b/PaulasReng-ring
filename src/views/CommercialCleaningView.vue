<template>

    <!-- Hero section -->
    <section class="relative flex flex-col pt-5 h-[50vh] md:h-[40vh] lg:h-[80vh]">
        <div class="heroimage absolute top-0 left-0 w-full h-full overflow-hidden">
            <img class="min-w-full h-[50vh] md:h-[40vh] lg:h-[80vh] absolute object-cover" src="../assets/erhverv-billede-hero.jpg" alt="Rengøring for erhverv">
            <div class="overlay absolute top-0 left-0 w-full h-full bg-black dark:bg-black opacity-40"></div>
        </div>
        <div class="image-content z-10 pt-28 md:pt-40 lg:pt-48 lg:px-40">
            <div>
                <p class="font-sans text-white text-left pl-5 dark:text-white px-4 text-sm md:text-lg md:text-center lg:text-lg lg:text-left lg:tracking-wider">
                    PAULAS RENGØRING | ERHVERVSRENGØRING
                </p>
                <h2 class="font-sans text-white dark:text-white text-left font-semibold px-4 text-4xl md:text-5xl md:text-center lg:pb-2 lg:font-semibold lg:text-5xl lg:text-left">Professionel rengøring til erhverv</h2>
                <p class="font-sans text-white dark:text-white text-sm pt-2 text-left pb-4 px-4 md:font-semibold md:text-center md:text-lg lg:pb-2 lg:text-left lg:font-normal lg:text-lg">Jeg løser rengøringsopgaver for små og mellemstore virksomheder, og institutioner.</p>
            </div>
        </div>
    </section>
    

<!-- Tryghed-section -->
<div class="bg-white light:bg-white dark:bg-white px-4 md:pt-2 md:pb-5">
    <h2 class="text-2xl px-5 pt-10 pb-2 font-semibold text-black dark:text-black md:text-center lg:font-semibold lg:text-3xl lg:text-center lg:pt-6 lg:pb-4">Tryghed i vores samarbejde</h2>
</div>

<div class="bg-white light:white dark:bg-white px-0 flex flex-col justify-center h-full w-full p-8 md:px-0 md:flex-row md:pt-0 lg:flex-row lg:w-full lg:pt-2 lg:pb-5 lg:px-0">
    <div class="bg-lightgray light:lightgray dark:lightgray p-6 md:p-0 w-full md:w-full lg:w-full lg:px-12">
        <p class="text-darkgray dark:text-darkgray text-sm pt-5 font-semibold pb-2 md:pt-4 md:pb-0 md:pl-5 lg:pt-12 lg:pl-0 lg:text-sm lg:font-semibold lg:tracking-wider">TRYGHED I SAMARBEJDET</p>
        <h2 class="text-black dark:text-black font-semibold text-3xl mt-2 md:text-3xl md:mx-5 lg:mx-0 lg:font-semibold lg:text-4xl lg:mr-10 lg:pb-0">Det er vigtigt for mig, at du er tryg i vores samarbejde.</h2>
        <p class="text-black dark:text-black pt-2 text-lg mt-3 font-semibold md:pt-1 md:mx-5 md:text-sm lg:mx-0 lg:text-lg lg:font-semibold lg:pt-2">Hos Paulas Rengøring får du professionel rengøring, hvor du som kunde kan føle dig tryg.</p>
        <p class="text-black dark:text-black pt-2 text-lg mt-3 text-base md:pt-0 md:mx-5 md:text-sm lg:mx-0 lg:text-lg lg:text-base lg:pt-2">Vores samarbejde vil være bygget op på gensidig tillid og respekt, hvor dine behov og ønsker altid er i centrum.</p>
        <div class="inline-block pt-8 pb-4 md:hidden lg:inline-block inset-0 flex lg:pt-10 lg:justify-start">
            <RouterLink to="contact"> 
                <button class="flex hover:bg-transparent bg-blue light:bg-blue dark:bg-blue font-normal lg:font-normal py-2 px-6 rounded-full lg:mr-6 lg:py-2 lg:px-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="white" class="w-6 h-6 lg:w-5 lg:h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                    <p class="text-xs pt-1 pl-2 text-white light:text-white dark:text-white lg:text-sm lg:pt-0 lg:pl-2 lg:tracking-wider">Lad os tage en uforpligtende snak</p>
                </button>
            </RouterLink>
        </div>
    </div>
    <div class="w-full md:w-full lg:w-full relative">
        <img src="../assets/kontor-erhverv.jpg" alt="Kontorbord i erhvervslokale" class="w-full">
        <div class="hidden md:inline-block md:place-items-center md:mx-16 md:my-36 lg:hidden absolute inset-0 flex items-center justify-center">
            <RouterLink to="contact"> 
                <button class="flex hover:bg-transparent bg-blue light:bg-blue dark:bg-blue font-normal lg:font-normal py-2 px-6 rounded-full lg:mr-6 lg:py-2 lg:px-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="white" class="w-6 h-6 lg:w-5 lg:h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                    <p class="text-xs pt-1 pl-2 text-white light:text-white dark:text-white lg:text-sm lg:pt-0 lg:pl-2 lg:tracking-wider">Lad os tage en uforpligtende snak</p>
                </button>
            </RouterLink>
        </div>
    </div>
</div>

    
<!-- Tilpassede løsninger erhvervsrengøring - sektion -->
<div class="flex justify justify-center text-center bg-white dark:bg-white text-black dark-text-black md:pb-0 lg:pt-2">
    <p class="px-5 pt-6 text-xl font-semibold md:text-center md:pt-5 lg:pt-8 lg:font-semibold lg:text-center lg:pb-0 lg:text-3xl">
        Skræddersyede løsninger tilpasset dine ønsker og behov 
    </p>
</div>

<div class="bg-white dark:bg-white light:bg-white flex flex-col justify justify-center h-1/2 w-full p-8 md:flex-row md:justify-center lg:flex-row lg:pt-10 lg:w-full lg:pb-10">
    <div class="w-full md:w-1/2 lg:w-1/2">
        <img src="../assets/Erhverv-rengøringsløsninger.jpg" alt="Erhvervslokale">
    </div>
    <div class="bg-lightgray p-4 md:p-6 w-full md:w-1/2 lg:w-1/2 lg:px-10">
        <p class="text-gray dark:text-gray text-sm md:text-sm font-base pt-5 pb-2 lg:pt-16 lg:text-sm lg:font-semibold lg:tracking-wider">ERHVERVSRENGØRING</p>
        <h2 class="text-black text-2xl font-semibold pb-4 md:text-3xl lg:text-4xl">Tilpasset rengøring</h2>
        <p class="text-black text-sm font-semibold md:text-sm md:font-semibold lg:font-semibold lg:text-base">Dit lokale rengøringsfirma, som tilbyder skræddersyede løsninger lige efter dine ønsker og behov. </p>
        <p class="text-black text-sm font-base pt-3 md:text-sm md:font-base lg:font-base lg:pt-3 lg:pr-10 lg:text-base">Lad os tage en uforpligtigende snak om det, du har brug for hjælp til, og hvor ofte du har behov for rengøringshjælp. Vi vil i fællesskab sammensætte den bedste løsning for dig. Jeg glæder mig til at høre fra dig. </p>
        <p class="text-black dark:text-black pt-5 text-lg font-semibold pb-2 md:text-lg md:font-semibold lg:pt-6 lg:text-2xl">Kontakt oplysninger</p>
        <div class="flex justify-start px-0 pt-3 pb-2 lg:pb-0 lg:pt-3">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#444444" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
            </div>
            <p class="font-sans font-semibold text-xs pl-2 lg:text-xs text-black dark:text-black md:text-xs lg:pl-2 lg:font-semibold lg:tracking-widest">
                60145811
            </p>
        </div>
        <div class="flex justify-start px-0 py-2 lg:pb-0 lg:pt-3">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0,0,256,256" style="fill:#000000;">
                    <g fill="#444444" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
                    <g transform="scale(8.53333,8.53333)">
                        <path d="M15,3c-6.627,0 -12,5.373 -12,12c0,6.016 4.432,10.984 10.206,11.852v-8.672h-2.969v-3.154h2.969v-2.099c0,-3.475 1.693,-5 4.581,-5c1.383,0 2.115,0.103 2.461,0.149v2.753h-1.97c-1.226,0 -1.654,1.163 -1.654,2.473v1.724h3.593l-0.487,3.154h-3.106v8.697c5.857,-0.794 10.376,-5.802 10.376,-11.877c0,-6.627 -5.373,-12 -12,-12z"></path>
                    </g>
                    </g>
                </svg>
            </div>
            <p class="font-sans font-semibold  text-xs pl-2 lg:pb-0 lg:text-xs text-black dark:text-black md:text-xs lg:pl-2 lg:font-semibold lg:tracking-widest">
                PAULAS RENGØRING
            </p>
        </div>
        <div class="flex justify-start px-0 py-2 lg:pt-3">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#444444">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 1.99 2H20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    <path d="M0 0h24v24H0z" fill="none"/>
                </svg>
            </div>
            <p class="font-sans font-semibold text-xs pl-2 pb-10 md:pb-0 lg:text-xs text-black dark:text-black md:text-xs lg:pl-2 lg:pb-10 lg:font-semibold lg:tracking-widest">
                PAULASRENGORING@GMAIL.COM
            </p>
        </div>
    </div>
</div>

<!-- Forløbet -->
<div class="bg-white dark:bg-white text-black dark-text-black px-10 md:pb-4 lg:pt-0 lg:text-center">
    <h2 class="text-black text-3xl text-center font-semibold pb-4 md:pt-8 md:text-3xl lg:text-4xl lg:pr-10">Sådan foregår forløbet hos mig</h2>
    <p class="text-black text-sm text-center font-semibold pb-5 md:text-sm md:font-semibold lg:font-semibold lg:text-base lg:px-20">Når du bestiller rengøringshjælp hos mig, starter vi ud med en indledende samtale pr. telefon, og dernæst et formøde hvor vi sammen vil lægge en plan for den rengøringshjælpen.</p>
</div>

<div class="bg-white dark:bg-white light:bg-white pt-4 flex flex-col justify justify-center h-1/2 w-full md:flex-col lg:flex-row lg:w-full lg:pt-2 lg:pb-16 lg:mx-0">
    <div class="bg-lightgray p-4 md:px-20 lg:pl-20 w-full md:w-full lg:w-full lg:m-0 lg:py-10">
        <div class="flex flex-col md:flex-col lg:flex-row pt-2 pb-2 lg:pt-4">
        <div class="lg:w-1/3">
            <div class="flex items-center">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="darkgray" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                </div>
                <p class="font-sans font-semibold text-lg pl-2 lg:text-lg text-black dark:text-black lg:font-semibold lg:pl-3 lg:pt-2">
                    Indledende samtale
                </p>
            </div>
            <div class="font-sans text-black text-sm dark:text-black text-semibold text-sm lg:text-sm lg:pt-3 lg:pl-9 lg:pr-5">
                <p>I den indledende samtale, vil vi drøfte dine ønsker og behov, så vi sammen kan skræddersy den rette rengøringshjælp til dig. Vi vil her aftale en dato, hvor jeg kan komme ud til dig og holde et formøde.</p>
            </div>
        </div>

        <div class="lg:w-1/3">
            <div class="flex items-center pt-6 pb-2 md:pt-10 lg:pt-0">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="darkgray" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                </div>
                <p class="font-sans font-semibold text-lg pl-2 lg:text-lg text-black dark:text-black lg:font-semibold lg:pl-3">
                    Formøde 
                </p>
            </div>
            <div class="font-sans text-black text-sm dark:text-black text-semibold text-sm lg:text-sm lg:pt-0 lg:pl-9 lg:pr-5">
                <p>Jeg kommer efter aftale hjem til dig, hvor vi får mulighed for at snakke sammen ansigt til ansigt. Vi vil gennemgå dine ønsker og behov, så vi kan udarbejde en arbejdsplan til dig. Det er vigtigt for mig, at du som kunde føler dig tryg i samarbejdet, og du får lejlighed til at stille alle spørgsmål du måtte have.</p>
            </div>
        </div>

        <div class="lg:w-1/3">
            <div class="flex items-center pt-6 pb-2 md:pt-10 lg:pt-0">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="darkgray" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 1 .198-.471 1.575 1.575 0 1 0-2.228-2.228 3.818 3.818 0 0 0-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0 1 16.35 15m.002 0h-.002" />
                    </svg>
                </div>
                <p class="font-sans font-semibold text-lg pl-2 lg:text-lg text-black dark:text-black lg:font-semibold lg:pl-2">
                    Samarbejdet 
                </p>
            </div>
            <div class="font-sans pb-10 text-black text-sm dark:text-black text-semibold text-sm lg:text-sm lg:pt-0 lg:pb-0 lg:pl-9 lg:pr-5">
                <p>Vi vil i fællesskab udarbejde en plan, over de arbejdsopgaver jeg skal løse for dig, som der altid være plads til at kunne ændre i. Det er dine behov og ønsker, der er i centrum. Når planen er på plads og godkendt, vil vi indgå samarbejdet, og efter aftalt dato vil jeg påbegynde den skræddersyede rengøringshjælp til dig.</p>
            </div>
        </div>
    </div>
    </div>
</div>
    
    <!-- Kundeanmeldelser -->
    <div class="bg-white light:bg-white dark:bg-white md:pt-8 lg:pt-0">
        <div>
            <h2 class="font-sans text-black text-2xl font-semibold dark:text-black pt-12 pb-10 text-center md:pt-8 lg:text-3xl lg:text-center lg:font-semibold lg:pt-0 lg:pb-12">
                Det siger mine kunder 
            </h2>
        </div>
    </div>
    
    <div class="bg-white light:bg-white pb-20 dark:bg-white md:pb-20 lg:pb-20">
    <div class="grid grid-cols-1 gap-y-10 md:px-5 md:gap-x-5 md:grid-cols-3 lg:grid-cols-3 lg:gap-20 lg:px-20 lg:pb-10">
        <div class="max-w-xs mx-auto overflow-hidden shadow-lg bg-white dark:bg-white">
            <div class="px-6 py-10 flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="gray" class="size-9">
                    <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
                </svg>
                <div class="font-sans text-darkgray lg:text-darkgray font-bold text-xl mb-2 lg:text-lg lg:text-center lg:pt-2">Lisbeth</div>
                <p class="font-sans text-darkgray text-sm text-center text-base lg:text-darkgray lg:text-center lg:pt-2">
                    ''Jeg nyder hver gang Paula har været forbi, og rengjort vores hjem. Hun har en smittende personlighed og er professionel i hendes arbejde.''
                </p>
            </div>
        </div>
        <div class="max-w-xs mx-auto overflow-hidden shadow-lg bg-white dark:bg-white">
            <div class="px-6 py-10 flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="gray" class="size-9">
                    <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
                </svg>
                <div class="font-sans text-darkgray lg:text-darkgray font-bold text-xl mb-2 lg:text-lg lg:text-center lg:pt-2">Kenneth</div>
                <p class="font-sans text-darkgray text-sm text-center text-base lg:text-darkgray lg:text-center lg:pt-2">
                    ''Grundet en rygskade, måtte jeg skaffe rengøringshjælp. Jeg må sige, at det er en fornøjelse at samarbejde med Paulas Rengøring hvor kvalieten er i top.''
                </p>
            </div>
        </div>
        <div class="max-w-xs mx-auto overflow-hidden shadow-lg bg-white dark:bg-white">
            <div class="px-6 py-10 flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="gray" class="size-9">
                    <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
                </svg>
                <div class="font-sans text-darkgray lg:text-darkgray font-bold text-xl mb-2 lg:text-lg lg:text-center lg:pt-2">Dorthe</div>
                <p class="font-sans text-darkgray text-sm text-center text-base lg:text-darkgray lg:text-center lg:pt-2">
                    ''I en travl hverdag er det en stor prioritet for mig, at mit hjem er pænt og rent. Paula er fantastik til at gøre rent, og jeg har stor tillid til hende personligt og professionelt.''
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
    
    
