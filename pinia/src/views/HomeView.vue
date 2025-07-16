<script setup>
    import { useCntStore } from '@/store/cnt'; //useCntStore함수 임포트
    
    const cntStore = useCntStore(); //useCntStore함수 호출하여 cntStore에 pinia 스토어의 인스턴스 할당 / 이 컴포넌트 내에서 cntStore을 통해 pinia 스토어의 정의된 상태, 게터, 액션에 접근할 수 있음
</script>

<template>
    <h2>방문자 집계: {{cntStore.cnt}}</h2>
    <h2>홀짝 판별: {{cntStore.oddOreven}}</h2>
    <button @click="cntStore.inc">방문자 1 증가</button>
    <button @click="cntStore.dec">방문자 1 감소</button>
</template>
