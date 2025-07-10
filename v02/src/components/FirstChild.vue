<!-- page18 -->
<script>
import GrandSon from '../components/SecondChild.vue';
export default{
    /* props:["gift"], */ /* provide를 사용함으로 props사용할 필요 없음 */
    components:{
        GrandSon
    }
}
</script>

<template>
    <div>
        <h1>자식 컴포넌트</h1>
        반가워요. 저는 자식의 자식 컴포넌트입니다.
        <GrandSon/><!-- <GrandSon :gift/> provide를 사용함으로 :gift할 필요 없어짐-->
    </div>
</template>

<style scoped>
    h1{color: blue;}
    div{width: 400px; height: 300px; border: 1px solid red;}
</style>