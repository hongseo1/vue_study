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
        //01
        subject: "<b>vue 기초부터 다시 공부하기</b>",
        date: 250706,
        //02
        score1: false,
        score2: 85,
        score3: false,
        //03
        sports: [
          'Baseball',
          'Football',
          'Volleyball',
          'Swimming',
        ],
        //04
        count: 0,
        //05
        userName: 'user',
        num: 0,
        //06
        click_yes: true,
        KValue: '',
        //07
        x: 0,
        y: 0,
        msg: '',
        //08
        inputName1: '홍길동',
        inputName2: '홍길동',
        agrre: false,
        itemName: null,
        itemCnt: 1,
        sList: [
          {name: '감귤', cnt: 2}
        ],
        //09
        site_name: "Daum",
        url: "https://daum.net",
        src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ3Hv6iGG5mrI76aruo7gRz7BTVzMs1SV2wo6hi-ohzY7bF6bxFCYLTqNsCO8GdB8jt2lHehNqcpDfRNYEJ-utWtQ",
        //10
        isActive: false,
        hasError: true,
        classObject: {//object형식으로
          bg1: true,
          'text-danger1': true
        },
        bgClass: 'bg2',
        erClass: 'text-danger2',
        //11
        myWidth: '400px',
        myWidth1: 50,

      }
    },
    methods: {
      //05
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
      //06
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
      },
      //07
      mousePos(e){
        this.x = e.offsetX;
        this.y = e.offsetY;
      },
      mouseClick(e){
        this.msg += this.x + ',' + this.y + "\n";
      },
      //08
      addItem(){
        let item = {
          name: this.itemName,
          cnt: this.itemCnt
        } //{name: '감귤', cnt: 2}
        this.sList.push(item);
        this.itemName = null;
        this.itemCnt = 1;
      },
      //09
      clickAr(){
        this.site_name = "Naver";
        this.url = "https://naver.com";
      },
      //11
      incWidth: function(){
        this.myWidth1 += 10;
      },
      initWidth (){
        this.myWidth1 = 50;
      },
      
    }
  };
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

  <div id="study02" class="study_box">
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
  </div>

  <div id="study03" class="study_box">
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
  </div>

  <div id="study04" class="study_box">
    <h3>v-on 이벤트 핸들링</h3>
    <p>{{"count: " + count}}</p>
    <button v-on:click="count++">숫자 증가</button> <!-- v-on:이벤트="이벤트 결과" -->
    <button @click="count--">숫자 감소</button>
    <button v-on:mouseover="count=0">0으로 초기화</button>
    <!-- v-on을 @로 생략가능 v-on:click -> @click -->
  </div>

  <div id="study05" class="study_box">
    <h3>methods 옵션, 사용자 함수 / 메서드 만들기</h3>
    <p>{{greeting1()}}</p> <!-- greeting 메서드 호출 -->
    <p>{{greeting2('Tom')}}</p> <!-- greeting 메서드 호출 > 인자 값 'Tom' 전달 > 출력 -->
    <!-- 메서드 이용해서 v-on:click 증가 감소 이벤트 -->
    <p>{{num}}</p>
    <button v-on:click="increment">Increase number</button>
    <button v-on:click="decrement">Decrease number</button>
  </div>

  <div id="study06" class="study_box">
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
  </div>

  <div id="study07" class="study_box">
    <h3>마우스 좌표 출력하기</h3>
    <div class="mouse_click_x_y_wrap">
      <div id="display" v-on:mousemove="mousePos" v-on:click="mouseClick">
        마우스 클릭 시 좌표 출력 <br/>
        x: {{x}} <br/>
        y: {{y}}
      </div>
      <div id="display" v-on:mousemove="mousePos" v-on:click.right.prevent="mouseClick">
        <!-- .right 마우스 우클릭 시 이벤트 발생, .prevent 마우스 우클릭 시에 나오는 창 안 뜨게(javascipt에서 .preventDefault()를 생각하면 쉬움) -->
        마우스 우 클릭 시 좌표 줄력 <br/>
        x: {{x}} <br/>
        y: {{y}}
      </div>
    </div>
    <textarea>{{msg}}</textarea>
  </div>

  <div id="study08" class="study_box">
    <h3>양방향 바인딩 v-model 디렉티브</h3>
    <p>{{inputName1}}</p> <!-- 단방향 -->
    <input type="text" v-model="inputName2"> <!-- 양방향 -->
    <p>{{inputName2}}</p>
  
    <p>v-model checkbox 체크여부 확인 예제</p>
    <span>약관에 동의하십니까?</span><input type="checkbox" v-model="agrre"> <br> {{agrre}}
    <button v-show="agrre">가입하기</button>
  
    <p>v-model 리스트 추가 예제</p>
    <form v-on:submit.prevent="addItem">
      <p>품목: <input type="text" required v-model="itemName"></p>
      <p>수량: 
        <select v-model="itemCnt">
          <option value="1">1개</option>
          <option value="2">2개</option>
          <option value="3">3개</option>
          <option value="4">4개</option>
          <option value="5">5개</option>
        </select>
      </p>
      <button>상품추가</button>
    </form>
    <p>구입할 품목: </p>
    <ul>
      <li v-for="item in sList">{{item.name}} ({{item.cnt}}개)</li>
    </ul>
  </div>

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

  <div id="study10" class="study_box">
    <h3>Class 바인딩</h3> <!-- 해당 클래스: true이면 해당 클래스 스타일 활성화, false이면 비활성화 -->
    <div class="border" :class="{bg: isActive, 'text-danger': hasError}">Warning</div> <!-- text-danger -이 있기 때문에 ''으로 감싸줘야 됨. -->
    <div class="border" :class="classObject">Warning</div> <!-- object형식으로 -->
    <div class="border" :class="[bgClass, erClass]">Warning</div> <!-- 배열 형식으로 -->
    <div class="border" :class="[isActive ? bgClass: '', erClass]">Warning</div> 
  </div>

  <div id="study11" class="study_box">
    <h2>style 바인딩</h2>
    <div class="demo" v-bind:style="{width: myWidth}"></div>
    <div class="demo" @mouseover="initWidth" :style="{width: myWidth1 + 'px'}"></div>
    <button @click="incWidth">버튼을 클릭해보세요.</button>
  </div>
</template>

<style>
  .mouse_click_x_y_wrap{display: flex;}
  #display{width: 200px; height: 200px; margin-right: 10px; background-color: goldenrod;}
  textarea{height: 200px;}
  button{display: block;}
  .border{width: 500px; margin-bottom: 10px; border: 2px solid red;}
  .bg, .bg1, .bg2{background-color: gray;}
  .text-danger, .text-danger1, .text-danger2{color: red;}
  .demo{width: 100px; height: 100px; margin-bottom: 10px; background-color: blueviolet;}
</style>
