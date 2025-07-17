<!-- page47 -->
<script setup>
    /* 
    const props = defineProps({
        count: Number
    }); 
    */
    import { inject } from 'vue'; //inject: 사용할 때

    const count = inject('count');
</script>

<template>
    <div>
        <p>Second Component</p>
        <!-- count: {{props.count}} -->
        count: {{count}}
    </div>
</template>

<style scoped>
    div{border: 3px solid green; padding: 20px; margin: 20px;}
</style>