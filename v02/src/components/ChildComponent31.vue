<!-- page31 -->
<script setup>
    import { defineEmits } from 'vue';
    
    const emit = defineEmits(['customEvent']); //emit 함수 정의: 'customEvent'라는 이름의 이벤트를 발생시킬 수 있다고 선언(이벤트를 밖으로 내보낼 수 있게 선언)
    //defineEmits 하위, 상위 컴포넌트 이벤트 통신

    const handleClick = () => {
        emit('customEvent', 'Button clicked!')//customEvent' 이벤트 발생(emit), 'Button clicked!'라는 메시지(인자)를 이벤트와 함께 부모에게 전달
    }
</script>

<template>
    <button @click="handleClick">Click Me</button>
</template>