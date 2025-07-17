<!-- page46 -->
<script setup>
    /* 
    const props = defineProps({
        count: String
    }); 
    */
    import { useCountStore } from '@/store/count';

    const countStore = useCountStore();
</script>

<template>
    <p>Second Component</p>
    <!-- count: {{props.count}} -->
    count: {{countStore.count}}
</template>