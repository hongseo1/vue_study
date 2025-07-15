<script setup>
    import { useRoute } from 'vue-router';
    const route = useRoute();
    console.log(route.params) 
    console.log(route.query)

</script>

<template>
    <div>
        Product {{route.params.id}} <!-- page/뒷 번호id값 추출가능 -->
        Lang: {{$route.query.lang}} <!-- url page/:id/뒤에 ?lang=eng 입력시 lang 출력-->
    </div>
</template>