<script>
    export default{
        data(){
            return{
                cnt: 1
            }
        },
        methods: {
            counter(){
                this.cnt++;
            },
            discounter(){
                this.cnt--;
            }
        },
        beforeCreate(){console.log("beforeCreate");},
        created(){console.log("created");},
        beforeMount(){console.log("beforeMount")},
        mounted(){console.log("mounted")},
        beforeUpdate(){console.log("beforeUpdate")},
        updated(){console.log("updated")},
        deforeUnmount(){console.log("deforeUnmount")},
        unmounted(){console.log("unmounted")},
        //beforeCreate / created / beforeMount / mounted 순서로 호출된다. (적은 순서가 아닌, 생명주기에 따라 발생)
    }
</script>

<template>
    <div id="study15" class="study_box">
        <h3>컴포넌트 생명주기 (component Lifecycle)</h3>
        <div>
        생명주기에 사용하는 훅(hook) <br/>
        생명주기마다 사용할 수 있는 method가 존재하는데 그걸 hook이라고 한다. (참고 사이트: https://ko.vuejs.org/guide/essentials/lifecycle)
        </div>
        <h4>Page01.Vue</h4>
        <p>Count : {{cnt}}</p>
        <GlobalChild v-if="cnt==2"/> <!-- 전역 컴포넌트에 훅 확인 -->
        <button @click="counter">Count + 1</button> 
        <!-- 버튼 클릭할 때마다 update관련 된 훅 (beforeUpdate, updated) 호출되는 것을 확인해 볼 수 있다. -->
        <button @click="discounter">Count - 1</button>
        <!-- console.log로 update와 전역 훅, unmounted 과정을 확인해볼 수 있다. -->
    </div>
</template>