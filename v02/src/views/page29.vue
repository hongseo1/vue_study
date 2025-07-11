<script setup>
    import { ref, watchEffect } from 'vue';

    const count = ref(1);
    const name = ref('홍길동');

    const counter= () => count.value++;
    const updatName = () => name.value = name.value == '홍길동' ? '전우치' : '홍길동';

    watchEffect(
        () => {
            console.log(`count는 ${count.value}입니다. 이름은 ${name.value}입니다.`)
        }
    )
</script>

<template>
    <div id="study29" class="study_box">
        <h3>Composition API - watchEffect</h3>
        <div>
            watch와 다르게 watchEffect는 감시 대상을 명시하지 않으며, 콜백에서 언급되는 대상이 감시 대상이된다. 옵션을 설정하지 않아도 우선 한 번 실행한다.(immediate: true가 기본 값이다.) 
        </div>

        <p>count: {{count}}</p>
        <p>name: {{name}}</p>
        <button @click="counter">Click</button>
        <button @click="updatName">이름 변경</button>
    </div>
</template>