<template>
     <div class="cookie-banner-container fixed inset-0 flex items-center justify-center z-40 lg:pt-10">
        <div class="cookie-banner rounded lg:w-2/3">
            <div class="flex pt-5 px-5 md:px-10 lg:pt-6 lg:px-10">
                <div class="lg:pt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0,0,256,256"
                    style="fill:#000000;">
                    <g fill="#cdd1dc" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(10.66667,10.66667)"><path d="M12,2c-5.514,0 -10,4.486 -10,10c0,5.514 4.486,10 10,10c5.514,0 10,-4.486 10,-10c0,-1.126 -0.19602,-2.2058 -0.54102,-3.2168l-1.61914,1.61914c0.105,0.516 0.16016,1.05066 0.16016,1.59766c0,4.411 -3.589,8 -8,8c-4.411,0 -8,-3.589 -8,-8c0,-4.411 3.589,-8 8,-8c1.633,0 3.15192,0.49389 4.41992,1.33789l1.43164,-1.43164c-1.648,-1.194 -3.66656,-1.90625 -5.85156,-1.90625zM21.29297,3.29297l-10.29297,10.29297l-3.29297,-3.29297l-1.41406,1.41406l4.70703,4.70703l11.70703,-11.70703z"></path></g></g>
                    </svg>
                </div>
                <h1 class="text-darkblue font-bold px-2 pb-2 text-lg lg:text-2xl lg:px-3">Denne hjemmeside bruger cookies</h1>
            </div>
                <p class="text-black px-5 pt-2 text-sm md:px-10 lg:font-semibold lg:text-sm lg:px-10 lg:pt-5">Vi benytter cookies til at indsamle statistik, og analysere trafikken på hjemmesiden.</p>
                <p class="text-black px-5 pt-2 text-sm md:px-10 lg:text-sm lg:px-10 lg:pt-2">Statistikken bliver brugt til at forbedre brugervenligheden på hjemmesiden, og oplysningerne i statistikken er anonyme og bliver ikke koblet til dig som bruger. Hvis du trykker "Afvis" til cookies, bliver der ikke sat en statistikcookie på din computer.</p>
                <p class="text-black px-5 pt-2 text-sm md:px-10 pb-3 lg:text-sm lg:px-10 lg:pt-2 lg:pb-5">Hvis du vil vide mere om privatlivspolitikken kan du læse mere <RouterLink to="privacypolicy" class="text-darkblue font-semibold">her.</RouterLink></p>
            <div class="flex justify-start space-x-4 mt-4 md:px-10 lg:px-10 border-t border-solid border-black">
                <button @click="acceptCookies" class="border-r border-black flex-1 px-4 py-3 text-darkblue font-semibold hover:text-darkblue duration-150">Accepter</button>
                <button @click="declineCookies" class="flex-1 px-4 py-3 text-black text-darkblue font-semibold hover:text-darkblue duration-150">Afvis</button>
            </div>
        </div>
    </div>
    
</template>

<script>
export default{
    name: 'CookieBanner',
    methods: {
        acceptCookies() {
            this.$posthog.opt_in_capturing();
            this.$emit('hideBanner');
        },
        declineCookies() {
            this.$posthog.opt_out_capturing();
            this.$emit('hideBanner');
        }
    }
}
</script>

<style scoped>
.cookie-banner {
    background-color: #fdfdfd; 
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2); /* Optional shadow for better visibility */
}

.cookie-banner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: -5px;
  width: 100%;
  height: 100%;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.3); /* semi-transparent background */
}

/* Small screen */
@media screen and (max-width: 915px) {

.cookie-banner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.3); /* semi-transparent background */
}
}


</style>