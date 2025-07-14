<script setup>
    import TheHeader from './layouts/TheHeader.vue';
    import TheBody from './layouts/TheBody.vue';
</script>

<template>
    <div id="study43" class="study_box">
        <h3>Vue-Router1</h3>
        <div>
            Vue.js를 이용하여 Single Page Application를 구현할 때 사용하는 Vue.js의 공식 라우터 <br/>
            URL에 따라서 어떤 컴포넌트를 보여줄 지 매핑해주는 라이브러리 <br/>
            브라우저에 /hello의 경로로 접속을 하면 Hello.vue 컴포넌트를 화면에 띄우게 하는 역할 수행 <br/>
            <br/>
            Vue-Router 설치 <br/>
            npm install vue-router <br/>
            src/router/index.js파일에 router사용에 필요한 정보 입력 <br/>
            Route와 Router (about page route/hello page router)
        </div>
        <TheHeader></TheHeader>
        <TheBody></TheBody>
    </div>
</template>