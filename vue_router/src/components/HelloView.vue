<script setup>
    import { useRouter } from 'vue-router';

    const router = useRouter();
    const goAboutView = () => {
        router.push('/about');
    }
</script>

<template>
    <p>Hello View</p>
    <p>Route Name: {{$route.name}}</p>
    <button @click="goAboutView">About 페이지로 이동</button>
</template>