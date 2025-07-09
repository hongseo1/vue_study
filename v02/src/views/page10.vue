<script>
    export default{
        data(){
            return{
                myWidth: '400px',
                myWidth1: 50,
            }
        },
        methods: {
            incWidth: function(){
                this.myWidth1 += 10;
            },
            initWidth (){
                this.myWidth1 = 50;
            },
        }
    }
</script>

<template>
    <div id="study11" class="study_box">
        <h2>style 바인딩</h2>
        <div class="demo" v-bind:style="{width: myWidth}"></div>
        <div class="demo" @mouseover="initWidth" :style="{width: myWidth1 + 'px'}"></div>
        <button @click="incWidth">버튼을 클릭해보세요.</button>
    </div>
</template>

<style scoped>
    .demo{width: 100px; height: 100px; margin-bottom: 10px; background-color: blueviolet;}
</style>