// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import home from '../views/home.vue';

// 페이지 컴포넌트들을 동적으로 임포트하는 함수
const import_page_commpoenet = (page_number) => {
  return()=> import(`../views/page${String(page_number).padStart(2,'0')}.vue`) 
};//.padStart(2,0) 숫자 두자리 만들고 앞에 0으로
//각 페이지의 고유한 제목을 정의하는 객체 또는 배열
const page_titles = {
  '01': '1. text interpolation(삽입, 보간법) & Directive(지시, 지령) 방법',
  '02': '2. Directive v-if, else-if, v-for',
  '03': '3. v-on 이벤트 핸들링',
  '04': '4. methods 옵션, 사용자 함수 / 메서드 만들기',
  '05': '5. v-on modifier 수정자',
  '06': '6. 마우스 좌표 출력하기',
  '07': '7. 양방향 바인딩 v-model 디렉티브',
  '08': '8. Dom 요소의 속성을 동적으로 변경하는 v-bind 디렉티브',
  '09': '9. Class 바인딩',
  '10': '10. Style 바인딩',
  '11': '11. Computed 계산된 속성',
  '12': '12. watcher 속성',
  '13': '13. Component 지역 컴포넌트와 전역 컴포넌트',
  '14': '14. 컴포넌트 생명주기(component Lifecycle)',
  '15': '15. Ref 속성',
  '16': '16. Props 부모->자식 컴포넌트로의 데이터 전달 수단',
  '17': '17. Emit(방출하다.) 자식-> 부모 컴포넌트로 데이터 전달 및 Trigger할 수 있는 방법 제공',
  '18': '18. Provide와 inject 데이터의 효율적인 전달',
  '19': '19. Slot(자리, 넣다, 홈) 사용방법',
  '20': '20. Composition API - 기존 Options API 방식',
  '21': '21. Composition API - Composition API 초창기 방식(setup hook에 정의)',
  '22': '22. Composition API - setup hook에 넣었던 내용을 더 간결하게(script에 setup)하는 방식',
  '23': '23. Composition API - ref, reactive 사용1',
  '24': '24. Composition API - ref, reactive 사용2',
  '25': '25. Composition API - 동적으로 클래스 적용 하기',
  '26': '26. Composition API - computed 사용',
  '27': '27. Composition API - watch 사용',
  '28': '28. Composition API - watch 옵션 중 immediate와 deep CompositionAPI',
  '29': '29. Composition API - watchEffect',
  '30': '30. Composition API - defineProps',
  // 필요한 만큼 페이지 제목을 추가
};
const routes = [
  {
    path: '/', // URL 경로 (루트 경로)
    name: 'home', // 라우트 이름 (선택 사항이지만 유용)
    component: home // 이 경로로 접속했을 때 보여줄 Vue 컴포넌트
  },
];
const total_pages = 30; //총 페이지 수

for(let n=1; n<=total_pages; n++){
  const page_number_string = String(n).padStart(2,'0'); // 01 02 ..로 담음
  const title_for_page = page_titles[page_number_string] || `제목 없음(${page_number_string})`; // 정의된 제목 사용

  routes.push({
    path: `/page${page_number_string}`,
    name: `Page${page_number_string}`,
    component: import_page_commpoenet(n),
    meta: {
      title: title_for_page // 이 제목이 App.vue에서 사용됩니다.
    }
  });
}

/* import page01 from '../views/page01.vue';
import page02 from '../views/page02.vue';
import page03 from '../views/page03.vue';
import page13 from '../views/page13.vue'; */

//1. 라우트 정의: 배열 형태로 여러 라우트를 정의
//const routes = [
  /* {
    path: '/', // URL 경로 (루트 경로)
    name: 'home', // 라우트 이름 (선택 사항이지만 유용)
    component: home // 이 경로로 접속했을 때 보여줄 Vue 컴포넌트
  }, */
  /* {
    path: '/page01',
    name: 'page01',
    component: page01
  }, */
  /* {
    path: '/contact',
    name: 'Contact',
    // 라우트를 지연 로딩할 수도 있습니다. (성능 최적화)
    component: () => import('../views/ContactView.vue')
  } */
//];

// 2. 라우터 인스턴스 생성
const router = createRouter({
  history: createWebHistory('/'),//장 간단한 방법 (루트 경로인 경우): 애플리케이션이 항상 웹 서버의 루트 경로(/)에서 제공된다면 process.env.BASE_URL 대신 / 사용 
  //process.env.BASE_URL은 일반적으로 Vue CLI로 프로젝트를 생성했을 때 자동으로 설정되는 환경 변수
  routes
  //history: createWebHistory(), // HTML5 History API를 사용하여 깔끔한 URL 생성
  //routes // 위에서 정의한 라우트들을 연결
});

// 3. 라우터 내보내기 (main.js에서 사용하기 위함)
export default router;