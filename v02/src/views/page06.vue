<script>
    export default{
        data(){
            return{
                x: 0,
                y: 0,
                msg: '',
            }
        },
        methods: {
            mousePos(e){
                this.x = e.offsetX;
                this.y = e.offsetY;
            },
            mouseClick(e){
                this.msg += this.x + ',' + this.y + "\n";
            },
        }
    }
</script>

<template>
    <div id="study06" class="study_box">
        <h3>마우스 좌표 출력하기</h3>
        <div class="mouse_click_x_y_wrap">
        <div id="display" v-on:mousemove="mousePos" v-on:click="mouseClick">
            마우스 클릭 시 좌표 출력 <br/>
            x: {{x}} <br/>
            y: {{y}}
        </div>
        <div id="display" v-on:mousemove="mousePos" v-on:click.right.prevent="mouseClick">
            <!-- .right 마우스 우클릭 시 이벤트 발생, .prevent 마우스 우클릭 시에 나오는 창 안 뜨게(javascipt에서 .preventDefault()를 생각하면 쉬움) -->
            마우스 우 클릭 시 좌표 줄력 <br/>
            x: {{x}} <br/>
            y: {{y}}
        </div>
        </div>
        <textarea>{{msg}}</textarea>
    </div>
</template>

<style scoped>
    .mouse_click_x_y_wrap{display: flex;}
    #display{width: 200px; height: 200px; margin-right: 10px; background-color: goldenrod;}
    textarea{height: 200px;}
</style>