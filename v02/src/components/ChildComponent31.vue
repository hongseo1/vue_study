<!-- page31 -->
 <script setup>
    import { defineEmits } from 'vue';
    
    const emit = defineEmits(['customEvent']);

    const handleClick = () => {
        emit('customEvent', 'Button clicked!')
    }
</script>

<template>
    <button @click="handleClick">Click Me</button>
</template>