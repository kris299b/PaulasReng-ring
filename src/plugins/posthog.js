import posthog from "posthog-js"

export default {
    install(app) {
        app.config.globalProperties.$posthog = posthog.init(
            "phc_N5Y9Vcr7zair5FPMEtKxnVeIUcmoZaQkNpokijcOgNs",
            {
                api_host: "https://app.posthog.com"
            }
        )
    }
}