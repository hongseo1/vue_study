import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '@/components/HomeView.vue';
import AboutView from '@/components/AboutView.vue';
import HelloView from '@/components/HelloView.vue';
import ProductView from '@/components/ProductView.vue';
import NotFoundView from '@/components/NotFoundView.vue';

const routes = [
    {
        path: '/home22',
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
        path: '/company',
        name: 'CompanyPage',
        component: () => import('@/components/company/CompanyView.vue'), //동적 임포트: 해당 url이 호출이 될때 해당 컴포넌트가 들어오는 방식(비동기적 로딩) 자주 사용하지 않는 페이지에 적용시 효율적(애플리케이션의 초기 로딩 속도 향상)
        children: [{
            path: 'intro', //앞에 /가 붙지 않는 이유: url경로가 company/intro이여야 하는데 /intro라고 인식하게 됨 또한 직접 company/intro으로 지정해도 무방하나 나주에 앞에 경로가 바뀌면 유지보수가 어려움 즉, 유지보수 향상을 위해 children을 활용해 /없이 하위 페이지 정보 작성 
            name: 'company-intro',
            component: () => import ('@/components/company/IntroView.vue')
        },
        {
            path: 'map',
            name: 'company-map',
            component: () => import ('@/components/company/MapView.vue')
        },
        {
            path: 'history',
            name: 'company-history',
            component: () => import ('@/components/company/HistoryView.vue')
        }]
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