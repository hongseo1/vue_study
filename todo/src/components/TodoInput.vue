<script>
    export default{
        data(){
            return{
                msg: ''
            }
        },
        methods:{
            todoInput(){
                this.$emit("todoInput", this.msg); //$emit으로 상위 컴포넌트에 값을 전송 후(캐멀케이스로 던지고(하위) 케밥케이스로 받아야함(상위))
                this.msg=""; //input 값은 비워줌
                //input에 적은 msg 담고, click 이벤트 발생시 todoInput함수 호출,>emit으로 상위 컴포넌드 todoInput, 담은 msg 전달 > 이후 input 비워둠
            }
        }
    }
</script>

<template>
    <form id="todo-form">
        <input type="text" id="todo-input" placeholder="Enter a new task" v-model="msg">
        <button type="button" @click="todoInput">Add</button>
    </form>
</template>