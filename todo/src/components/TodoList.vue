<script>
    export default{
        props: ["todoList"],
        methods:{
            todoUpdate(id){
                this.$emit("todoUpdate", id); //todoUpdate 이벤트 발생 시킨 후 인자 값인 id값을 담아서 넘김
            }
        }
    }
</script>

<template>
    <ul id="todo-list">
        <li v-for="todo in todoList" :key="todo.id" :class="{completed: todo.completed}"> <!-- todoList에서 하나씩 꺼내서 담음 / :key="todo.id" 유니크한 값 id를 key 값으로 -->
            {{todo.msg}} <!-- todo의 msg만 출력 -->
            <button type="button" @click="todoUpdate(todo.id)">Delete</button>
        </li>
        <!-- 취소선 class="completed" -->
    </ul>
</template>