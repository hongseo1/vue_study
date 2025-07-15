<script setup>
    import { onBeforeRouteLeave, useRouter } from 'vue-router';
    

    const router = useRouter();
    const goAboutView = () => {
        router.push('/about');
    }

    /* 컴포넌트 가드 */
    //onBeforeRouteLeave: 가장 좁은 범위: 현재 보고 있는 특정 컴포넌트를 떠나려고 할 때 실행. 시점: 사용자가 현재 활성화된 컴포넌트(페이지)에서 다른 라우트로 이동하려고 할 때 실행
    onBeforeRouteLeave((to,from,next) => {
        console.log('onBeforeRouteLeave');
        if(to.fullPath !== '/company'){//hello페이지에서 가고자하는 fullPath가(페이지가) /company 아닌경우에만
            next() //페이지 이동
        }
    })
</script>

<template>
    <p>Hello View</p>
    <p>Route Name: {{$route.name}}</p>
    <button @click="goAboutView">About 페이지로 이동</button>
</template>