<script>
    export default{
        data(){
            return{
                click_yes: true,
                KValue: '',
            }
        },
        methods: {
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
        }
    }
</script>

<template>
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
</template>