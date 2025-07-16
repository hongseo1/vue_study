<script setup>
    import { ref } from 'vue';
    import Child45 from '@/components/Child45.vue';

    let subject = ref('subject');
</script>

<template>
    <div id="study45" class="study_box">
        <h3>DefineModel</h3>
        <div>
            Vue3.4부터 사용을 권장하는 Composition API Helper <br/>
            컴포넌트 간의 양방향 데이터 바인딩을 더 쉽게 수현할 수 있다. <br/>
            Props와 Emits로 하던 걸 v-model을 사용할 수 있게 기능 확장 <br/>
            부모 컴포넌트 -데이터-> 자식 컴포넌트 props <br/>
            부모 컴포넌트 <-데이터- 자식 컴포넌트 emits
        </div>

        <h2>App: {{subject}}</h2>
        <!-- 기존 props, emits 방식
        <child45 :subject="subject" @onInput="(val) => subject = val"/> 
        --> <!-- 이름이 같을 경우 :subject로 축약 가능 -->
        <child45 v-model="subject"/>
    </div>
</template>