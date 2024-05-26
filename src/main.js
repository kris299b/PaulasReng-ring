import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import Router from './router'
import './index.css'
import posthogPlugin from './plugins/posthog' 
import HomeView from './views/HomeView.vue'
import GuideView from './views/GuideView.vue'
import PrivateCleaningView from './views/PrivateCleaningView.vue'
import CommercialCleaningView from './views/CommercialCleaningView.vue'
import AboutView from './views/AboutView.vue'

const app = createApp(App)

app.use(posthogPlugin)
app.use(Router)
app.mount('#app')


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', component: HomeView },
        { path: '/guide', component: GuideView },
        { path: '//privatecleaning', component: PrivateCleaningView },
        { path: '/commercialcleaning', component: CommercialCleaningView },
        { path: '/about', component: AboutView },
        { path: '/prices', component: PricesView },
        { path: '/contact', component: ContactView },
    ],
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
});




