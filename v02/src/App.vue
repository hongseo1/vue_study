<script>
  export default{
    /* data: function(){//아래와 동일 function 생략 가능
      return{
        channel : "첫 vue 프로젝트 연습",
        subscribe : 2677,
      }
    } */
    data(){
      return{
        subject : "<b>vue 기초부터 다시 공부하기</b>",
        date : 250706,
        score1 : false,
        score2 : 85,
        score3 : false,
      }
    },
  };
</script>

<template>
  <!-- text interpolation(삽입, 보간법) -->
  <h1>제목: {{subject}}</h1> <!-- interpolation으로는 html태그 그대로 출력 아래의 v-html과의 차이점 -->
  <h2>시작 날짜: {{ date }}</h2>
  <p>{{ `오늘의 행운의 숫자: ` + Math.ceil(Math.random()*100) }}</p>

  <!-- text Directive: 태그에 하나의 속성(attribute)으로 사용해야 함 -->
  <p v-html="subject"></p> <!-- v-html은 innerhtml과 비슷하다고 생각.. -->
  <h2 v-text="date"></h2>
  <p v-pre>제목: {{ subject }}</p> <!-- v-pre data이름 그대로 출력 -->

  <br/>

  <!-- v-if, else-if -->
  <p v-if="score1">true면 출력 됩니다.</p>
  <p v-if="score2>=90">평점: A</p>
  <p v-else-if="score2>=80">평점: B</p>
  <p v-else-if="score2>=70">평점: C</p>
  <p v-else>평점: F</p>

  <p v-if="score3">이 영역은 v-if 입니다.</p>
  <p v-show="score3">이 영역은 v-show 입니다.</p> 
  <!-- v-show는 값이 거짓일 경우 display: none; 이지만 v-if는 아예 영역 자체가 x 즉, 자주 변경되지 않는 영역일 경우 v-if를 사용, 토글 같이 비번하게 노출되거나 사라지는 영역일 경우 v-show를 사용할 수 있다.   -->

</template>

<style></style>
