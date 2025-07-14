<script setup>
    import axios from 'axios';
    import {ref} from 'vue';

    const table = ref(null);

    const inputData = async () => { //async는 함수 앞에 사용/ 함수 앞에 async가 있다면 이 함수가 비동기 함수임을 알 수 있음
        try{ //앞서 .catch로 했던 부분은 try catch로 잡음(비동기 작업(await로 기다리는 부분 포함)에서 발생할 수 있는 오류를 '잡아내는(catch)' 데 사용)
            const res = await axios.post('http://localhost:3000/member', { // 앞서 .then으로 받았던 인자를 const res 정의하여 받을 수 있다.(await를 사용하여 이 Promise가 성공적으로 해결될 때까지 기다렸다가 그 결과를 'res' 변수에 할당) / 단 받을 때 받을 값 앞에 await를 사용하여 받아야한다. (비동기 처리임을 알고 기다렸다가 받음)
            name: "lee",
            email: "lee@gmail.com"
            })
        } catch(err){
            console.log('서버에 이상이 있습니다.');
        }
        
        /* 
        .then(res => {
            console.log(res);
        }).catch(err => {
            console.log('서버에 이상이 있습니다.')
        });
        console.log("hello");  
        */
    };

    const getData = async () => {//inputData 설명과 동일
        const res = await axios.get('http://localhost:3000/member')
        const members = res.data;
        let htmlContent = `
            <table class="table ms-3">
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
        htmlContent += `</table>`
        table.value.innerHTML = htmlContent
        /* 
        .then(res => {
            const members = res.data;
            //console.log(res);
            
            let htmlContent = `
                <table class="table ms-3">
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
            htmlContent += `</table>`
            table.value.innerHTML = htmlContent
        }); 
        */
    };
</script>

<template>
    <div id="study36" class="study_box">
        <h3>async와 await</h3>
        <div>
            자바스크립트에서 비동기 처리를 쉽게 할 수 있게 해주는 구문 <br/>
            async: 함수 앞에 붙여 사용하며 해당 함수가 비동기 함수임을 명시함 이 함수는 항상 Promise(비동기 작업의 최종 결과를 나타내는 객체(성공 또는 실패를 나나태는 객체))를 반환<br/>
            await: async함수 내부에서만 사용할 수 있음, Promise가 fulfiled(성공적으로 처리)되거나 rejected(실패)될 때까지 함수릐 실행을 일시 중시시킴 그리고 Promise의 결과를 기다렸다가 반환(비동기 작업이 완료될 때까지 기다렸다가 그 결과 값을 받음) <br/>

            async와 await를 사용하는 이유: 비동기 처리의 복잡성을 줄이고, 동기방식 코드처럼 가독성을 높여줌 또한 .then() .catch() 체인을 사용하는 것보다 콜백 지옥을 피하며 동기 코드처럼 자연스럽게 흐름을 제어할 수 있도록 도와준다.
        </div>

        <button @click="inputData" class="btn btn-primary ms-3 mt-3">데이터 입력</button>
        <button @click="getData" class="btn btn-success ms-3 mt-3">데이터 가져오기</button>
        <!-- ms-3: margin start-3 margin을 시작점에서 3만큼 적용 / mt: margin top -->
        <div ref="table">
        </div>
    </div>
</template>