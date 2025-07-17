<script setup>
    import First47 from '@/components/First47.vue';
    import { ref, provide } from 'vue'; //provide: 정의할 때

    
    const count = ref(0);
    provide('count', count)
    const increment = () => count.value++;
</script>

<template>
    <div id="study47" class="study_box">
        <h3>Props Drilling / Provide와 Inject를 통한 해결</h3>
        <div>
            provide: 데이터를 제공(정의)할 때 사용, 특정 컴포넌트(부모 컴포넌트)에서 값을 정의하여 하위 컴포넌트들에게 "제공"하고, 이 값을 기억하게 한다.
            inject: 제공된 데이터를 주입(사용)할 때 사용, provide를 통해 제공된 값을 하위 컴포넌트에서 "꺼내서" 사용할 수 있게 한다.
        </div>
        <p>App</p>
        <button @click="increment">Counting</button>
        {{count}}
        <!-- <first47 :count/> -->
        <first47/>
    </div>
</template>

<style scoped>
    div{border: 3px solid black; padding: 30px;}
</style>