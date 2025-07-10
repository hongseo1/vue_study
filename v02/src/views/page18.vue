<script>
import Child from '../components/FirstChild.vue';
export default{
    data(){
        return{
            gift: '장남감'
        }
    },
    components: {
        Child
    },
    provide(){
        return{
            gift: this.gift
        }
    }
}
</script>

<template>
    <div id="study19" class="study_box">
        <h3>값을 전달할 때 사용하는 Provide와 inject (데이터의 효율적인 전달)</h3>
        <div>
            Provide와 inject는 props의 단점을 개선하기 위해서 등장 <br/>
            props의 단점: <br/>
            부모 컴포넌트 a > props > 자식 컴포넌트 a > props > 손자 컴포넌트 a <br/>
            필요없는 중간 단계의 컴포넌트에서도 props를 이용해서 계속 자식에게 전달해줘야 하는 번거로움 발생, 만약 이렇게 자손 컴포넌트가 100개가 있다면, 이러한 props를 100번 반복해야 하는 문게가 발생한다. <br/>
            이러한 props의 단점을 provide, inject로 해결: <br/>
            provide > 부모 컴포넌트 a > 자식 컴포넌트 a > 손자 컴포넌트 a > inject <br/>
            처음 값을 전달하는 부모 컴포넌트에서 provide에 정의를 해주고, 최종적으로 그 변수나, 함수를 사용하는 자손 컴포넌트에서 inject로 받아서 사용하면 된다.
        </div>
        <div>
            <h1>안녕하세요.</h1>
            <Child/><!-- <Child :gift/> provide를 사용함으로 :gift할 필요 없어짐-->
        </div>
    </div>
</template>
<style scoped>
    h1{color: red;}
    span{margin-left: 20px;}
</style>