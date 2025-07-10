<!-- page13 -->
<script>
    export default{
        //15
        beforeCreate(){console.log("GlobalComponent beforeCreate");},
        created(){console.log("GlobalComponent created");},
        beforeMount(){console.log("GlobalComponent beforeMount")},
        mounted(){console.log("GlobalComponent mounted")},
        beforeUpdate(){console.log("GlobalComponent beforeUpdate")},
        updated(){console.log("GlobalComponent updated")},
        deforeUnmount(){console.log("GlobalComponent deforeUnmount")},
        unmounted(){console.log("GlobalComponent unmounted")},
    }
</script>

<template>
    <h1>전역 컴포넌트</h1>
    <p>전역 컴포넌트입니다.</p>
</template>

<style scoped>
/* 컴포넌트 스타일은 전부다 영향을 준다. 그래서 scoped를 적어줘야 해당 컴포넌트에만 스타일 적용할 수 있다.*/
    h1{color: red;}
    p{color: orangered;}
</style>