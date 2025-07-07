<script>
  export default{
    /* data: function(){//아래와 동일 function 생략 가능
      return{
        channel : "첫 vue 프로젝트 연습",
        subscribe : 2677, //마지막 , 생략 가능
      }
    } */
    data(){
      return{
        subject: "<b>vue 기초부터 다시 공부하기</b>",
        date: 250706,
        score1: false,
        score2: 85,
        score3: false,
        sports: [
          'Baseball',
          'Football',
          'Volleyball',
          'Swimming',
        ],
        count: 0,
        userName: 'user',
        num: 0,
        click_yes: true,
        KValue: ''
      }
    },
    methods: {
      greeting1(){
        return 'Hi, there ' + this.userName //메서드에서 데이터에 접근할 때에 this.
      },
      greeting2(userName){//인자 값 받아서 사용 
        return 'Hi, there ' + userName 
      },
      increment(){
        this.num++
      },
      decrement(){
        this.num--
      },
      createAlert1(){
        if(this.click_yes){
          alert('경고창이 떴습니다.');
          this.click_yes = false;
        }
      },
      createAlert2(){
        alert('경고창이 떴습니다.');
      },
      getKey1(e){
        this.KValue = e.key;
      },
      getKey2(e){
        this.KValue = e.key;
        alert('alt + s 키를 눌렀습니다.')
      }
    }
  };
</script>

<template>
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

  <h3>v-if, else-if</h3>
  <p v-if="score1">true면 출력 됩니다.</p>
  <p v-if="score2>=90">평점: A</p>
  <p v-else-if="score2>=80">평점: B</p>
  <p v-else-if="score2>=70">평점: C</p>
  <p v-else>평점: F</p>

  <h3>v-if와 v-show 차이점(Elements 확인)</h3>
  <p v-if="score3">이 영역은 v-if 입니다.</p>
  <p v-show="score3">이 영역은 v-show 입니다.</p> 
  <!-- v-show는 값이 거짓일 경우 display: none; 이지만 v-if는 아예 영역 자체가 x 즉, 자주 변경되지 않는 영역일 경우 v-if를 사용, 토글 같이 비번하게 노출되거나 사라지는 영역일 경우 v-show를 사용할 수 있다.   -->
  
  <h3>v-for</h3>
  <ul>
    <li>배열 하나하나 데이터 가져오기</li>
    <li>{{sports[0]}}</li>
    <li>{{sports[1]}}</li>
    <li>{{sports[2]}}</li>
    <li>{{sports[3]}}</li>
  </ul>

  <ul>
    <li>v-for로 한 번에 데이터 가져오기</li>
    <li v-for="sport in sports">{{sport}}</li>
  </ul>
  <ul>
    <li>v-for로 한 번에 데이터, 배열 수 가져오기</li>
    <li v-for="(sport, index) in sports">{{index+1}} {{sport}}</li>
  </ul>

  <h3>v-on 이벤트 핸들링</h3>
  <p>{{"count: " + count}}</p>
  <button v-on:click="count++">숫자 증가</button> <!-- v-on:이벤트="이벤트 결과" -->
  <button v-on:click="count--">숫자 감소</button>
  <button v-on:mouseover="count=0">0으로 초기화</button>
  <br/>
  <hr/>

  <h3>methods 옵션, 사용자 함수 / 메서드 만들기</h3>
  <p>{{greeting1()}}</p> <!-- greeting 메서드 호출 -->
  <p>{{greeting2('Tom')}}</p> <!-- greeting 메서드 호출 > 인자 값 'Tom' 전달 > 출력 -->
  <!-- 메서드 이용해서 v-on:click 증가 감소 이벤트 -->
  <p>{{num}}</p>
  <button v-on:click="increment">Increase number</button>
  <button v-on:click="decrement">Decrease number</button>

  <h3>v-on modifier 수정자</h3>
  <button v-on:click="createAlert1">클릭해 보세요.</button>
  <button v-on:click.once="createAlert2">클릭해 보세요.</button> <!-- once라는 수정자를 통해 한번만 클릭할 수 있도록 수정 -->
  <br/>
  <input type="text" v-on:keydown="getKey1"> <br/>
  <input type="text" v-on:keydown.s="getKey1"> <br/> <!-- s가 눌렸을 때만 -->
  <input type="text" v-on:keydown.alt.s="getKey2"> <br/> <!-- alt+s가 눌렸을 때만 -->
  <span>{{KValue}}</span>
  <!--
    modifier(수정자) 종류 
    .enter .tab .delete .esc .space .up .down .left .right .center(마우스 가운데 누르는 버튼에 발생)
  -->
</template>

<style></style>
