<script>
    export default{
        data(){
            return{
                count: 0,
            }
        }
    }
</script>

<template>
    <div id="study03" class="study_box">
        <h3>v-on 이벤트 핸들링</h3>
        <p>{{"count: " + count}}</p>
        <button v-on:click="count++">숫자 증가</button> <!-- v-on:이벤트="이벤트 결과" -->
        <button @click="count--">숫자 감소</button>
        <button v-on:mouseover="count=0">0으로 초기화</button>
        <!-- v-on을 @로 생략가능 v-on:click -> @click -->
    </div>
</template>