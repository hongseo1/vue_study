<script setup>
    import { useRoute } from 'vue-router';
    const route = useRoute();

    console.log('route.path' + route.path);
</script>

<template>
    <p>About View</p>
    <p>{{$route.path}}</p> <!-- $route.path : 현재 위치 출력 -->
    <!-- <p>{{$route}}</p> -->
    <button @click="$router.push('/hello')">Hello 페이지로 이동</button>
</template>