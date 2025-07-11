<script setup>
    import axios from 'axios';
    import {ref} from 'vue';

    const table = ref(null);

    const inputData = () => {
        axios.post('http://localhost:3000/member', {
            name: "lee",
            email: "lee@gmail.com"
        }).then(res => {
            console.log(res);
        }).catch(err => {
            console.log('서버에 이상이 있습니다.')
        });
        console.log("hello"); 
    };

    //데이터 가져오기
    const getData = () => {
        axios.get('http://localhost:3000/member')
        .then(res => { //.then: 비동기 작업의 "성공" 결과를 처리할 때 사용 {...}: 요청 성공 시 실행될 콜백 함수
            const members = res.data; //서버로부터 받은 데이터(배열 형태의 멤버 목록)를 members 변수에 할당
            //console.log(res);

            //HTML 테이블을 동적으로 생성하기 위한 문자열 시작
            let htmlContent = `
                <table border="1">
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr> 
            `
            members.forEach(member => {
                htmlContent += `
                    <tr>
                        <td>${member.id}</td>
                        <td>${member.name}</td>
                        <td>${member.email}</td>
                    </tr>
                `
            });
            htmlContent += `</table>` //HTML 문자열 끝
            table.value.innerHTML = htmlContent
        });
        //.get: 데이터 Select(조회, 가져올 때)할 때 .get('') > ('받을 주소(주소로부터 데이터를 요청)') 
    };
</script>

<template>
    <div id="study34" class="study_box">
        <h3>Axios 이용하여 데이터 불러오기</h3>
        <div></div>

        <button @click="inputData">데이터 입력</button>
        <button @click="getData">데이터 가져오기</button>

        <div ref="table"><!-- 이 div 요소가 'table' ref 변수와 연결됨 -->
        </div>
    </div>
</template>

<style scoped>
    button{margin-bottom: 10px;}
    div{margin-top: 10px;}
</style>