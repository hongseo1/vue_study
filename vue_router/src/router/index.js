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
    {//redirect: url이 /aboutus(레거시(이전부터 존재하던 페이지))에서 /about으로 변경되었을 때 /aboutus url로 들어왔어도 /about으로 리다이렉트시켜준다.(페이지 이동) / 특정 경로로 들어오는 모든 요청을 다른 표준 경로로 통일 시키고 싶을 때나 사용자가 실수로 다른 경로를 입력했을 때 올바른 페이지로 보내줄 때 사용 (주로 영구적인 경로 변경 시)
        path: '/aboutus',
        redirect: '/about'
    },
    {
        path: '/about',
        name: 'AboutPage',
        component: AboutView,
        alias: '/about_new', //alias(별칭): 같은 페이지를 다른 path로 접근할 수 있게해주는 속성 / 하나의 컴포넌트에서 여러개의 유요한 url을 부여하고 싶을 때나 url을 변경하지 않고도 다른 경로로 페이지에 접근할 수 있도록 하고 싶을때(ex. 검색엔진 최적화를 위해 여러 키워드 url을 사용)

        //beforeEnter: 특정 개별 라우트로 진입하기 전에만 실행, 시점: 해당 path로 접근하려고 할 때만 실행. 라우트에서 나갈 때는 실행되지 않음
        beforeEnter: (to, from, next) => {
            console.log('라우터별 가드: beforeEnter')
            next()
        }
    },//redirect와 alias 차이 redirect는 url 변경이 있고 브라우저 히스토리에 새 경로를 푸시하고, alias는 url변경이 없으며 현재 경로를 유지하면서 해당 라우트와 매칭 한다
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
            components: { //component의 복수형 components으로 여러개의 컴포넌트를 임포트할 수 있다.
                header: () => import ('@/components/company/HeaderView.vue'),
                body: () => import ('@/components/company/IntroView.vue'),
                footer: () => import ('@/components/company/FooterView.vue')
            }
        },
        {
            path: 'map',
            name: 'company-map',
            components: {
                header: () => import ('@/components/company/HeaderView.vue'),
                body: () => import ('@/components/company/MapView.vue'),
                footer: () => import ('@/components/company/FooterView.vue')
            }
        },
        {
            path: 'history',
            name: 'company-history',
            components: {
                header: () => import ('@/components/company/HeaderView.vue'),
                body: () => import ('@/components/company/HistoryView.vue'),
                footer: () => import ('@/components/company/FooterView.vue')
            }
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

//전역 가드
/* 
//beforeEach: Vue 애플리케이션의 모든 라우트 이동 시점에 실행. 시점: 어떤 페이지에서 어떤 페이지로 이동하든지, 심지어 초기 페이지 로드 시에도 항상 가장 먼저 실행
router.beforeEach((to, from, next) => {//해당 라우터로 이동하기 전에 시행됨 to, from, next(어디로 가는지, 어디에서 왔는지, 콜백함수)
    console.log(to)
    console.log(from)
    if(to.fullPath !== '/company'){//가고자하는 fullPath가(페이지가) /company 아닌경우에만
        next() //호출 해줘야 페이지 이동
    }
    
})
*/

export default router