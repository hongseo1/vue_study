<script setup>
    import { ref } from 'vue';
    import First46 from '@/components/First46.vue';
    import { useCountStore } from '@/store/count';
    /*
    const count = ref(0);
    const increment = () => count.value++;
    */
    const countStore = useCountStore()
</script>

<template>
    <div id="study46" class="study_box">
        <h3>Props Drilling / Pinia를 통한 해결</h3>
        <div>
            Prop Drilling: 드릴로 구멍을 뚫는 것처럼, 하위의 하위 컴포넌트(자손)에 데이터를 전달하기 위해 중간 단계의 컴포넌트를 거치는 것 <br/>
            page46에서 전달 First46에서 받아서 다시 전달 Second46에서 받아서 출력 이 과정은 중간에 First46에서도 Second46에서 props를 거쳐서 전달하고 받지만 Pinia를 사용해서 page46에서 Second46으로 First46에서 데이터를 거치지 않고 보낼 수 있다.
            (defineModel랑 헷갈리지 말것.) <br/>
            <br/>
            defineModel (Vue 3.4+에서 공식화): 주로 부모-자식 컴포넌트 간의 양방향 바인딩을 쉽게 하기 위한 기능으로 v-model의 내부 구현을 간소화한 것, 특정 컴포넌트와 그 부모 컴포넌트 사이의 데이터 흐름에 초점 여전히 props와 emit의 개념을 기반 <br/>
            <br/>
            Pinia: 전역적인 상태 관리를 위한 것. 컴포넌트 계층에 상관없이, 여러 컴포넌트가 하나의 중앙 집중식 저장소에서 데이터를 공유하고 변경할 수 있게 한다. 이는 단일 부모-자식 관계를 넘어선 복잡한 데이터 흐름에 이상적
        </div>

        <!-- <button @click="increment">카운팅</button> -->
        <!-- <First46 :count="count"/> -->
        <button @click="countStore.increment">카운팅</button>
        <First46/>
    </div>
</template>