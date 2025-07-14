<script setup>
    import axios from 'axios';
    import {ref} from 'vue';

    const table = ref(null);
    const isInputMode = ref(false);
    const member_id = ref('');
    const name = ref('');
    const email = ref('');
    const members = ref([]);
    
    const per_page = 5; //한 페이지당 출력 개수
    const numberOfMember = ref(null); //전체 데이터 개수
    const numberOfPage = ref(1); //전체 페이지수
    const prev = ref(null); //이전 페이지
    const next = ref(null); //다음 페이지
    const last = ref(null) //마지막 페이지
    const current_page = ref(1); //현재 페이지

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

    const getData = async (page) => {
        try{
            const res = await axios.get(`http://localhost:3000/member?_page=${page}&_per_page=${per_page}`);
            //console.log(res.data) //.data로 접근했을 때 console에서 data안에 data가 있는 것을 확인할 수 있음

            current_page.value = page;
            //전체 데이터 개수
            numberOfMember.value = res.data.items;
            //전체 페이지 수
            numberOfPage.value = res.data.pages;
            //이전 페이지
            prev.value = res.data.prev;
            //다음 페이지
            next.value = res.data.next;
            //마지막 페이지
            last.value = res.data.last;

            members.value = res.data.data //members.value = res.data 기존에는 res.data로 접근이 가능했으나 pagination을 사용함으로 data.data로 접근해야 된다.
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
    <div id="study41" class="study_box">
        <h3>Pagination</h3>
        <div>
            'https://getbootstrap.com/docs/5.0/components/pagination/'에서 코드 복사로 기본 페이지 버튼 템플릿 만들기 <br/>
            'https://www.npmjs.com/package/json-server'에서 paginate 정보 확인 'GET /posts?_page=1&_per_page=5' > page=1개당, per_page=5개씩 보여지게
            
        </div>

        <div class="container">
            <button @click="isInputMode=true" class="btn btn-primary ms-3 mt-3">데이터 입력</button>
            <button @click="getData(current_page)" class="btn btn-success ms-3 mt-3">데이터 가져오기</button>
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
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li v-if="prev" class="page-item"><a class="page-link" @click="getData(prev)">Previous</a></li>
                        <li v-for="page in numberOfPage" class="page-item" :class="current_page == page ? 'active': ''"><a class="page-link" @click="getData(page)">{{page}}</a></li>
                        <li v-if="next" class="page-item"><a class="page-link" @click="getData(next)">Next</a></li>
                    </ul>
                </nav>
            </div>

            *전체 데이터 개수
            {{numberOfMember}} / 
            *전체 페이지 수
            {{numberOfPage}} / 
            *이전 페이지
            {{prev}} / 
            *다음 페이지
            {{next}} / 
            *마지막 페이지
            {{last}}
        </div>
    </div>
</template>