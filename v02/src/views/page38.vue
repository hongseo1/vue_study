<script setup>
    import axios from 'axios';
    import {ref} from 'vue';

    const table = ref(null);
    const isInputMode = ref(false);
    const name = ref('');
    const email = ref('');
    const members = ref([]);

    const inputData = async () => {
        try{
            const res = await axios.post('http://localhost:3000/member', {
            name: name.value,
            email: email.value
            })
            name.value = '';
            email.value = '';
            isInputMode.value = false;
            getData();
        } catch(err){
            console.log('서버에 이상이 있습니다.');
        }
    };

    const getData = async () => {
        const res = await axios.get('http://localhost:3000/member');
        members.value = res.data
        //console.log(members.value);
        /* 
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
        */
    };
</script>

<template>
    <div id="study38" class="study_box">
        <h3>이전에 .forEach부분 v-for로 변경하기</h3>
        <div>
        </div>

        <div class="container"> <!-- Bootstrap에서 class="container"은 뷰포트 크기가 커져도 특정 중단점(breakpoint)에서 최대 너비 고정, 중앙 정렬 -->

            <button @click="isInputMode=true" class="btn btn-primary ms-3 mt-3">데이터 입력</button>
            <button @click="getData" class="btn btn-success ms-3 mt-3">데이터 가져오기</button>
            <div v-show="isInputMode">
                <form autocomplete="off"> <!-- autocomplete on이 디폴트, off이면 기존에 입력했었던 이름이나 이메일 안 보이게 -->
                    <label class="form-level">Name</label>
                    <input type="text" class="form-control" v-model="name"/>
                    <label class="form-level">Email</label>
                    <input type="text" class="form-control" v-model="email"/>
                    <button type="button" class="btn btn-success me-3 mt-3" @click="inputData">입력 화인</button>
                    <button type="button" class="btn btn-secondary mt-3" @click="isInputMode=false">취소</button>
                </form>
            </div>
            <div ref="table">
                <table class="table ms-3">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="member in members">
                            <td>{{member.id}}</td>
                            <td>{{member.name}}</td>
                            <td>{{member.email}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>