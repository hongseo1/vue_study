<!-- page16 -->
<script>
export default{
    props:["name", "age"],
    created(){
        console.log(this.name);
    },
    methods:{
        propsUpdater(){
            this.age = 30;
        }
    }
}
</script>
<template>
    <h1>Child Component</h1>
    <p>Name: {{name}}</p>
    <p>Age: {{age}}</p>
    <button @click="propsUpdater">클릭(하위 컴포넌트에서 만든 버튼)</button> <!-- 하위(자식) 컴포넌트에서는 상위(부모) 컴포넌트에 데이터를 업데이트할 수 없다. 단방향만 가능 -->
</template>