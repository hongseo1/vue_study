<script>
    export default{
        data: function(){
            return{
                score1: false,
                score2: 85,
                score3: false,
                sports: [
                'Baseball',
                'Football',
                'Volleyball',
                'Swimming',
                ],
            }
        }
    }
</script>

<template>
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
</template>