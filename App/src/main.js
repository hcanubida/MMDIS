import { createApp } from 'vue';
import { pinia } from './store'
import router from './router';
import App from './App.vue';


import './axios'



/* eslint-disable vue/injection-key */
createApp(App).use(router).use(pinia).mount('#app')
/* eslint-enable vue/injection-key */
