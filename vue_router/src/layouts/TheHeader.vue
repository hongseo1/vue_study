<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<template>
    <p>Header</p>
    <p>
        <a href="/">Home</a> |
        <a href="/about">About</a> |
        <a href="/hello">hello</a>
    </p>
    <p>
        <!-- 
        :to="{name: 'HomePage'}" 처럼 라우트 이름으로 링크 지정 시 HomePage의 path가(url 경로) 변경되어도 코드 수정할 필요 없이 설정만 변경하면 된다.(유지보수성을 향상) 
        to="/about"의 경우는 직접적인 경로(path) 기반으로 이동 대상을 지정하는 방식
        :to 와 to의 차이 
        :to v-bind:to 축약, to속성에 javascript 표현식(변수, 객체, 계산된 값 등)의 결과를 전달할 때 사용(동적인 경로 생성에 필수적), 복잡한 경로에 적합(객체 형태로 명확하게 지정 가능하기에 쉽게 구성할 수 있음), 타입의 안전성(객체 문법을 사용하면 경로가 깨지는 것을 방지하고 더 명확하게 의도 표현 가능) / ++ :id와 같은 동적 세그먼트에 값을 전달하거나, 쿼리 매개변수(?key=value)를 추가할 때 객체 문법이 편리, 프로그래밍 방식의 라우팅과의 일관성

        결론: 동적인, 복잡한 경로, 매개변수가 필요한 경로, 쿼리 매게변수가 필요한 경로 또는 이름 기반 라우트를 사용할 때 사용, javascript 표현식의 평가 결과에 따라 경로가 결정

        to="문자열"(일반 to의 속성) vue에서 이 문자열을 정적인 값으로 해석하고 변경되지 않는 경로로 간주

        결론: 경로가 고정된, 정적인 경로로 이동할 때 사용
         -->
        <RouterLink :to="{name: 'HomePage'}" active-class="on">Home</RouterLink> |
        <RouterLink to="/about" active-class="on">About</RouterLink> |
        <RouterLink to="/hello" active-class="on">hello</RouterLink> |
        <RouterLink :to="{name: 'ProductPage', params:{id: '1'}, query:{lang:'ko'}}" active-class="on">product 1</RouterLink> |
        <RouterLink :to="{name: 'CompanyPage'}" active-class="on">Company</RouterLink>
        <!-- active-class="on" router-link-active대신 on 클래스로 active 효과 적용 -->
    </p>
</template>