import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia' //1

const pinia = createPinia(); //2

const app = createApp(App)
app.use(router)
app.use(pinia) //3
app.mount('#app')
