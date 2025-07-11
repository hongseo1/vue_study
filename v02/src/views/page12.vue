<script>
    export default{
        data(){
            return{
                count: 0,
                y: "짝수",
            }
        },
        methods:{
            increment(){
                this.count++;
            },
        },
        watch: {
            /* count(newVal, oldVal){//새로운 값, 이전 값
                console.log(`Count changed from ${oldVal} to ${newVal}`);
                if(newVal%2 === 0){
                this.y1 = "짝수";
                }else{
                this.y1 = "홀수";
                }
            } */
            count:{
                handler(newVal, oldVal){
                console.log(`Count changed from ${oldVal} to ${newVal}`);
                if(newVal%2 === 0){
                    this.y = "짝수";
                }else{
                    this.y = "홀수";
                }
                },
                once: true //hendler를 한 번만 실행(감시) 3.4버전 이상에서만 가능
                //vue3 watchers 검색해보면 watchers(감시자) 종류 확인 가능
            }
        },
    }
</script>

<template>
    <div id="study12" class="study_box">
        <h3>watcher 속성</h3>
        <p>반응형 속성이 변경될 때마다 함수를 트리거할 수 있다.</p>
        <div>
        <p>Count : {{count}}</p>
        <button @click="increment">Increment</button>
        <p>Result: {{y}}</p>
        </div>
    </div>
</template>