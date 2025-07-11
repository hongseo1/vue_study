<script>
    export default{
        data(){
            return{
                isActive: false,
                hasError: true,
                classObject: {//object형식으로
                bg1: true,
                'text-danger1': true
                },
                bgClass: 'bg2',
                erClass: 'text-danger2',
            }
        },
        methods: {
            clickAr(){
                this.site_name = "Naver";
                this.url = "https://naver.com";
            },
        }
    }
</script>

<template>
    <div id="study9" class="study_box">
        <h3>Class 바인딩</h3> <!-- 해당 클래스: true이면 해당 클래스 스타일 활성화, false이면 비활성화 -->
        <div class="border" :class="{bg: isActive, 'text-danger': hasError}">Warning</div> <!-- text-danger -이 있기 때문에 ''으로 감싸줘야 됨. -->
        <div class="border" :class="classObject">Warning</div> <!-- object형식으로 -->
        <div class="border" :class="[bgClass, erClass]">Warning</div> <!-- 배열 형식으로 -->
        <div class="border" :class="[isActive ? bgClass: '', erClass]">Warning</div>
    </div>
</template>

<style scoped>
    .border{width: 500px; margin-bottom: 10px; border: 2px solid red;}
    .bg, .bg1, .bg2{background-color: gray;}
    .text-danger, .text-danger1, .text-danger2{color: red;}
</style>