<script setup>
    import axios from 'axios';
    import {ref} from 'vue';

    const table = ref(null);
    const isInputMode = ref(false);
    const member_id = ref('');
    const name = ref('');
    const email = ref('');
    const members = ref([]);

    const inputData = async () => {
        try{
            if(member_id.value == ''){
                const res = await axios.post('http://localhost:3000/member', {
                    name: name.value,
                    email: email.value
                });
            }else{
                const res = await axios.put('http://localhost:3000/member/' + member_id.value, {
                    name: name.value,
                    email: email.value
                });
            }
            member_id.value = '';
            name.value = '';
            email.value = '';
            isInputMode.value = false;
            getData();
        } catch(err){
            console.log('서버에 이상이 있습니다.');
        }
    };

    const getData = async () => {
        try{
            const res = await axios.get('http://localhost:3000/member');
            members.value = res.data
        }catch(res){
            console.log('서버에 이상이 발생했습니다.');
        }
    };

    const getEachData = async (id) => {
        try{
            const res = await axios.get('http://localhost:3000/member/' + id);
            console.log(res.data);
            member_id.value = id;
            name.value = res.data.name;
            email.value = res.data.email;
            isInputMode.value = true;
        }catch(res){
            console.log('서버에 이상이 발생했습니다.');
        }
    };

    const deleteData = async (id) => {
        if(!confirm('삭제하시겠습니까?')){
            return false;
        }
        try{
            await axios.delete('http://localhost:3000/member/' + id);
            getData();
        }catch(err){
            console.log(err);
        }
    };
</script>

<template>
    <div id="study40" class="study_box">
        <h3>서버 데이터 수정하기</h3>
        <div>
        </div>

        <div class="container">
            <button @click="isInputMode=true" class="btn btn-primary ms-3 mt-3">데이터 입력</button>
            <button @click="getData" class="btn btn-success ms-3 mt-3">데이터 가져오기</button>
            <div v-show="isInputMode">
                <form autocomplete="off">
                    <input type="hidden"/>
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
                            <th>(*)</th>
                            <th>(*)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="member in members" :key="member.id">
                            <td>{{member.id}}</td>
                            <td>{{member.name}}</td>
                            <td>{{member.email}}</td>
                            <td><button type="button" @click="getEachData(member.id)" class="btn btn-primary me-3">수정</button></td>
                            <td><button type="button" @click="deleteData(member.id)" class="btn btn-danger">삭제</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>