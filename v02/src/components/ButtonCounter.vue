<!-- page30 -->
<script setup>
    import { onMounted, ref } from 'vue'; //onMounted는 컴포넌트가 DOM에 마운트된 후 실행할 로직이 필요할 때 사용.
    //const props = defineProps(['title', 'mainCont']); 
    /* 
    const props = defineProps({
        title: String,
        mainCont: String,
    }); 
    */
    const props = defineProps({
        title: {
            type: String,
            required: true
        },
        mainCont: {
            type: String,
            required: false
        },
    }); 

    /* 
        defineProps를 사용하여 부모로부터 받을 props를 정의
        이 작업은 컴포넌트가 생성될 때(setup 스크립트 실행 시점) 바로 이루어짐
        defineProps는 setup 스크립트의 최상단에서만 사용해야 한다.
        방법 3가지
        - 배열 문법: 간단하게 props 이름만 선언
        const props = defineProps(['title', 'mainCont']); 
        - 객체 문법: props의 타입, 기본값, 유효성 검사 등을 정의할 때 사용 (권장)
        const props = defineProps({
            title: {
                type: String,
                required: true // title은 필수 prop임을 나타냄
            },
            mainCont: {
                type: String,
                default: '기본 내용입니다.' // mainCont가 제공되지 않으면 이 값이 사용됨
            }
        });
        - 정의된 props는 setup 스크립트 내에서 'props.title' 또는 'props.mainCont'와 같이 바로 접근하여 사용할 수 있다.
        console.log('Setup 스크립트에서 props.title:', props.title);
    */

    const title = ref('');
    const cont = ref('');

    onMounted(()=>{
        title.value = props.title;
        cont.value = props.mainCont;
    });
</script>

<template>
    <p>title: {{title}}</p>
    <p>cont: {{cont}}</p>
</template>