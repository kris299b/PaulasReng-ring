import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

const app = createApp(App)

app.use(router)
app.mount('#app')



app.use(cookieBot, {
    cookieBotId: '3b258f76-b671-4107-bbd6-82ec43b8831a',
  });

// Vendor
import { cookieBot } from '@ambitiondev/vue-cookiebot';

app.use(cookieBot, {
  cookieBotId: 'Y6cdd6648-05ad-476e-80a2-4245b2b7f782',
});

