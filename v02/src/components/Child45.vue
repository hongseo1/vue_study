<!-- page45 -->
<script setup>
    /* 
    import { ref } from 'vue';

    const props = defineProps({
        subject: String
    }); 
    const inputText = ref('Hi~');
    const emits = defineEmits('onInput');
    */
    const model = defineModel();
</script>
<template>
    <!-- 기존 props, emits 방식
    Child: {{props.subject}}
    <p>inputText: {{inputText}}</p>
    <input type="text" @input="inputText=$event.target.value; emits('onInput', inputText)"> 
    -->
    Child: {{model}} <br/>
    <input type="text" v-model="model">
</template>