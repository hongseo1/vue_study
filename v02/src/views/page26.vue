<script setup>
    import {ref, computed} from 'vue';

    const cnt = ref(10);
    const oddEven = computed(() => cnt.value%2 ? '홀수' : '짝수');

    const counter = () =>{
        cnt.value++;
    }
    /* arrow function 다시 한 번 집고 넘어가기
    const: 상수, 상수로 지정한 count에 다른 값을 다시 할당할 수 없도록 고정
    counter: 함수 이름
    () => {..}: ()안에는 함수 실행 시에 전달할 값(인자) / =>는 함수 정의에서 매개변수 부분과 함수가 실제로 실행할 코드를 구분 / {..}안에는 함수가 실행할 코드 안에 순서대로 실행 
    */
</script>

<template>
    <div id="study26" class="study_box">
        <h3>Composition API - computed</h3>

        <p>cnt: {{cnt}}</p>
        <p>홀짝 판별: {{oddEven}}</p>
        <button @click="counter">클릭</button>
    </div>
</template>