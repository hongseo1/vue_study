import { createApp } from 'vue'
import App from './App.vue'
import GlobalChild from '@/components/GlobalChild.vue' //14
import router from './router'; // router 폴더의 index.js에서 내보낸 라우터 인스턴스 가져오기

const app = createApp(App);
app.use(router);
app.component("GlobalChild", GlobalChild);
app.mount('#app');

