<script>
    export default{
        data(){
            return{
                inputName1: '홍길동',
                inputName2: '홍길동',
                agrre: false,
                itemName: null,
                itemCnt: 1,
                sList: [
                {name: '감귤', cnt: 2}
                ],
            }
        },
        methods: {
            addItem(){
                let item = {
                name: this.itemName,
                cnt: this.itemCnt
                } //{name: '감귤', cnt: 2}
                this.sList.push(item);
                this.itemName = null;
                this.itemCnt = 1;
            },
        }
    }
</script>

<template>
    <div id="study08" class="study_box">
        <h3>양방향 바인딩 v-model 디렉티브</h3>
        <p>{{inputName1}}</p> <!-- 단방향 -->
        <input type="text" v-model="inputName2"> <!-- 양방향 -->
        <p>{{inputName2}}</p>
    
        <p>v-model checkbox 체크여부 확인 예제</p>
        <span>약관에 동의하십니까?</span><input type="checkbox" v-model="agrre"> <br> {{agrre}}
        <button v-show="agrre">가입하기</button>
    
        <p>v-model 리스트 추가 예제</p>
        <form v-on:submit.prevent="addItem">
        <p>품목: <input type="text" required v-model="itemName"></p>
        <p>수량: 
            <select v-model="itemCnt">
            <option value="1">1개</option>
            <option value="2">2개</option>
            <option value="3">3개</option>
            <option value="4">4개</option>
            <option value="5">5개</option>
            </select>
        </p>
        <button>상품추가</button>
        </form>
        <p>구입할 품목: </p>
        <ul>
        <li v-for="item in sList">{{item.name}} ({{item.cnt}}개)</li>
        </ul>
    </div>
</template>