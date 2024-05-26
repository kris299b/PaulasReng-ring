<template>
    
<!-- Hero section -->
<section class="relative flex flex-col pt-5 h-[50vh] md:h-[40vh] lg:h-[80vh]">
    <div class="heroimage absolute top-0 left-0 w-full h-full overflow-hidden">
        <img class="min-w-full h-[50vh] md:h-[40vh] lg:h-[80vh] absolute object-cover" src="../assets/Kontakt-herobillede.jpg" alt="Skrivebord med computer">
        <div class="overlay absolute top-0 left-0 w-full h-full bg-black dark:bg-black opacity-40"></div>
    </div>
    <div class="image-content z-10 pt-28 md:pt-40 lg:pt-48 lg:px-40">
        <div>
            <p class="font-sans text-white text-left pl-5 dark:text-white px-4 text-sm md:text-lg md:text-center lg:text-lg lg:text-left lg:tracking-wider">
                PAULAS RENGØRING | KONTAKT
            </p>
            <h2 class="font-sans text-white dark:text-white text-left font-semibold px-4 text-3xl md:text-5xl md:text-center lg:pb-2 lg:font-semibold lg:text-5xl lg:text-left">Professionel rådgivning med dig i centrum</h2>
        </div>
    </div>
</section>

<!-- kontaktformular sektion -->
<div class="bg-white dark:bg-white text-black text-center lg:pt-0 lg:pb-5 lg:text-center lg:pt-4">
    <p class="pt-10 text-3xl font-semibold lg:text-3xl">
        Har du spørgsmål?
    </p>
    <p class="pb-10 font-sans text-base text-center px-10 pt-3 md:pt-4 md:text-center md:px-10 lg:text-center lg:text-base lg:px-40 lg:pt-5">
        Du er altid velkommen til at kontakte mig via kontaktformularen eller ringe direkte, hvis du har behov for rådgivning eller har tvivlsspørgsmål. Jeg står klar til at hjælpe dig, med det du har brug for. 
    </p>
</div> 

<section class="relative h-full flex flex-col items-center text-center content-start z-0 pt-10 md:flex-col lg:py-12">
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden">
        <img class="min-w-full min-h-full absolute object-cover" src="../assets/Kontaktform-billede.jpg" alt="Kvinde rengør lamper">
    </div>
    <div class="flex justify justify-center flex-col md:flex-col md:w-full md:pl-40 md:pb-20 lg:flex-row lg:space-x-0 lg:pt-5 lg:w-3/4 lg:pl-10 z-20 lg:pt-24">
        <div class="bg-white dark:bg-white max-w-lg shadow-sm lg:w-2/3">
            <div class="bg-white dark:bg-white max-w-lg">
                <h2 class="mb-4 text-2xl tracking-tight font-semibold text-left pt-10 px-5 text-black dark:text-black md:px-5 md:pt-10 md:text-3xl md:text-left lg:text-3xl lg:px-5 lg:pr-10 lg:font-semibold lg:pt-10 lg:text-left">
                    Kontaktforumlar
                </h2>
                <p class="mb-8 text-base text-left px-5 font-light text-black dark:text-black md:px-5 md:text-sm md:text-left lg:mb-16 lg:mb-4 lg:px-5 lg:font-normal lg:text-sm lg:text-left">
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
            <h2 class="justify-start pr-24 font-sans text-2xl text-black pt-6 pb-3 font-semibold md:pb-5 md:pt-7 md:font-semibold md:text-left md:px-8 lg:pt-10 lg:pb-0 lg:text-black lg:text-2xl lg:font-semibold lg:pl-5">
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
                    <span class="font-sans font-semibold font-base text-sm text-black dark:text-black md:text-lg md:font-semibold lg:text-semibold lg:text-sm lg:font-semibold ">Hvor meget koster det at få gjort rent?</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </div>
                <div id="content1" class="font-sans hidden text-sm px-1 py-6 pt-0 ml-4 text-black dark:text-black lg:px-4 lg:text-sm lg:mt-1">
                    Jeg kører en fast timepris på alm. rengøring og hovedrengøring som er inklusiv vinduespudsning. Timeprisen for alm. rengøring er 280 kr. ekskl. moms og timeprisen for hovedrengøring er 330 kr. ekskl. moms.
                </div>
            </div>
            <div class="w-full md:w-full w-4/5 bg-white dark:white shadow-md lg:shadow-md cursor-pointer" data-toggle-content="content2">
                <div class="flex justify-between items-center px-5 py-4 focus:outline-none focus-visible:ri lg:pl-8">
                    <span class="font-base font-semibold text-sm text-black dark:text-black md:text-lg md:font-semibold lg:text-semibold lg:text-sm lg:font-semibold ">Kan ydelserne blive skræddersyet?</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </div>
                <div id="content2" class="font-sans hidden text-sm px-1 py-6 pt-0 ml-4 text-black dark:text-black lg:px-4 lg:text-sm lg:mt-1">
                    Det er dine behov og dine ønsker der er i højsædet. Ydelserne kan derfor sagtens blive skræddersyet, så de passer til din behov og ønsker, og dette vil vi sammen kunne lægge en plan for.
                </div>
            </div>
            <div class="w-full md:w-full w-4/5 bg-white dark:white shadow-md lg:shadow-md cursor-pointer" data-toggle-content="content3">
                <div class="flex justify-between items-center px-5 py-4 focus:outline-none focus-visible:ri lg:pl-8">
                    <span class="font-base font-semibold text-sm text-black dark:text-black md:text-lg md:font-semibold lg:text-semibold lg:text-sm lg:font-semibold ">Hvor ofte bør jeg få gjort rent?</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </div>
                <div id="content3" class="font-sans hidden text-sm px-1 pr-5 py-6 pt-0 ml-4 text-black dark:text-black lg:px-4 lg:text-sm lg:mt-1">
                    Dette er helt og holdent op til dig. Nogle vælger at få rengøringshjælp 1 gang om ugen, mens andre kun føler et behov for at få rengøringshjælp 1 gang om måneden. Rengøringshjælpen skal passe ind i din hverdag og til dit budget, og det er derfor noget vi vil tage en snak om under det indledende møde. 
                </div>
            </div>
            <div class="w-full md:w-full w-4/5 bg-white dark:white shadow-md lg:shadow-md cursor-pointer" data-toggle-content="content4">
                <div class="flex justify-between items-center px-5 py-4 focus:outline-none focus-visible:ri lg:pl-8">
                    <span class="font-sans font-semibold font-base text-sm text-black dark:text-black md:text-lg md:font-semibold lg:text-semibold lg:text-sm lg:font-semibold ">Skal jeg være hjemme, under rengøringen?</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </div>
                <div id="content4" class="font-sans hidden text-sm px-1 pr-5 py-6 pt-0 ml-4 text-black dark:text-black lg:px-4 lg:text-sm lg:mt-1">
                    Det er helt op til dig, om du ønsker at være hjemme mens rengøringsopgaverne bliver udført, og er noget som enhver rengøringshjælp skal respektere. Det handler om, hvad der gør dig tryg, og hvad du har det bedst med. 
                </div>
            </div>
            <div class="w-full md:w-full w-4/5 bg-white dark:white shadow-md lg:shadow-md cursor-pointer" data-toggle-content="content5">
                <div class="flex justify-between items-center px-5 py-4 focus:outline-none focus-visible:ri lg:pl-8">
                    <span class="font-sans font-semibold font-base text-sm text-black dark:text-black md:text-lg md:font-semibold lg:text-semibold lg:text-sm lg:font-semibold ">Hvor kan jeg komme i kontakt med Paula?</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </div>
                <div id="content5" class="font-sans hidden text-sm px-1 pr-2 py-6 pt-0 ml-4 text-black dark:text-black lg:px-4 lg:text-sm lg:mt-1">
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
#mc-embedded-subscribe {background-color:rgb(21, 21, 21); border-radius: 50%;}

</style>

<script>

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