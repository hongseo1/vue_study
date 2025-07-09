<script>
    export default{
        data(){
            return{
                userName: 'user',
                num: 0,
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
        }
    }
</script>

<template>
    <div id="study05" class="study_box">
        <h3>methods 옵션, 사용자 함수 / 메서드 만들기</h3>
        <p>{{greeting1()}}</p> <!-- greeting 메서드 호출 -->
        <p>{{greeting2('Tom')}}</p> <!-- greeting 메서드 호출 > 인자 값 'Tom' 전달 > 출력 -->
        <!-- 메서드 이용해서 v-on:click 증가 감소 이벤트 -->
        <p>{{num}}</p>
        <button v-on:click="increment">Increase number</button>
        <button v-on:click="decrement">Decrease number</button>
    </div>
</template>