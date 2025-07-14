import {createApp} from 'vue'
import App from './App.vue'
import GlobalChild from '@/components/GlobalChild.vue' //page14
import {BootstrapVue3} from 'bootstrap-vue-3'; //page35
import 'bootstrap/dist/css/bootstrap.css'; //page35
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css' //page35
import router from './router'; // router 폴더의 index.js에서 내보낸 라우터 인스턴스 가져오기 / page35

const app = createApp(App);
app.use(router); //page35
app.component("GlobalChild", GlobalChild);
app.use(BootstrapVue3);
app.mount('#app');