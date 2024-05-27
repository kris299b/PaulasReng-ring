import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import './assets/main.css'
import './index.css'
import posthogPlugin from './plugins/posthog' 
import HomeView from './views/HomeView.vue'
import GuideView from './views/GuideView.vue'
import PrivateCleaningView from './views/PrivateCleaningView.vue'
import CommercialCleaningView from './views/CommercialCleaningView.vue'
import AboutView from './views/AboutView.vue'
import PricesView from './views/PricesView.vue' // Import PricesView
import ContactView from './views/ContactView.vue' // Import ContactView
import PrivacyPolicyView from './views/PrivacyPolicyView.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomeView },
        { path: '/guide', component: GuideView },
        { path: '/privatecleaning', component: PrivateCleaningView },
        { path: '/commercialcleaning', component: CommercialCleaningView },
        { path: '/about', component: AboutView },
        { path: '/prices', component: PricesView },
        { path: '/contact', component: ContactView },
        { path: '/privacypolicy', component: PrivacyPolicyView },
    ],
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
});

router.beforeEach((to, from, next) => {
    // Example guard logic: Redirect to home if not authenticated
    const isAuthenticated = true; // Replace with your authentication check
    if (to.name !== 'home' && !isAuthenticated) {
        next({ name: 'home' }); // Redirect to home if not authenticated
    } else {
        next(); // Continue navigation
    }
});

const app = createApp(App)

app.use(posthogPlugin)
app.use(router)
app.mount('#app')


