<template>

<!-- Hero section -->
<section class="relative h-screen flex flex-col items-center py-20 text-center content-start">
    <div class="heroimage absolute top-0 left-0 w-full h-full overflow-hidden">
        <img class="min-w-full min-h-full absolute object-cover" src="../assets/privatrengøring.jpg" alt="Private-cleaning">
    </div>
    <div class="image-content z-10 pt-40 md:pt-80 lg:pt-40">
        <div>
            <p class="font-sans text-white dark:text-white text-1xl md:text-xl lg:text-md lg:pb-1 lg:tracking-wider">PAULAS RENGØRING | PRIVATRENGØRING</p>
            <h2 class="font-sans text-white dark:text-white px-5 text-3xl md:text-4xl lg:pb-2 lg:font-semibold lg:text-5xl">Rengøringshjælp for dig i dit hjem.</h2>
        </div>
        <div class="font-sans flex flex-col space-y-4 px-24 text-sm pt-5 md:flex-row md:justify-center md:space-x-4 lg:flex-row lg:space-x-4 lg:space-y-0 lg:justify-center lg:text-md lg:pt-5">
            <RouterLink to="contact"> 
                <button class="flex bg-transparent dark:bg-transparent border-2 border-white lg:border-white py-2 px-4 hover:beige text-white dark:text-white font-semibold lg:py-2 lg:px-8 rounded-full">
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
    <h2 class="text-center text-lg pt-10 pb-5 font-semibold text-black dark:text-black lg:font-semibold lg:text-2xl lg:text-center lg:pt-20">TRYGHED I VORES SAMARBEJDE</h2>
</div>

<div class="bg-white light:bg-white dark:bg-white columns-1 md:columns-1 lg:columns-2 lg:pt-10 lg:gap-x-0">
    <div class="bg-lightgray dark:bg-lightgray px-5 lg:px-20 lg:h-96">
        <p class="font-sans text-gray dark:gray text-sm pt-8 lg:text-sm lg:font-semibold lg:tracking-wider lg:pt-10">PAULAS RENGØRING | TRYGHED</p>
        <h2 class="font-sans text-black dark:text-black pr-10 text-2xl font-semibold mt-3 pb-3 lg:font-semibold lg:text-4xl lg:font-normal lg:pt-0">Det er vigtigt for mig, at du er tryg i vores samarbejde.</h2>
        <p class="font-sans text-black dark:text-black pb-3 lg:pt-4">
            There are many variations of passages of Lorem Ipsum available.
        </p>
        <p class="font-sans text-black dark:text-black pb-8 lg:pt-2 lg:pr-20">
            But the majority have suffered alteration in some form, by injected humour, 
            or randomised words which don't look even slightly believable, it seems like it is a real sentance.
        </p>
    </div>
    <div class="gap-y-0 lg:pt-0">
        <img src="../assets/Tryghed.copi.jpg" alt="Privatrengøring-tryghed">
    </div>
</div>

<!-- Kontaktformular-section -->
<div class="bg-white light:bg-white  dark:bg-white pt-10 px-5 columns-1 md:columns-2 lg:px-20 lg:columns-2 lg:gap-x-0 lg:pt-20 lg:pb-20 ">
    <div class="bg-lightgray light:bg-lightgray dark:bg-lightgray pb-10 lg:pt-10 lg:px-10">
        <h2 class="font-sans text-black dark:text-black lg:text-xl">Lad os tage en uforpligtende snak</h2>
    </div>
    <div class="text-black dark:text-black lg:pt-10 lg:px-10 lg:text-xl">
       <h2 class="font-sans lg:font-semibold">PRIVATRENGØRING</h2>
       <p class="font-sans lg:text-sm lg:pt-3">Jeg tilbyder altid skræddersyede løsninger, som tager udgangspunkt i dine ønsker og behov.  </p>
       <p class="font-sans lg:text-sm lg:pt-3">Lad os tage en uforpligtigende snak om det, du har brug for hjælp til, og hvor ofte du har behov for rengøringshjælp. </p>
    </div>
</div>

<!-- Servicefradrag-section -->
<div class="bg:lightgray light:bg-lightgray dark:bg-lightgray font-sans lg:text-center lg:pt-10 lg:pb-10 lg:text-3xl text-black dark:text-black">
    <h2 class="text-left font-semibold pl-5 text-2xl pt-10 lg:text-center lg:text-3xl lg:font-semibold">Husk at din rengøringshjælp går </h2>
    <h2 class="text-left font-semibold pl-5 text-2xl lg:text-center lg:text-3xl lg:font-semibold">ind under ''Servicefradrag'' </h2>
    <p class="text-left pl-5 pr-5 pt-3 pb-10 lg:text-center lg:pl-40 lg:pr-40 lg:pt-4 lg:text-sm">Når du køber privat rengøring, skal du huske at gemme alle dine kvitteringer. 
        Du kan nemlig trække beløb fra på din selvangivelse under rubrikken 
        ”servicefradrag”, det varierer en smule beløbsmæssigt fra indkomstår 
        til indkomstår, hvor stort et beløb du kan trække fra.
    </p>
</div>

<!-- Forløb-sektion -->
<div class="bg:white light:bg-white  dark:bg-white lg:pt-10 lg:pb-0">
   <h2 class="font-sans pt-10 pb-10 font-semibold text-center text-lg text-black dark:text-black lg:text-center lg:font-semibold lg:text-3xl">Hvordan foregår forløbet ?</h2> 
</div>

<div class="bg-white light:bg-white  dark:bg-white columns-1 md:gap-x-0 md:columns-2 lg:columns-2 lg:gap-x-0 lg:pt-5 lg:pb-20">
    <div class="bg-lightgray light:bg-lightgray dark:bg-lightgray px-5 lg:px-20 lg:pb-10">
        <p class="font-sans text-gray dark:gray text-sm pt-8 md:px-2 md:pt-7 lg:text-sm lg:font-semibold lg:pt-16 lg:tracking-wider">PAULAS RENGØRING | FORLØBET</p>
        <h2 class="font-sans text-black dark:text-black pr-10 text-3xl font-semibold mt-3 pb-3 md:px-2 lg:text-4xl lg:font-semibold lg:pr-10">Sådan foregår forløbet hos mig.</h2>
        <div class="flex pt-5 lg:pt-10">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="darkgray" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
            </div>
            <p class="font-sans font-semibold text-sm pl-3 lg:text-lg text-black dark:text-black lg:font-semibold lg:pl-3">
                        Indledende samtale
            </p>
        </div>
        <div class="font-sans pl-9 pt-2 text-black dark:black text-semibold text-sm lg:pt-2 lg:pl-9 ">
            <p>I den indledende samtale, vil vi drøfte dine ønsker og behov, så vi sammen kan skræddersy den rette rengøringshjælp til dig. Vi vil her aftale en dato, hvor jeg kan komme ud til dig og holde et formøde. </p>
        </div>
        <div class="flex pt-5 lg:pt-8">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="darkgray" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
            </div>
            <p class="font-sans font-semibold text-base text-sm pl-3 lg:text-lg text-black dark:text-black lg:font-semibold lg:pl-3">
                Formøde
            </p>
        </div>
        <div class="font-sans pl-9 pt-2 text-black dark:black text-semibold text-sm lg:pt-2 lg:pl-9 ">
            <p>Jeg kommer efter aftale hjem til dig, hvor vi får mulighed for at snakke sammen ansigt til ansigt. Vi vil gennemgå dine ønsker og behov, så vi kan udarbejde en arbejdsplan til dig. Det er vigtigt for mig, at du som kunde føler dig tryg i samarbejdet, og du får lejlighed til at stille alle spørgsmål du måtte have. </p>
        </div>
        <div class="flex pt-5 lg:pt-8">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0,0,256,256"
                    style="fill:#000000;">
                    <g fill="#cdd1dc" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(10.66667,10.66667)"><path d="M12,2c-5.514,0 -10,4.486 -10,10c0,5.514 4.486,10 10,10c5.514,0 10,-4.486 10,-10c0,-1.126 -0.19602,-2.2058 -0.54102,-3.2168l-1.61914,1.61914c0.105,0.516 0.16016,1.05066 0.16016,1.59766c0,4.411 -3.589,8 -8,8c-4.411,0 -8,-3.589 -8,-8c0,-4.411 3.589,-8 8,-8c1.633,0 3.15192,0.49389 4.41992,1.33789l1.43164,-1.43164c-1.648,-1.194 -3.66656,-1.90625 -5.85156,-1.90625zM21.29297,3.29297l-10.29297,10.29297l-3.29297,-3.29297l-1.41406,1.41406l4.70703,4.70703l11.70703,-11.70703z"></path></g></g>
                </svg>
            </div>
            <p class="font-sans font-semibold text-base text-sm pl-3 lg:text-lg text-black dark:text-black lg:font-semibold lg:pl-2">
                Samarbejdet
            </p>
        </div>
        <div class="font-sans font-sans pl-9 pt-2 pb-10 text-black dark:black text-semibold text-sm lg:pt-2 lg:pl-9 ">
            <p>Vi vil i fællesskab udarbejde en plan, over de arbejdsopgaver jeg skal løse for dig, som der altid være plads til at kunne ændre i. Det er dine behov og ønsker, der er i centrum. Når planen er på plads og godkendt, vil vi indgå samarbejdet, og efter aftalt dato vil jeg påbegynde den skræddersyede rengøringshjælp til dig. </p>
        </div>
    </div>
    <div class="gap-y-0 md:pt-0 lg:pt-0">
        <img src="../assets/Forløb-billede.jpg" alt="Forløbet-billede">
    </div>
</div>

<!-- Kundeanmeldelser -->
<div class="bg-white light:bg-white dark:bg-white">
    <div>
        <h2 class="font-sans text-black text-2xl font-semibold dark:text-black pt-10 pb-10 text-center lg:text-4xl lg:text-center lg:font-semibold lg:pt-5 lg:pb-20">
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
<section class="pb-10 bg-white light:bg-white  dark:bg-white text-darkgray dark:text-darkgray flex lg:justify-center lg:pb-20">
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

</script>

