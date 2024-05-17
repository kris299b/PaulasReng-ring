<template>
    <div class="cookie-banner fixed bottom-0 left-0 w-full p-4 shadow-lg z-1000 lg:w-full">
        <div class="flex pt-5 lg:pt-3 lg:px-10">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0,0,256,256"
                style="fill:#000000;">
                <g fill="#cdd1dc" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(10.66667,10.66667)"><path d="M12,2c-5.514,0 -10,4.486 -10,10c0,5.514 4.486,10 10,10c5.514,0 10,-4.486 10,-10c0,-1.126 -0.19602,-2.2058 -0.54102,-3.2168l-1.61914,1.61914c0.105,0.516 0.16016,1.05066 0.16016,1.59766c0,4.411 -3.589,8 -8,8c-4.411,0 -8,-3.589 -8,-8c0,-4.411 3.589,-8 8,-8c1.633,0 3.15192,0.49389 4.41992,1.33789l1.43164,-1.43164c-1.648,-1.194 -3.66656,-1.90625 -5.85156,-1.90625zM21.29297,3.29297l-10.29297,10.29297l-3.29297,-3.29297l-1.41406,1.41406l4.70703,4.70703l11.70703,-11.70703z"></path></g></g>
                </svg>
            </div>
            <h1 class="text-darkblue font-bold text-lg lg:px-3 ">Denne hjemmeside bruger cookies</h1>
        </div>
        <p class="text-black lg:text-sm lg:px-10 lg:pt-2">Hjemmesiden bruger cookies til at indsamle statistik og analysere trafikken på hjemmesiden, statistikken bliver brugt til at forbedre brugervenligheden på hjemmesiden, og oplysningerne i statistikken er anonyme og bliver ikke koblet til dig som bruger. Hvis du trykker "Afvis" til cookies, bliver der ikke sat en statistikcookie på din computer.</p>
        <p class="text-black lg:text-sm lg:px-10 lg:pt-1">Hvis du vil vide mere om privatlivspolitikken kan du læse mere <RouterLink to="privacypolicy" class="text-darkblue font-semibold">her.</RouterLink></p>
        <div class="flex justify-start space-x-4 mt-4 lg:px-10 lg:pb-3">
            <button @click="acceptCookies" class="bg-blue text-white font-semibold py-2 px-6 rounded-full">Accepter</button>
            <button @click="declineCookies" class="bg-transparent border-2 border-blue text-blue font-semibold py-2 px-6 rounded-full">Afvis</button>
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
    background-color: #fdfdfd; /* Slight transparency */
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2); /* Optional shadow for better visibility */
    padding: 1rem 2rem; /* Padding for better spacing */
}
</style>