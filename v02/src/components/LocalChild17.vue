<!-- page17 -->
<script>
export default{
    data(){
        return{
            c: 5
        }
    }
}
</script>
<template>
    <div>
        나는 Child Component 입니다.
        <input type="text" ref="myInput" v-model="c"> ({{c}})
        <button @click="$emit('createPost', this.$refs.myInput.value)">부모 이벤트 호출</button>
        <button @click="$emit('createPost', c)">부모 이벤트 호출</button>
        <!-- 
            Vue는 템플릿의 표현식을 컴포넌트 인스턴스에 바인딩하므로, $emit과 같은 메서드나 myInput과 같은 ref에 접근할 때 this를 생략해도 내부적으로는 해당 컴포넌트 인스턴스에 접근한다.
            ++Vue 3에서는 템플릿에서 ref에 직접 접근하는 방식보다는, <script setup>을 사용하거나 setup() 함수 내에서 ref 변수를 선언하고 템플릿에 노출시키는 것이 더 권장
        -->
    </div>
</template>