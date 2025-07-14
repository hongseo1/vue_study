import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '@/components/HomeView.vue';
import AboutView from '@/components/AboutView.vue';
import HelloView from '@/components/HelloView.vue';

const routes = [
    {
        path: '/',
        component: HomeView
    },
    {
        path: '/about',
        component: AboutView
    },
    {
        path: '/hello',
        component: HelloView
    }
]

const router = createRouter({
    history: createWebHistory('/'),
    routes
});

export default router