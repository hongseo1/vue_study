<script setup>//setup hook에 넣었던 내용을 더 간결하게
    import { computed, ref } from 'vue';

    const cnt = ref(0);
    const oddEven = computed(() => (cnt.value % 2) ? '홀수' : '짝수');
    const counter = () => cnt.value++;
</script>

<template>
    <div id="study22" class="study_box">
        <h3>Composition API</h3>
        <div>
            Vue3에서 새롭게 등장한 함수 기반의 API로 컴포넌트 로직을 유연하게 구성하도록 지원하여 코드의 재사용성과 가독성을 높여준다. <br/>
            기존 Option API와 Composition API의 비교 <br/>
            - Option API: 지금까지 배운 거, 컴포넌트 로직을 Data, methods, computed, watch 등의 옵션에 담아서 구분함 <br/>
            - Composition API: Vue3에서 새로 도입된 방식, 함수형 프로그래밍 스타일과 유사 관련 로직을 setup hook에 정의하여 사용, 코드의 재사용성이 높아져서 큰 프로젝트에 적합
        </div>

        <h2>Composition API setup hook에 넣었던 내용을 더 간결하게</h2>
        <p>{{cnt}}</p>
        <p>홀짝 판별: {{oddEven}}</p>
        <button @click="counter">클릭</button>
    </div>
</template>

