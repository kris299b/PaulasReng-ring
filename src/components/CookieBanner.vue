<template>
    <div class="banner">
        <p class="text-black md:text-black lg:text-black">This site uses cookies to deliver our services. By using our site, you acknowledge that you have read and understand our <a href="" id="privacy">privacy policies.</a></p>
        <button class="text-black md:text-black lg:text-black" id="button" @click="acceptCookies">Accept</button>
        <button class="text-black md:text-black lg:text-black" id="button" @click="declineCookies">Decline</button>
    </div>
</template>

<script>
export default {
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
.banner {
    background-color: #f3f3f3;
    padding: 20px;
    text-align: center;
}

#button {
    border: 1.5px solid black;
    margin-left: 20px;
    margin-top: 10px;
    padding: 5px 20px 5px 20px;
    border-radius: 20px;
}

#privacy {
    color: 444444;
    text-decoration: underline;
}
</style>