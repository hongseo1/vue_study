<script setup>
    import { ref, reactive, watch } from 'vue';
    const cnt = ref(1);
    const obj = reactive({old:null, new:null});
    const counter = () => cnt.value++; //vue에서는 함수표현식을 권장 

    /* 
    function counter1(){//함수 선언문은 정의된 위치와 상관 없이 제일 위에서 수행이 되는 속성이 있다 / 함수표현식은 아래로만 가능
        cnt.value++;
    } 
    */
    watch(cnt, (newValue, oldValue) => {// watch(첫번째 인자(감시할 대상), 콜백함수 (인자1, 인자2){함수내용}
        obj.old = oldValue;
        obj.new = newValue;
    })
</script>

<template>
    <div id="study27" class="study_box">
        <h3>Composition API - watch</h3>

        <p>cnt: {{cnt}}</p>
        <p>old: {{obj.old}} / new: {{obj.new}}</p>
        <button @click="counter">클릭</button>
    </div>
</template>