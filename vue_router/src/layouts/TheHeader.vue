<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<template>
    <p>Header</p>
    <p>
        <a href="/">Home</a> |
        <a href="/about">About</a> |
        <a href="/hello">hello</a>
    </p>
    <p>
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/about">About</RouterLink> |
        <RouterLink to="/hello">hello</RouterLink>
    </p>
</template>