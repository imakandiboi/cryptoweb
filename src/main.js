import { createApp } from 'vue'
import App from './App.vue'
import router from './router'; // Import the router configuration

import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap/dist/css/bootstrap.css';





createApp(App).use(router).mount('#app')
