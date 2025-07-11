<script setup>
    import {ref} from 'vue';
    
    const titleClass = ref('')

    const good1 = () => {
        titleClass.value = 'title';
    }
    //동일
    function good(){
        titleClass.value = 'title';
    }
</script>

<template>
    <div id="study26" class="study_box">
        <h3>Composition API - 동적으로 클래스 적용 하기</h3>
    </div>
    
    <h1 :class="titleClass">나를 빨간색으로 바꿔 보세요</h1>
    <button @click="good">클릭</button>
    <button @click="good1">클릭</button>
</template>

<style>
    .title{color: red;}
</style>