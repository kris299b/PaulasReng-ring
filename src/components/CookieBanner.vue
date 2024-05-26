<template>
     <div class="cookie-banner-container fixed inset-0 flex items-center justify-center z-40 lg:pt-10">
        <div class="cookie-banner rounded lg:w-2/3">
            <div class="flex pt-5 px-5 md:px-10 lg:pt-6 lg:px-7">
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

/* Medium screen */
@media screen and (max-width: 1080px) {
    .cookie-banner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: -16px;
  width: 100%;
  height: 100%;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.3); /* semi-transparent background */
}
}


</style>