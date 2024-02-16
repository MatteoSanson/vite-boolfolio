import { createApp } from 'vue'
//import default scss
import './assets/scss/style.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

// Import router
import { router } from './pages/router';

import App from './App.vue'

createApp(App).use(router).mount('#app');