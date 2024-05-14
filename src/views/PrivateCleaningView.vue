<template>

<!-- Hero section -->
<section class="relative h-screen flex flex-col pt-5 lg:items-center md:h-[40vh] lg:h-[80vh]">
    <div class="heroimage absolute top-0 left-0 w-full h-full overflow-hidden">
        <img class="min-w-full min-h-full absolute object-cover" src="../assets/privatrengøring.jpg" alt="Private-cleaning">
    </div>
    <div class="image-content z-10 pt-40 md:pt-40 lg:pt-40">
        <div>
            <p class="font-sans text-white dark:text-white text-lg text-left px-4 md:text-center md:text-lg lg:text-md lg:text-left lg:pb-1 lg:px-5 lg:tracking-wider">PAULAS RENGØRING | PRIVATRENGØRING</p>
            <h2 class="font-sans text-white dark:text-white text-4xl text-left px-4 md:font-semibold md:text-center md:text-4xl lg:pb-2 lg:font-semibold lg:text-5xl">Rengøringshjælp for dig i dit hjem</h2>
        </div>
    </div>
</section>


<!-- Tryghed-section -->
<div class="flex justify justify-center text-center bg-white light:bg-white dark:bg-white">
    <h2 class="text-2xl px-5 pt-16 font-semibold text-black dark:text-black md:text-center lg:font-semibold lg:text-3xl lg:text-center lg:pt-10">Tryghed i vores samarbejde</h2>
</div>

<div class="bg-white light:white dark:bg-white px-0 flex flex-col justify-center h-full w-full p-8 md:px-0 md:flex-row lg:flex-row lg:w-full lg:pt-5 lg:pb-5 lg:px-0">
    <div class="bg-beige light:bg-beige dark:bg-beige p-6 md:p-0 w-full md:w-full lg:w-full lg:px-12">
        <p class="text-darkgray dark:text-darkgray text-sm pt-5 font-semibold pb-2 md:pt-6 md:pl-5 lg:pt-12 lg:pl-0 lg:text-sm lg:tracking-wider">PAULAS RENGØRING | TRYGHED</p>
        <h2 class="text-black dark:text-black text-2xl mt-2 md:text-2xl md:mx-5 lg:mx-0 lg:font-semibold lg:text-4xl lg:mr-10 lg:pb-0">Det er vigtigt for mig, at du er tryg i vores samarbejde.</h2>
        <p class="text-black dark:text-black pt-2 text-lg mt-3 font-semibold md:pt-2 md:mx-5 md:text-sm lg:mx-0 lg:text-lg lg:font-semibold lg:pt-2">At åbne sit hjem for et menneske, man endnu ikke kender kræver tillid. Det er vigtigt for mig at der er tryghed i vores samarbejde, og at der skabes gensidig tillid til hinanden. </p>
        <p class="text-black dark:text-black pt-2 pb-0 text-sm mt-3 font-base md:pt-0 md:font-base md:mx-5 md:text-sm lg:mx-0 lg:text-sm lg:font-base lg:pt-2">Det er dit hjem, og dine ønsker samt behov der bliver centrum for vores samarbejde. Jeg respektere de rammer du sætter, og du kan stole på diskretion hos mig. </p>
        <div class="inline-block pt-8 md:hidden md:pl-10 lg:inline-block inset-0 flex lg:pt-10 lg:pl-0 lg:justify-start">
            <RouterLink to="contact">
                <button class="flex justify justify-center text-center hover:bg-transparent bg-darkbeige dark:bg-darkbeige font-normal md:pt-10 lg:font-normal py-2 px-6 rounded-full lg:py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="black" class="w-6 h-6 lg:w-5 lg:h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                    <p class="text-xs text-black pt-1 pl-2 light:text-black dark:text-black lg:text-sm lg:pt-0 lg:pl-2 lg:tracking-wider">Lad os tage en uforpligtende snak</p>
                </button>
            </RouterLink>
        </div>
    </div>
    <div class="w-full md:w-full lg:w-full relative">
        <img src="../assets/Tryghed-rengøring.jpg" alt="Privatrengøring-tryghed" class="w-full">
        <div class="hidden md:inline-block md:mx-16 md:my-36 lg:hidden absolute inset-0 flex">
            <RouterLink to="contact">
                <button class="flex hover:bg-transparent bg-darkbeige dark:bg-darkbeige font-normal lg:font-normal py-2 px-6 rounded-full lg:py-2 lg:px-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="black" class="w-6 h-6 lg:w-5 lg:h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                    <p class="text-xs text-black pt-1 pl-2 light:text-black dark:text-black lg:text-sm lg:pt-0 lg:pl-2 lg:tracking-wider">Lad os tage en uforpligtende snak</p>
                </button>
            </RouterLink>
        </div>
    </div>
</div>



<!-- Tilpassede løsninger - section -->
<div class="flex justify justify-center text-center bg-white dark:bg-white text-black dark-text-black md:pb-4 lg:pt-5">
    <p class="px-5 pt-10 text-2xl font-semibold md:text-center lg:font-semibold lg:text-center lg:pb-3 lg:text-3xl">
        Skræddersyede løsninger tilpasset dine ønsker 
    </p>
</div>

<div class="bg-white dark:bg-white light:bg-white flex flex-col justify justify-center h-1/2 w-full p-8 md:flex-row md:justify-center lg:flex-row lg:w-full lg:pb-20">
    <div class="w-full md:w-1/2 lg:w-1/2">
        <img src="../assets/Paulas-rengøring.jpg" alt="om-firmaet-billede">
    </div>
    <div class="bg-lightgray justify justify-center p-4 md:p-6 w-full md:w-1/2 lg:w-1/2 lg:px-10">
        <p class="text-gray dark:text-gray text-sm md:text-sm font-base pt-5 pb-2 lg:pt-16 lg:text-sm">PAULAS RENGØRING | PRIVATRENGØRING</p>
        <h2 class="text-black text-3xl font-semibold pb-4 md:text-2xl lg:text-4xl">Tilpassede rengøringsløsninger</h2>
        <p class="text-black text-sm font-semibold md:text-sm md:font-semibold lg:font-semibold lg:text-base">Jeg tilbyder altid skræddersyede løsninger, som tager udgangspunkt i dine ønsker og behov. </p>
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
            <p class="font-sans font-semibold text-xs pl-2 lg:pb-0 lg:text-xs text-black dark:text-black md:text-xs lg:pl-2 lg:font-semibold lg:tracking-widest">
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
    

<!-- Servicefradrag-section -->
<div class="bg:lightgray px-2 light:bg-lightgray dark:bg-lightgray font-sans md:px-10 lg:text-center lg:pt-10 lg:pb-10 lg:text-3xl text-black dark:text-black">
    <h2 class="font-semibold pl-5 text-2xl pt-10 lg:text-center lg:text-3xl lg:font-semibold">Husk at din rengøringshjælp går </h2>
    <h2 class="font-semibold pl-5 text-2xl lg:text-center lg:text-3xl lg:font-semibold">ind under ''Servicefradrag'' </h2>
    <p class="text-sm pl-5 pr-5 pt-3 pb-10 lg:text-center lg:pl-40 lg:pr-40 lg:pt-4 lg:text-sm">Når du køber privat rengøring, skal du huske at gemme alle dine kvitteringer. 
        Du kan nemlig trække beløb fra på din selvangivelse under rubrikken 
        ”servicefradrag”, det varierer en smule beløbsmæssigt fra indkomstår 
        til indkomstår, hvor stort et beløb du kan trække fra.
    </p>
</div>

<!-- Forløb-sektion -->
<div class="bg-white dark:bg-white text-black dark-text-black px-10 md:pb-4 lg:pt-0">
    <p class="pt-16 pb-0 text-2xl font-semibold md:text-center lg:font-semibold lg:text-center lg:pb-3 lg:text-3xl">
        Paulas rengøring | forløbet hos mig  
    </p>
</div>

<div class="bg-white dark:bg-white light:bg-white px-4 pt-4 flex flex-col justify justify-center h-1/2 w-full md:flex-col lg:flex-row lg:w-full lg:pt-2 lg:pb-20 lg:mx-0">
    <div class="bg-lightgray p-4 md:mx-24 w-full md:w-3/4 lg:w-3/4 lg:m-0">
        <p class="text-gray dark:text-gray text-sm md:text-sm font-base pt-5 pb-2 lg:pt-6 lg:text-sm">PAULAS RENGØRING | FORLØBET</p>
        <h2 class="text-black text-2xl font-semibold pb-4 md:text-3xl lg:text-4xl lg:pr-10">Sådan foregår forløbet hos Paulas rengøring</h2>
        <p class="text-black text-sm font-semibold pb-5 md:text-sm md:font-semibold lg:font-semibold lg:text-base">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
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
        <div class="font-sans text-black text-sm dark:black text-semibold text-sm lg:pt-2 lg:pl-9 ">
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
        <div class="font-sans text-black text-sm dark:black text-semibold text-sm lg:pt-2 lg:pl-9 ">
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
        <div class="font-sans pb-10 text-black text-sm dark:black text-semibold text-sm lg:pt-2 lg:pb-0 lg:pl-9 ">
            <p>Vi vil i fællesskab udarbejde en plan, over de arbejdsopgaver jeg skal løse for dig, som der altid være plads til at kunne ændre i. Det er dine behov og ønsker, der er i centrum. Når planen er på plads og godkendt, vil vi indgå samarbejdet, og efter aftalt dato vil jeg påbegynde den skræddersyede rengøringshjælp til dig. </p>
        </div>
    </div>
    <div class="w-full md:w-3/4 md:mx-24 lg:w-3/4 lg:m-0">
        <img src="../assets/kontakt-billede.jpg" alt="Forløb-billede">
    </div>
</div>
    

<!-- Kundeanmeldelser -->
<div class="bg-white light:bg-white dark:bg-white md:pt-10">
    <div>
        <h2 class="font-sans text-black text-2xl font-semibold dark:text-black pt-10 pb-10 text-center lg:text-3xl lg:text-center lg:font-semibold lg:pt-0 lg:pb-20">
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
                <p class="font-sans text-darkgray text-sm text-center text-base lg:text-darkgray lg:text-center lg:pt-2">
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
                <p class="font-sans text-darkgray text-sm text-center text-base lg:text-darkgray lg:text-center lg:pt-2">
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
                <p class="font-sans text-darkgray text-sm text-center text-base lg:text-darkgray lg:text-center lg:pt-2">
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

