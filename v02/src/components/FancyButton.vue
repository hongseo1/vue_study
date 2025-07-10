<script>
    export default{
        /* props: ["buttonName"] */
        data(){
            return{
                buttonName: "잘가!" /* 부모에서 지정한 것이 적용됨(부모에서 값을 할당한 것이 하위로 넘어오기 때문에 하위 컴포넌트에서 지정할 시 무시됨) / 하위에서 새로 지정한 값을 적용하기 위해서는 상위 컴포넌트에서 v-slot="props", {{props.buttonName}}을 사용 */
            }
        }
    }
</script>
<template>
    <button class="fancy-btn">
        <!-- {{buttonName}} 기존의 props 방식-->
        <!-- <slot></slot> --> <!-- slot 방식 -->
        <!-- <slot>디폴트 문자</slot> --> <!-- 상위에서 작성하지 않았을 경우 보여짐, 상위에서 작성할 경우 상위에 작성한 것으로 대체됨 -->
        <slot :buttonName>디폴트 문자</slot> <!-- 상위에서 지정한 값이 아닌 하위에서 새로 지정한 값을 출력하기 위해 :buttonName을 설정하고 상위에서 v-slot을 지정해 해당 buttonName이 하위 컴포넌트 buttonName을 받아오는 것 -->
    </button>
</template>