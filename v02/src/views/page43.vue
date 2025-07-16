<template>
    <div id="study43" class="study_box">
        <h3>Vue-Router (GitHub vue_study/vue_router 참고)</h3>
        <div>
            Vue.js를 이용하여 Single Page Application를 구현할 때 사용하는 Vue.js의 공식 라우터 <br/>
            URL에 따라서 어떤 컴포넌트를 보여줄 지 매핑해주는 라이브러리 <br/>
            브라우저에 /hello의 경로로 접속을 하면 Hello.vue 컴포넌트를 화면에 띄우게 하는 역할 수행 <br/>
            <br/>
            Vue-Router 설치 <br/>
            npm install vue-router <br/>
            src/router/index.js파일에 router사용에 필요한 정보 입력 <br/> 
            Router와 Route (route사용 방법 about page  / router사용 방법 hello page) <br/>
            ++추가 설명 with Gemini <br/>
            Router와 Route 차이: <br/>
            router(라우터 객체): vue 애플리케이션의 전체 라우팅 시스템 인스턴스를 의미, 애플리케이션의 모든 라우팅 관련 기능을 제어하고 관리하는 중앙 객체라고 생각할 수 있다. <br/>
            Vue Router 라이브러리(예: createRouter로 생성된 객체)가 제공하는 글로벌 라우터 인스턴스 / 애플리케이션 내의 모든 경로(route) 정의, 탐색(navigation), 가드(guards) 등을 포함하는 라우팅 엔진 그 자체 <br/>
            주요 기능 및 사용 예시 <br/>
            경로 이동:
            router.push('/home'): 특정 경로로 이동 <br/>
            router.go(-1): 뒤로 가기 <br/>
            경로 정의 및 설정: <br/>
            createWebHistory(), routes 배열 등을 통해 라우팅 규칙을 정의할 때 사용 <br/>
            동적 라우팅 제어: 프로그래밍 방식으로 경로를 변경하거나, 라우팅 관련 설정을 조회할 때 사용 <br/>
            Vue 컴포넌트 내에서는 주로 this.$router 또는 Composition API의 useRouter()를 통해 접근 <br/>
            비유: 복잡한 길(경로)들을 알고 있고, 어디로든 갈 수 있도록 안내하고 차량(애플리케이션)을 조종하는 내비게이션 시스템 전체 <br/>
            route(현재 라우트 객체): router 인스턴스에 의해 현재 활성화된 경로(URL)에 대한 정보를 담고 있는 객체입니다. 즉, 지금 사용자가 보고 있는 페이지의 URL, 쿼리 파라미터, 경로 파라미터 등과 같은 현재 상태에 대한 스냅샷 <br/>
            현재 URL과 일치하는 경로 정보를 담고 있는 읽기 전용(read-only) 객체 / 이 객체는 URL이 변경될 때마다 새로운 정보로 업데이트됨 <br/>
            주요 정보 및 사용 예시: <br/>
            route.path: 현재 경로의 전체 경로 (예: /users/123) <br/>
            route.params: 경로 파라미터 (예: /u <br/>sers/:id 에서 :id에 해당하는 값)
            route.query: 쿼리 파라미터 (예: /search?q=vue 에서 q=vue) <br/>
            route.name: 현재 경로의 이름 (이름 있는 라우트 사용 시) <br/>
            route.meta: 경로 메타 필드 (경로 정의 시 추가한 사용자 정의 정보)Vue 컴포넌트 내에서는 주로 this.$route 또는 Composition API의 useRoute()를 통해 접근 <br/>
            비유: 내비게이션 시스템이 현재 가리키고 있는 '현재 위치'의 상세 정보를 보여주는 화면으로 지금 몇 번 도로에 있고, 어떤 교차로를 지나왔으며, 목적지까지 남은 거리가 얼마인지와 같은 정보 <br/>
            <br/>
            즉, router: 내비게이션 시스템의 전체(경로 이동, 설정, 제어) <br/>
            route: 현재 위치 정보(현대 URL의 모든 상세 정보) <br/>
            <br/>
            이 둘은 상로 보완적으로 작동하며 router를 사용해 경로를 탐색하고, route를 사용하여 현재 경로의 정보를 얻어와 컴포넌트 내부에서 데이터를 로드하거나 UI를 변경하는 데 활용한다.
        </div>
        <h3>Vue Router 내비게이션 가드</h3>
        <div>
            리디렉션하거나 취소하여 내비게이션을 보호하는 사용 <br/>
            사용 방법: <br/>
            - 전역적으로 적용하는 가드 <br/>
            - 컴포넌트 적용하는 가드 <br/>
            - 라우터에 적용하는 가드 <br/>

            ++index.js와 HelloView.vue에 적용 참고 <br/>
            추가 설명 <br/>
            * 전역 가드(index.js하단 주석 확인): <br/> vue애플리케이션의 모든 라우트 이동 시점에 적용되는 가드 (활용 사례: 로그인 여부 일괄 확인, 전역 로딩 상태 관리(페이지 전환 시 스피너 보여주고 전환이 끝난 후 숨기는 등의 작업 가능)) <br/>
            * 컴포넌트 가드(HelloView.vue script 확인): <br/>
            특정 vue 컴포넌트 내에서 정의되는 가드, 해당 컴포넌트가 생성될 때, 업데이트될 때, 소멸될 때 등 컴포넌트의 생명주기와 연관되어 작동, 특히 해당 컴포넌트를 떠나거나 들어올 때의 특정 로직 처리에 유용 <br/>
            (Vue 컴포넌트 파일(.vue) 안에서 beforeRouteEnter, beforeRouteUpdate, beforeRouteLeave와 같은 옵션 API를 사용하거나, Composition API에서는 onBeforeRouteLeave, onBeforeRouteUpdate 훅을 사용하여 정의) <br/>
            (활용 사례: 데이터 저장 확인(사용자가 폼을 작성하다 저장 없이 다른 페이지 이동 시도 시 경고 메시지 띄우고 이탈을 막을 수 있다.), 특정 컴포넌트 진입 전/후 로직(해당 컴포넌트에서만 필요한 데이터 로딩이나 정리 작업을 할 때 유용)) <br/>
            * 라우터 가드(index.js routes = [] /about 부분 확인): <br/>
            특정 라우트 정의 안에 직접 설정하는 가드 beforeEnter 대표적, 해당 라우터로 진입하기 전에만 실앵, 전역 가드보다 범위가 좁고, 컴포넌트 가드보다는 범위가 넓다.(활용 사례: 특저 라우트에 대한 권한 확인(관리자 페이지, 마이 페이지 등 특정 권한이 필요한 라우트에만 적용하여 권한 없는 사용자의 접근을 막을 때 사용), 특정 라우트 진입 전 로딩(해당 라우트에서만 필요한 데이터를 미리 로딩해야할 경우 활용 가능))
        </div>
    </div>
</template>