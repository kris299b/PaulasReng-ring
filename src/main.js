import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import { cookieBot } from '@ambitiondev/vue-cookiebot';

const app = createApp(App)

app.use(router)
app.mount('#app')

app.use(cookieBot, {
    cookieBotId: '3b258f76-b671-4107-bbd6-82ec43b8831a',
  });