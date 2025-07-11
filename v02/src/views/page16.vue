<script>
import ChildCom from '../components/ChildComponent.vue';
export default{
    data(){
        return{
            name: 'John',
            age: 30
        }
    },
    components:{
        ChildCom
    },
    methods:{
        ageInc(){
            this.age++;
        }
    }
}
</script>

<template>
    <div id="study16" class="study_box">
        <h3>Props 부모->자식 컴포넌트로의 데이터 전달 수단</h3>
        <div>
            단방향 데이터 흐름을 가지고 있음(상위 속성 업데이트 -> 하위 속성 업데이트) / 반대는 허용을 하지 X(하위->상위)
        </div>
        <br/>
        <h1>나는 부모</h1>
        <ChildCom name="홍길동" age="12"/>
        <button @click="ageInc">age++(상위 컴포넌트에서 증가 시키는 버튼)</button>
        <ChildCom v-bind:name="name" v-bind:age="age"/> <!-- 상위에서 하위 업데이트는 가능 (단방향) -->
    </div>
</template>
