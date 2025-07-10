<script>
import LocalCom from '@/components/LocalChild17.vue';
export default{
    data(){
        return{
            c: 0
        }
    },
    components:{
        LocalCom
    },
    methods:{
        callFunction(var1){
            console.log('자식 컴포넌트에서 이벤트를 수신했습니다.' + var1);
            this.c = var1;
        }
    }
}
</script>

<template>
    <div id="study18" class="study_box">
        <h3>Emit(방출하다.) 자식-> 부모 컴포넌트로 데이터 전달 및 Trigger할 수 있는 방법 제공</h3>
        <div>
            emit 사용 순서 <br/>
            자식 컴포넌트에서 $emit('부모 컴포넌트에 정의된 이벤트') 실행 <br/>
            > 부모 컴포넌트에서 이벤트 수신 <br/>
            > 연결된 메소드 실행 <br/>
        </div>
        <h1>나는 부모 컴포넌트 ({{c}})</h1>
        <LocalCom @create-post="callFunction"/> <!-- 이벤트를 던지는 곳(하위 컴포넌트(던지는 쪽)에서는 createPost(캐멜케이스)이지만 받는 쪽은 create-post(케밥케이스)로 표기) -->
        <!-- 파스칼케이스 아님 주의 -->

        <!-- 자식 컴포넌트 버튼으로 이벤트가 발생, 부모 컴포넌트에 callFunction 호출  -->
    </div>
</template>