<script>
    import TodoInput from './components/TodoInput.vue';
    import TodoList from './components/TodoList.vue';
    import {v4 as uuidv4} from "uuid"; /* npm install uuid */

    export default{
        data(){
            return{
                todoList: [],
            }
        },
        components: {
            TodoInput,
            TodoList
        },
        methods:{
            todoInput(msg){ //하위 컴포넌트에서 받아온 msg를 
                const item = { //item 선언,
                    id: uuidv4(), //uuid 고유의 id값,
                    msg: msg, //msg에 받아온 msg를 담고
                    completed: false, //completed에는 false를 담는다
                }
                //console.log(item);
                this.todoList.push(item); //this.todo_list에 위의 item을 담는다(push)
                console.log(JSON.stringify(this.todoList));
            },
            todoUpdate(id){
                this.todoList = this.todoList.map(//map() 메서드는 배열의 모든 요소에 대해 주어진 함수를 호출하고, 그 결과로 새로운 배열을 반환단다. 즉, 원본 배열(this.todoList)를 변경하지 않고 새로운 배열을 만들어 this.todoList에 다시 할당하는 것
                    v => v.id === id ? {...v, completed: ! v.completed} : v //가져온 id값과 원래의 id값이 일치할 경우 ...v 값은 그대로 가져가고 completed값만 (! v.completed)=원래 completed값의 부정(반대)로 바꾼다. : v -> 앞에 조건이 일치하지 않는다면, v를 그대로 반환 즉, 아무런 변경 없이 새로운 배열에 포함
                );
                console.log(JSON.stringify(this.todoList));
            }
        }
    }
    /* 
        let a = {
            id: 1,
            msg: '우유 구매하기',
            completed: false
        }
        a = {...a, completed : true} //...a => (전개 연산자, 스프레드 문법/a의 모든 속성을 그대로 복사해 새로운 객체에 담는다.) {...a, completed : true}는 {id:1, msg: '우유 구매하기, completed : false' completed : true(뒤에 쓴게 덮어 쓰기됨)}와 같다

        Arrow Function(화살표 함수) javascript에서 함수를 정의하는 간결한 방법 중 하나, 주로 콜백 함수로 사용.
        v =>는 매개변수를 나타낸다.
        매개변수가 하나일 때: 매개변수 => { 함수 본문 } 또는 매개변수 => 반환 값
        매개변수가 없을 때: () => { 함수 본문 }
        매개변수가 여러 개일 때: (매개변수1, 매개변수2) => { 함수 본문 }

        위의 map()메서드 실행 시 첫 번째 요소에 대해 콜백 함수가 호출되면, v는 이 객체가 되고 두 번째 요소에 대해 콜백 (..이하동문)이면 v는 이 객체가 된다. 즉, v는 todoList 배역 내의 각 개별 할 일(todo) 객체를 가르키는 임시변수라고 생각하면 된다.
    */
</script>

<template>
    <div class="todo-container">
        <h1>TODO List</h1>

        <TodoInput @todo-input="todoInput"/> <!-- todoInput.vue(하위 컴포넌트에서 던져진 todoInput을 받아서 상위 컴포넌트 메서드 todoInput에 전달) -->
        <TodoList :todo-list @todo-update="todoUpdate"/><!-- (캐멀케이스로 던지고(하위) 케밥케이스로 받아야함(상위)) :todo-list = app.vue에서 todoList.vue로 값을 던지는 것 @todo-update: 반대로 받는 것-->
    </div>
</template>