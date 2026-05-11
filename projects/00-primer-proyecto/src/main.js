import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router' 

import './main.css'

const app = createApp(App)

// ORDEN CRÍTICO: El router debe instalarse ANTES de montar la app
app.use(createPinia())
app.use(router)

app.mount('#app')