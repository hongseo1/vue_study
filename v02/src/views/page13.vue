<script>
import LocalComponent from "../components/LocalChild.vue"; //../src > @로 생략 가능
    export default{
        components: {
            LocalComponent,
        },
    }
</script>

<template>
    <div id="study14" class="study_box">
        <h3>Component 지역 컴포넌트와 전역 컴포넌트</h3>
        <div>
        Vue 컴포넌트는 UI를 구성하는 독립적인 재사용 가능한 블록이다. <br/>
        재사용, 유지보수, 단순화에 용이하다. <br/>
        컴포넌트 사용 순서 <br/>
        컴포넌트 생성>등록(지역 등록 또는 전역 등록)>html 태그 형태로 사용할 곳에 삽입
        </div>
        <h3>Page01.Vue</h3>
        <LocalComponent/>
        <GlobalChild/> 
    </div>
</template>