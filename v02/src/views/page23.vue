<script setup>
    import { reactive, ref } from 'vue';

    const count = ref(0);
    /* const obj1 = ref({ //object(참조 타입)를 ref에 사용해도 정상 작동
        name: "kim", age: 25
    }); */
    const obj1 = reactive({
        name: "kim", age: 25
    });

    const good = () => {
        //count.value++; //ref는 랩핑이 되기 때문에 this.cout++이 아닌 count.value 형식인 것(ref를 풀어서 value을 이용하여 count 값을 증가 시켜야함),
        obj1.name = "lee" //reactive는 랩핑이 되어있지 않아서 obj1.value.name이 아닌 obj1.name 형식으로 바로 접근이 가능하다.
    }
</script>

<template>
    <div id="study23" class="study_box">
        <h3>Composition API - ref, reactive1</h3>
        <div>
            - ref: 원시타입에 주로 사용 / String, Number, Boolean 등 모든 타입(물론 Object, Array, Map, Set)에 사용 가능하다.(ex 삽: 주로 작은 건설현장(원시 타입)) <br/>
            - reactive: Object, Array, Map, Set 같은 참조 타입에만(원시타입은 X) 사용할 수 있다. (ex 포크레인: 큰 건설현장(참조 타입))
        </div>
        <!-- template에서는 자동으로 랩핑이 풀리기 때문에 count.value가 아닌 count로 바로 접근이 가능함 -->
        <p>count: {{count}}</p>
        <p>obj1: {{obj1.name}} / {{obj1.age}}</p>
        <button @click="good">클릭</button>
    </div>
</template>