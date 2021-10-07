import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import '@/assets/css/tailwind.css'

// import uPlot from 'uplot';
// import UplotVue from 'uplot-vue';
// import 'uplot/dist/uPlot.min.css';

const app = createApp(App)
// app.component("UplotVue", UplotVue)
app.use(store)
app.use(router)
app.mount('#app')
