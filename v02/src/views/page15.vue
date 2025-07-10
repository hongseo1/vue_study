<script>
    export default{
        methods: {
            logInput(){
                console.log(this.$refs.myInput.value);//vue.js
                //console.log(document.getElementById("myInput").value); //바닐라 자바스크립트
            }
        },
    }
</script>

<template>
    <div id="study16" class="study_box">
        <h3>ref $refs, ref document.getElememtById와 비슷</h3>
        <div>
        DOM 요소에 고유한 참조자를 제공하는 특별한 속성 <br/>
        ex) input type="text" <em>id="myInput"</em> -> document.getElementById('myIpunt').value<br/>
            input type="text" <em>ref="myInput"</em> -> this.$ref.myInput.value
        </div>
        <div>
        <input type="text" ref="myInput"/>
        <button @click="logInput">Log</button>
        </div>
    </div>
</template>