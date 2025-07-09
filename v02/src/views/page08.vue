<script>
    export default{
        data(){
            return{
                site_name: "Daum",
                url: "https://daum.net",
                src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ3Hv6iGG5mrI76aruo7gRz7BTVzMs1SV2wo6hi-ohzY7bF6bxFCYLTqNsCO8GdB8jt2lHehNqcpDfRNYEJ-utWtQ",
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
    <div id="study09" class="study_box">
        <h3>Dom 요소의 속성을 동적으로 변경하는 v-bind 디렉티브</h3>
        <a :href="url">{{site_name}}</a>
        <img :src="src" alt="사자">
        <!--
        :(콜론) 앞에 v-bind 생략 가능 
        3.4이상 버전에서는 :src="src"처럼 변수명과 속성명이 같을 경우 :src로 생략 가능
        url, src 같은 경우에는 {{}} 형식이 아닌 data에서 return되는 변수 값을 입력해야 한다.
        -->
        <button @click="clickAr">버튼</button>
    </div>
</template>