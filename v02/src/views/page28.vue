<script setup>
    import {ref, watch} from "vue";
    // immediate
    const count = ref(0);
    const counter = () => {count.value++;}

    watch(count, (newV, oldV) => {
        console.log(`${oldV} => ${newV}`);
    },{immediate: true}); //immediate: true > undefined => 0, 처음 읽어들이는 시점에 호출해서 console에 이렇게 보여짐 원래 기본 값은 데이터의 변화가 있을 때 발생함


    const obj = ref({name: "홍길동", age: 30});
    const updateName = () => obj.value.name = "홍길순";

    watch(obj, (newObj) => {
        console.log('이름 변경을 감지했습니다. 변경된 이름은: ' + newObj.name); //참조객체인 obj경우에는 obj의 주소 값을 담고 있기에 하위 속성이 변경이 되어도 감지를 못한다.(주소 값은 안에 내용이 바뀐다해서 같이 바뀌는 게 아니기 때문에)
    },{deep: true}); //deep: true는 하위 속성까지 감시, 설정 시 console에 (이름 변경을 감지했습니다. 변경된 이름은: 홍길순) 정상 출력 확인 / {immediate: true, deep: true} 복수로 나열도 가능
    //++ 위에 counter처럼 전에 값을 넣지 않은 것은 어차피 참조객체라 이전의 값을 보관하고 있지 않기 때문 결론, watch에서 참조객체의 이전 데이터를 확인할 수 있는 방법은 지원X, 객체를 복사해서 출력해서 다시 담는 방법을 쓸 수는 있지만 너무 복잡함 다른 방법 권장.
</script>

<template>
    <div id="study28" class="study_box">
        <h3>Composition API - watch 옵션 중 immediate와 deep CompositionAPI</h3>
        <div>
            - immediate는 처음 값을 읽어 들이는 시점에 호출할지 여부를 정한다. 생략하면 기본값은 false <br/>
            - deep은 watch 대상의 데이터가 하위 속성을 가지고 있는 객체인 경우, 그 하위 속성을 감지할 지 여부를 정한다. 생략하면 기본값은 false
        </div>

        <p>{{count}}</p>
        <button @click="counter">Clik</button>

        <h2>Profile</h2>
        <p>Name: {{obj.name}}</p>
        <p>Age: {{obj.age}}</p>
        <button @click="updateName">이름 변경</button>
    </div>
</template>