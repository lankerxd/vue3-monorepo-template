import { createApp } from 'vue'
import Router from './router'
import App from './App.vue'
import PiniaInit from './store/init'

createApp(App).use(Router).use(PiniaInit).mount('#app')
