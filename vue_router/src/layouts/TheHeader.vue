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
        <RouterLink to="/" active-class="on">Home</RouterLink> |
        <RouterLink to="/about" active-class="on">About</RouterLink> |
        <RouterLink to="/hello" active-class="on">hello</RouterLink>
        <!-- active-class="on" router-link-active대신 on 클래스로 active 효과 적용 -->
    </p>
</template>