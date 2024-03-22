// main.js

import { createApp } from 'vue';
import router from './router';
import App from './App.vue';




/* eslint-disable vue/injection-key */
createApp(App).use(router).mount('#app')
/* eslint-enable vue/injection-key */
