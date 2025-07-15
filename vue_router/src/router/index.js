import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '@/components/HomeView.vue';
import AboutView from '@/components/AboutView.vue';
import HelloView from '@/components/HelloView.vue';

const routes = [
    {
        path: '/',
        name: 'HomePage', //name 지정시 .vue에서 route를 이용하여 route.name을 출력할 수 있다.
        component: HomeView
    },
    {
        path: '/about',
        name: 'AboutPage',
        component: AboutView
    },
    {
        path: '/hello',
        name: 'HelloPage',
        component: HelloView
    }
]

const router = createRouter({
    history: createWebHistory('/'),
    routes
});

export default router