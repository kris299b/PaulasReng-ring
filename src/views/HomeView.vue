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
            <h2 class="text-white dark:text-white pb-3 px-5 text-3xl md:text-4xl lg:text-5xl py-1">Jeg forstår vigtigheden af et rent miljø</h2>
        </div>
        <div class="flex flex-col space-y-4 px-24 text-sm pt-5 md:flex-row md:justify-center md:space-x-4 lg:flex-row lg:space-x-4 lg:space-y-0 lg:justify-center lg:text-md lg:pt-5">
            <button class="bg-blue dark:bg-blue py-2 px-4 hover:beige text-white dark:text-white font-semibold lg:py-2 lg:px-8 rounded-full">
                    Jeg tilbyder
            </button>
            <button class="bg-transparent py-2 px-4 dark:bg-transparent hover:bg-transparent border-2 text-white dark:text-white font-semibold lg:py-2 lg:px-8 rounded-full">
                    Kontakt mig
            </button>
        </div>
    </div>
</section>

<!-- Værdisæt section -->

<div class="bg-white dark:bg-white px-5 columns-1 md:columns-2 lg:px-52 lg:columns-2 lg:gap-x-0 lg:pt-20">
    <div class="inline-block md:hidden lg:hidden pt-10">
        <img src="../assets/PaulasRengøring-værdibillede.jpg" alt="Værdisæt">
    </div>
    <div class="bg-lightgray dark:bg-lightgray pb-10 text-black dark:text-black lg:py-5 lg:px-5">
        <div class="pt-0 pl-5 pb-3">
            <p class="pt-8 text-sm mt-3 lg:text-sm lg:font-semibold lg:pt-2 text-darkgray dark:text-darkgray lg:tracking-wider">MIT VÆRDISÆT</p>
        </div>
        <div class="pt-0 pl-5 pb-3">
            <h2 class="pt-0 text-xl mt-3 lg:text-xl lg:font-semibold lg:pt-2">Tillid</h2>
            <p class="text-sm mt-3 lg:mr-10 lg:pb-0">There are many variations of passages of Lorem Ipsum 
                available, but the majority have suffered alteration in some form.</p>
        </div>
        <div class="pt-0 pl-5 pb-3">        
            <h2 class="text-xl mt-3 lg:text-xl lg:font-semibold">Kundetilfredshed</h2>
            <p class="text-sm mt-3 lg:mr-10">There are many variations of passages of Lorem Ipsum 
                available, but the majority have suffered alteration in some form.</p>
        </div>
        <div class="pl-5">
            <h2 class="text-xl mt-3 lg:text-xl lg:font-semibold">Tæt samarbejde</h2>
            <p class="text-sm mt-3 lg:mr-10 lg:pb-5">There are many variations of passages of Lorem Ipsum 
                available, but the majority have suffered alteration in some form.</p>
        </div>
    </div>
    <div class="hidden md:inline-block lg:inline-block">
        <img src="../assets/PaulasRengøring-værdibillede.jpg" alt="Værdisæt">
    </div>
</div>


<!-- Guide section -->
<div class="bg-white dark:bg-white columns-1 md:columns-1 lg:columns-2 lg:gap-x-0 lg:pt-20">
    <div class="pt-10 lg:pt-0">
        <img src="../assets/Guide-billede.jpg" alt="Rengøring">
    </div>
    <div class="bg-lightgray dark:bg-lightgray px-5 lg:px-20">
        <p class="text-darkgray dark:darkgray text-sm pt-8 lg:text-sm lg:font-semibold lg:pt-20 lg:tracking-wider">GUIDE</p>
        <h2 class="text-black dark:text-black pr-10 text-2xl font-semibold mt-3 pb-3 lg:mr-10 lg:text-4xl lg:font-normal lg:pt-0">Sådan får du mest mulig ud af din rengøringshjælp.</h2>
        <p class="text-black dark:text-black pb-3 lg:pt-4 lg:pr-20">There are many variations of passages of Lorem Ipsum available, but the majority 
        have suffered alteration.
        </p>
        <p class="text-black dark:text-black pb-8 lg:pt-2 lg:pr-20 lg:pb-10">By injected humour, or randomised words which don't look 
            even slightly believable. If you are going to use a passage of Lorem Ipsum, you need. 
        </p>
        <div class="pb-10 lg:pb-10">
            <button class="bg-beige dark:bg-beige hover:beige text-black dark:text-black font-semibold py-2 px-8 rounded-full lg:text-md">
                Læs mere
            </button>
        </div>
    </div>
</div>

<!-- Ydelser sektion -->
<div class="bg-white dark:bg-white">
    <div class="text-darkgray dark:text-darkgray pt-10 pl-5 pb-0 text-left text-sm pb-2 lg:text-lg lg:text-center lg:pt-20 lg:pb-5 lg:font-normal lg:tracking-wider">
        <p>PAULAS RENGØRING</p>
    </div>
    <div class="text-black dark:text-black text-2xl pl-5 pb-10 lg:text-3xl lg:text-center lg:px-80 lg:pb-20">
        <h2>
            ''Jeg brænder for, at skabe skinnende resultater, hvor du som kunde er i centrum.'' 
        </h2>
    </div>
</div>

<div class="bg-white dark:bg-white">
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 lg:gap-20 lg:px-40 lg:pb-20">
        <div class="max-w-xs mb-10 ml-7 overflow-hidden shadow-lg bg-white dark:bg-white">
            <div class="px-6 py-4">
                <div>
                <h2 class="font-bold text-xl text-black dark:text-black">
                    PRIVAT
                </h2>
            </div>
            <div>
                <h2 class="font-bold text-xl pb-10 lg:mb-10 text-black dark:text-black">
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
                    <p class="text-base lg:text-sm text-black dark:text-black">
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
                    <p class="text-base lg:text-sm text-black dark:text-black">
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
                    <p class="text-base pb-5 lg:text-sm text-black dark:text-black">
                        VINDUESPUDSNING
                    </p>
                </div>
                <div class="px-6 pt-0 pb-5 lg:text-center">
                    <button class="bg-lightblue dark:bg-lightblue hover:lightblue text-black dark:text-black font-semibold py-2 px-8 rounded-full lg:text-sm">
                        LÆS MERE
                    </button>
                </div>
            </div>
            </div>
        </div>
        <div class="max-w-xs mb-10 ml-7 overflow-hidden shadow-lg bg-white dark:bg-white">
            <div class="px-6 py-4">
                <div>
                <h2 class="font-bold text-xl text-black dark:text-black">
                    ERHVERVS
                </h2>
            </div>
            <div>
                <h2 class="font-bold text-xl pb-10 lg:mb-10 text-black dark:text-black">
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
                    <p class="text-base lg:text-sm text-black dark:text-black">
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
                    <p class="text-base lg:text-sm text-black dark:text-black">
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
                    <p class="text-base pb-5 lg:text-sm text-black dark:text-black">
                        VINDUESPUDSNING
                    </p>
                </div>
                <div class="px-6 pt-0 pb-5 lg:text-center">
                    <button class="bg-lightblue dark:bg-lightblue hover:lightblue text-black dark:text-black font-semibold py-2 px-8 rounded-full lg:text-sm">
                        LÆS MERE
                    </button>
                </div>
            </div>
            </div>
        </div>
    </div>
</div>

<!-- Kontaktformular sektion -->
<div class="bg-white dark:bg-white text-black dark:text-black px-5 pt-10 pb-10 text-lg lg:text-center lg:pt-10 lg:pb-12 lg:font-normal">
    <h2 class="text-lg text-left lg:text-center lg:text-4xl">
        Har du spørgsmål?
    </h2>
    <p class="text-sm text-left pt-3 lg:text-center lg:text-sm lg:px-32 lg:pt-5">There are many variations of passages of Lorem Ipsum available, but the majority 
    have suffered alteration in some form. by injected humour, or randomised words which
    don't look even slightly believable. </p>
</div>

<div class="bg-white dark:bg-white">
    <div>
        <h2 class="text-black dark:text-black pt-10 pb-10 text-center text-lg lg:text-4xl lg:text-center lg:pt-10 lg:pb-20 lg:font-normal">
            Det siger mine kunder 
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
    <div class="text-center mb-5 lg:pt-10">
        <h3 class="text-lg lg:text-4xl tracking-tight text-black dark:text-black">
            Ofte stillede spørgsmål
        </h3>
    </div>
</div>

<!-- FAQ -->
<section class="pb-10 bg-white dark:bg-white text-darkgray dark:text-darkgray flex lg:justify-center lg:pb-20">
	<div class="container flex justify-center px-4 py-8 mx-auto md:p-8">
		<div class="space-y-4 w-full md:w-full lg:w-4/5 lg:px-40">
			<details class="w-full md:w-full w-4/5 bg-lightgray dark:lightgray">
				<summary class="px-5 py-4 focus:outline-none focus-visible:ri font-base lg:text-semibold lg:text-xs text-xs uppercase text-gray-500">Hvor meget koster en hjemmeside hos jer?</summary>
				<p class="px-6 py-6 pt-0 ml-4 dark:gray-300 text-gray-600 lg:text-sm lg:mt-1">Prisen på en hjemmeside afhænger af dine ønsker og krav. Du vil ved kontakt få en estimeret pris, som vil ændre sig alt efter dine ønsker til det visuelle udtryk samt funktionalitet.</p>
			</details>
			<details class="w-full md:w-full w-4/5 bg-lightgray dark:lightgray">
				<summary class="px-5 py-4 focus:outline-none focus-visible:ri font-base lg:text-semibold lg:text-xs text-xs uppercase text-gray-500">Hvor meget koster en hjemmeside hos jer?</summary>
				<p class="px-6 py-6 pt-0 ml-4 dark:gray-300 text-gray-600 lg:text-sm lg:mt-1">Prisen på en hjemmeside afhænger af dine ønsker og krav. Du vil ved kontakt få en estimeret pris, som vil ændre sig alt efter dine ønsker til det visuelle udtryk samt funktionalitet.</p>
			</details>
			<details class="w-full md:w-full w-4/5 bg-lightgray dark:lightgray">
				<summary class="px-5 py-4 focus:outline-none focus-visible:ri font-base lg:text-semibold lg:text-xs text-xs uppercase text-gray-500">Hvor meget koster en hjemmeside hos jer?</summary>
				<p class="px-6 py-6 pt-0 ml-4 dark:gray-300 text-gray-600 lg:text-sm lg:mt-1">Prisen på en hjemmeside afhænger af dine ønsker og krav. Du vil ved kontakt få en estimeret pris, som vil ændre sig alt efter dine ønsker til det visuelle udtryk samt funktionalitet.</p>
			</details>
            <details class="w-full md:w-full w-4/5 bg-lightgray dark:lightgray">
				<summary class="px-5 py-4 focus:outline-none focus-visible:ri font-base lg:text-semibold lg:text-xs text-xs uppercase text-gray-500">Hvor meget koster en hjemmeside hos jer?</summary>
				<p class="px-6 py-6 pt-0 ml-4 dark:gray-300 text-gray-600 lg:text-sm lg:mt-1">Prisen på en hjemmeside afhænger af dine ønsker og krav. Du vil ved kontakt få en estimeret pris, som vil ændre sig alt efter dine ønsker til det visuelle udtryk samt funktionalitet.</p>
			</details>
            <details class="w-full md:w-full w-4/5 bg-lightgray dark:lightgray">
				<summary class="px-5 py-4 focus:outline-none focus-visible:ri font-base lg:text-semibold lg:text-xs text-xs uppercase text-gray-500">Hvor meget koster en hjemmeside hos jer?</summary>
				<p class="px-6 py-6 pt-0 ml-4 dark:gray-300 text-gray-600 lg:text-sm lg:mt-1">Prisen på en hjemmeside afhænger af dine ønsker og krav. Du vil ved kontakt få en estimeret pris, som vil ændre sig alt efter dine ønsker til det visuelle udtryk samt funktionalitet.</p>
			</details>
		</div>
	</div>
</section>


</template>

<style>

</style>

<script setup>

</script>