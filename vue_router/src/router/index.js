import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '@/components/HomeView.vue';
import AboutView from '@/components/AboutView.vue';
import HelloView from '@/components/HelloView.vue';
import ProductView from '@/components/ProductView.vue';
import NotFoundView from '@/components/NotFoundView.vue';

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
    },
    {
        path: '/product/:id', // /product/:id :id = 동적인 url 생성, 고정된 url이아닌 :id를 통해 다양한 제품에 접근할 수 있는 동적인 url을 만들 수 있다. + 특정 리소스 식별, 서버는 :id에 전달된 값을 사용하여 데이터베이스에서 해당 ID에 맞는 제품 정보를 조회하고 클라이언트에게 반환한다.
        name: 'ProductPage',
        component: ProductView
    },
    {
        path: '/:pathMatch(.*)*',
        name: "NotFoundPage",
        component: NotFoundView
    }
]

const router = createRouter({
    history: createWebHistory('/'),
    routes
});

export default router