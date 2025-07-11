<script>
    import FancyButton from '@/components/FancyButton.vue';
    import MainLayout from '@/components/MainLayout.vue';
    export default{
        data(){
            return{
                buttonName: '클릭*2'
            }
        },
        components:{
            FancyButton,
            MainLayout
        },
    }
</script>

<template>
    <div id="study19" class="study_box">
        <h3>Slot(자리, 넣다, 홈) 사용방법</h3>
        <div>
            Slot은 <br/>
            - 컴포넌트의 재사용성 증가: 동일한 컴포넌트를 다양한 상황에서 사용하면서도 그 안에 들어가는 콘텐츠를 부모 컴포넌트에서 쉽게 바꿀 수 있다.(버튼, 아이콘, 복잡한 html구조도 넣을 수 있다.) <br/>
            - 유연한 레이아웃 구성: 부모 컴포넌트가 자식 컴포넌트의 특정 위치의 내용을 사용할 수 있어서 보다 유연한 레이아웃 구성이 가능하다, 즉, 복잡한 레이아웃을 구성할 때 유용하다. <br/>
            - 명확한 컴포넌트 구조: 부모 컴포넌트는 자식 컴포넌트의 정의된 영역에 명시적으로 콘텐츠를 삽입할 수 있어서 코드의 가독성과 유지 보수성이 향상된다.
        </div>
        <div>
            <h1>나는 원래 페이지</h1>
            <MainLayout> <!-- slot 여러개 넣는 방법 -->
                <template v-slot:header>
                    <h1>Header</h1>
                </template>
                <template #default> <!--  v-slot: 을 #으로 축약 가능 -->
                    <h1>Contents!!</h1>
                </template>
                <template #footer>
                    <h1>Footer</h1>
                </template>
            </MainLayout>
            <!-- <FancyButton buttonName="<strong>클릭2</strong>"/> 기존의 props 방식-->
            <!-- <FancyButton> --> <!-- slot 방식 -->
            <!-- <FancyButton v-slot="props"> -->
            <FancyButton v-slot="{buttonName}"><!-- 구조분해 방식 -->
                <!-- <strong>클릭 3</strong> --> <!-- html 태그도 적용 가능 -->
                <!-- 디폴트 아님 --> <!-- 상위가 우선순위 높음 -->
                <!-- {{buttonName}} --> <!-- 정의한 값으로도 가능하다. -->
                <!-- {{props.buttonName}} --> <!-- 하위 컴포넌트에 정의한 값을 출력/ v-slot="props"과 함께 사용 -->
                {{buttonName}} <!-- 구조 분해/v-slot="{buttonName}으로 하위 컴포넌트에서 지정한 buttonName 값을 가져와 출력함 -->
            </FancyButton>
        </div>
    </div>
</template>

<style scoped>

</style>