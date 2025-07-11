<script setup>
    import ButtonCounter from '../components/ButtonCounter.vue';

    const post = {
        id: 1,
        title: '제목입니더',
        mainCont: '본문입니더',
    }
</script>

<template>
    <div id="study30" class="study_box">
        <h3>Composition API - defineProps</h3>
        <div>
            Composition API에서 컴포넌트를 사용하는 방법과 부모 컼포넌트에서 자식 컴포넌트에 데이터를 전송하는 props에 대하여
        </div>

        <h1>아래 있는 컴포넌트는 자식 컴포넌트입니다.</h1>
        <ButtonCounter :title="post.title" :mainCont="post.mainCont"/>
    </div>
</template>