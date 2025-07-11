<script setup>
    import ChildComponent31 from '../components/ChildComponent31.vue';

    //하위 컴포넌트의 이벤트를 받을 수 있는 함수 정의
    const handleCustomEvent = (massage) => {//하위 컴포넌트에서 받은 메시지를 인자로 받아서
        console.log('Received event: ' + massage)//콘솔에 출력
    }
</script>

<template>
    <div id="study31" class="study_box">
        <h3>Composition API - defineEmits</h3>
        <div>
            script setup 구문에서 컴포넌트가 부모 컴포넌트로 이벤트를 발생(emit)시킬 때 사용할 수 있는 함수를 정의하는 데 사용되는 컴파일러 매크로(compiler macro) 
            (컴파일러 매크로는 특정 코드 구문이 컴파일(또는 빌드) 시점에 특별하게 처리되도록 약속된 함수나 키워드를 말한다. 자세한건 검색ㄱ)
            <br/>

            Options API의 emits 옵션과 동일한 역할을 하지만, script setup 문맥에서는 이 매크로를 사용하여 더 간결하게 정의한다. <br/>

            쉽게 말해 자식 컴포넌트에서 이벤트를 부모 컴포넌트에 발생시키는 것 <br/>
            -props: 부모 -> 자식 (데이터 전달) <br/>
            -emit (by defineEmits): 자식 -> 부모 (이벤트 발생 / 알림) <br/>
            이 두 가지가 Vue에서 컴포넌트 간 통신을 위한 가장 기본적인 방법이다.
        </div>

        <ChildComponent31 @customEvent="handleCustomEvent"/>
        <!-- @customEvent: 하위 컴포넌트에서 customEvent이벤트가 발생하면 감지, handleCustomEvent: 감지후 실행될 상위 컴포넌트 함수  -->
    </div>
</template>