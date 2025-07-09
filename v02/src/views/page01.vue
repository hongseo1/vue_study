<script>
    export default{
        date(){
            return{
                subject: "<b>vue 기초부터 다시 공부하기</b>",
                date: 250706,
            }
        }
    }
</script>

<template>
    <div id="study01" class="study_box">
        <!-- text interpolation(삽입, 보간법) & Directive(지시, 지령) 방법-->
        <h2>interpolation 방법: 데이터를 그대로 가져와서 출력</h2> <!-- 텍스트를 입력하듯이 테그 안에 직접 데이터를 삽입  -->
        <p>제목: {{subject}}</p> <!-- interpolation으로는 html태그 그대로 출력 아래의 v-html과의 차이점 -->
        <p>시작 날짜: {{date}}</p>
        <p>{{ `오늘의 행운의 숫자: ` + Math.ceil(Math.random()*100) }}</p>
    
        <h2>Directive 방법: 데이터를 태그 하나의 속성처럼 추가</h2> <!-- text Directive: 태그에 하나의 속성(attribute)으로 사용해야 함 -->
        <h3>v-html, v-text, v-pre</h3>
        <p v-html="subject"></p> <!-- v-html은 innerhtml과 비슷하다고 생각.. -->
        <p v-text="date"></p>
        <p v-pre>제목: {{subject}}</p> <!-- v-pre data이름 그대로 출력 -->
    </div>
</template>