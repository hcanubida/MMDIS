// main.js

import { createApp } from 'vue';
import router from './router';
import App from './App.vue';


// Create and mount the Vue app
// const app = createApp({});
// app.use(router);
// app.mount('#app');

createApp(App)
  .use(router)
  .mount('#app');
