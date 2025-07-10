<script setup>
    import { ref } from 'vue';
    
    const a = ref(null);

    const good = () => {
        //alert(a.value.innerText); //a.value=[object HTMLHeadingElement] .innerText = 안녕하세요~
        alert(document.getElementById("b").innerText);
    }
</script>

<template>
    <div id="study23" class="study_box">
        <h3>ref, reactive2</h3>
        
        <h1 ref="a" id="b">안녕하세요~</h1>
        <button @click="good">클릭</button>
    </div>
</template>