<script>
    export default{
        data(){
            return{
                chk: false,
                firstName: 'John',
                lastName: 'Don',
            }
        },
        computed:{
            yesNo(){
                if(this.chk){
                return '예';
                }else{
                return '아니오';
                }
            },
            fullName:{
                get(){
                return this.firstName + ' ' + this.lastName;
                },set(newValue){
                const names = newValue.split(' ');
                this.firstName = names[0];
                this.lastName = names[names.length - 1];
                }
            }
        },
    }
</script>

<template>
    <div id="study11" class="study_box">
        <h3>Computed 계산된 속성</h3>
        <div>
        1. Cahing (계산 결과를 보관하고 있다가 다음번 호출에서는 재계산을 하지 않고 값을 불러줌) <br/>
        2. Reactive (종속된 값이 변화가 발생했을 때, 재계산을 해서 그 값을 다시 cahing해서 데이터를 보여줌) <br/>
        3. 읽기 전용이지만 getter/setter를 이용하여 읽기/쓰기도 가능하다. <br/>
        </div>
        <input type="checkbox" v-model="chk">{{yesNo}} {{yesNo}} {{yesNo}}
        <br/>
        <p>Full Name: {{fullName}}</p>
        <input v-model="fullName" placeholder="Enter full name"> <br/>
        firstName: {{firstName}} <br/>
        lastName: {{lastName}}
    </div>
</template>