<script setup>
    import axios from 'axios';

    const inputData = () => {
        axios.post('http://localhost:3000/member', {
            //id는 자동 부여됨
            name: "lee",
            email: "lee@gmail.com"
        }).then(res => {// .then: 비동기 작업의 "성공" 결과를 처리할 때 사용
            console.log(res);
        }).catch(err => {
            console.log('서버에 이상이 있습니다.')
        }); 
        //.post: 데이터 insert할 때 .post('', {}) > ('보낼 주소', {입력할 데이터})
        console.log("hello"); 
        //콘솔을 확인해 보면 위의 res보다 hello가 먼저 출력되는 것을 확인할 수 있다 이는 axios가 비동기식 처리이기 때문에 코드를 순서대로 실행하되, 오래 걸리는 특정 작업(ex 네트워크 통신)을 만나면 그 완료를 기다리지 않고 다음 코드들을 계속해서 실행(먼저 처리)하고 이후 해당 작업이 완료되면, 그 결과를 가지고 미리 정의해 둔 후속 작업을 실행하는 방식이기 때문이다.
    }
</script>

<template>
    <div id="study33" class="study_box">
        <h3>Axios package 설치하기</h3>
        <div>
            Axios: 브라우저(클라이언트)와 <em>Node.js(서버) 환경에서 사용할 수 있는</em> Promise 기반의 <em>HTTP 클라이언트 라이브러리로 브라우저에서 XMLHTTPRequests 사용한다.</em> 즉, Axios는 HTTP 통신(API 요청)을 쉽고 편리하게 할 수 있도록 도와주는 도구이다.(웹 애플리케이션에서 서버와 데이터를 주고받기 위한 것) <br/>
            HTTP 요청이 발생하면, Axios는 이 요청들을 효율적으로 처리하는 데 사용된다. <br/>
            <br/>
            비유: 택배를 트럭에 실어서 지정 장소에 가고 도착하면 그 장소에 내려놓는다 라고 가정을 하면 Axios는 트럭이고 택배는 사용자 입력 데이터, 장소는 Json-server라고 생각하면 된다. (반대로 택배(데이터)를 실어서 트럭(Axios)이 가져가기도 한다.) <br/>
             <br/>
            -설치: 터미널 npm install axios (g옵션을 쓰지 않았기 때문에 설치한 패키지에서만 사용가능) <br/>
            - 실행: axios.post사용 > 코드와 주석 확인 <br/>
            Axios는 비동기로 동작, 네트워크 통신을 하기에 속도가 느림
        </div>
        <br/>
        <button @click="inputData">데이터 입력</button>
        <!-- button 클릭 > 개발자 툴 > network 확인 > membrt에 데이터가 들어간 거 확인 가능, 또한 패기지 내에 db.json에도 데이터가 들어가 있는 걸 확인할 수 있다. -->
    </div>
</template>