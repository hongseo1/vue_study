<script setup>
    import axios from 'axios'; //HTTP 통신을 위한 라이브러리 (GET, POST, PUT, DELETE 등)
    import {ref} from 'vue'; //'ref'는 Vue에서 반응형 상태(데이터가 변경되면 UI가 자동 업데이트)를 만들기 위한 함수

    //반응형 데이터 선언
    //Vue의 'ref()' 함수를 사용하여 선언된 변수들은 반응형(reactive)이 되어, 이 변수들의 .value 속성이 변경되면 이를 사용하는 템플릿 부분도 자동으로 업데이트됨

    //UI/폼 관련 상태 변수
    const isInputMode = ref(false); //form 보이는 여부를 위한 변수
    const member_id = ref(''); //수정할 때 고유의 id값을 저장하는 변수
    const name = ref('');
    const email = ref('');
    const members = ref([]); //서버에서 가져온 회원 목록 데이터를 저장할 배열 변수
    
    const per_page = 5; //한 페이지당 출력 개수
    const numberOfMember = ref(null); //전체 데이터 개수
    const numberOfPage = ref(1); //전체 페이지수
    const prev = ref(null); //이전 페이지
    const next = ref(null); //다음 페이지
    const last = ref(null) //마지막 페이지
    const current_page = ref(1); //현재 페이지

    //데이터 입력/수정 함수
    const inputData = async () => {
        try{//비동기 작업(await로 기다리는 axios 요청) 중에 발생할 수 있는 오류를 감지
            if(member_id.value == ''){ //member_id가 비어있으면(새로운 회원 데이터 입력)
                await axios.post('http://localhost:3000/member', {//post 요청: 새 회원 데이터를 전송 / axios.post는 Promise를 반환, 'await'는 이 Promise가 해결될 때까지 기다림
                    name: name.value, //입력 필드 'name'의 현재 값을 가져옴
                    email: email.value //입력 필드 'email'의 현재 값을 가져옴
                });
            }else{ //member_id가 값이 있으면(기존 회원 데이터 수정)
                await axios.put('http://localhost:3000/member/' + member_id.value, {//put 요청: 특정 Id 값을 가지고 있는 데이터를 수정 :id 부분에슨 'member_id.value'가 동적으로 들어감
                    name: name.value,
                    email: email.value
                });
            }

            //공동 처리부분: 데이터 전송(생성/수정) 성공적으로 완료된 후 '' 초기화하여 다음 정보를 입력할 수 있는 상태로 변환
            member_id.value = ''; 
            name.value = '';
            email.value = '';
            isInputMode.value = false; //입력 완료 후 form태그 안 보이게
            getData(); //데이터 목록 다시 가져오기(변경 후 최신 데이터 로딩을 위함) (current_page.value)로 하면 현재 페이지 유지
        } catch(err){ //try에서 오류 발생 시
            console.log('서버에 이상이 있습니다.');
        }
    };

    //데이터 가져오는 함수
    const getData = async (page) => { //page인자를 받으며 기본값=1
        try{
            const res = await axios.get(`http://localhost:3000/member?_page=${page}&_per_page=${per_page}`); //쿼리 파라미터 `_page=${page}`와 `_per_page=${per_page}`를 사용하여JSON Server의 페이지네이션 기능을 활용, 지정된 페이지와 개수만큼의 데이터를 가져옴
            //JSON Server는 페이지네이션 요청에 대한 응답을 'data' 객체 안에 실제 항목 배열과 페이지네이션 메타데이터(items, pages, prev, next, last)를 포함하여 보냄

            //console.log(res.data) //.data로 접근했을 때 console에서 data안에 data가 있는 것을 확인할 수 있음

            
            current_page.value = page; //현재 페이지 번호 업데이트
            numberOfMember.value = res.data.items; //전체 데이터 개수(items)을 가져옴
            numberOfPage.value = res.data.pages; //전체 페이지 수를 가져옴
            prev.value = res.data.prev; //이전 페이지 번호를 가져옴
            next.value = res.data.next; //다음 페이지 번호를 가져옴
            last.value = res.data.last; //마지막 페이지 번호를 가져옴

            members.value = res.data.data //실제 회원 데이터 업데이트: JSON Server의 페이지네이션 응답 구조에 따라 'res.data.data'에 실제 데이터가 있다.
        }catch(res){
            console.log('서버에 이상이 발생했습니다.');
        }
    };

    //개별 데이터 가져오는 함수 (수정버튼 클릭 시 실행) / 특정 id를 가진 데이터를 가져와 form에 채움
    const getEachData = async (id) => {
        try{
            const res = await axios.get('http://localhost:3000/member/' + id); //엔드포인트로 특정 id값을 가지 데이터 정보 요청
            //console.log(res.data);

            //가져온 데이터 form 필드 채우기 / 필드 값을 수정 하고 입력확인 클릭 시 inputData 실행(id값이 있으니 내용만 수정되어 저장)
            member_id.value = id; //수정할 데이터의 id값 저장(input hidden임으로 동일하게)
            name.value = res.data.name;
            email.value = res.data.email;
            isInputMode.value = true;
        }catch(res){
            console.log('서버에 이상이 발생했습니다.');
        }
    };

    //데이터 삭제 함수 / 특정 id값을 가지고 있는 데이터 삭제
    const deleteData = async (id) => {
        if(!confirm('삭제하시겠습니까?')){ //삭제 여부 확인 (alert창) 아니오 클릭 > 삭제 취소
            return false;
        }
        try{
            await axios.delete('http://localhost:3000/member/' + id); //delete요청: 해당 id값을 가지고 있는 데이터 삭제
            getData(); //삭제 후 최신 목록 로딩을 위해 현대 페이지의 데이터를 다시 가지고 옴 위에서와 동일한 설명 (current_page.value); 입력 시 현재 페이지 유지
            //++ 삭제로 인해 현재 페이지의 마지막 항목이 사라져 페이지가 비어버릴 경우, 이전 페이지로 이동하는 로직 `getData(current_page.value > 1 ? current_page.value : 1)` > 현재 페이지(current_page.value)가 1보다 큰지 (즉, 2페이지 이상인지) 확인, 만약 현재 페이지가 1보다 크다면, 현재 페이지 번호(current_page.value)를 그대로 사용, 만약 현재 페이지가 1보다 크지 않다면 (즉, 현재 페이지가 1이거나 1보다 작은 경우), 페이지 번호를 1로 설정
        }catch(err){
            console.log(err);
        }
    };  
</script>

<template>
    <div id="study42" class="study_box">
        <h3>Axios, async와 await, 데이터 입력, 서버에 저장, 삭제, 수정, Pagination 전체적인 설명</h3>
        <div>
            앞서 단계적으로 학습했던 Axios 이용해 서버에서 데이터 가져오기부터 async와 await, 데이터 입력, 서버 저장, 삭제, 수정, 페이지네이션까지 기능 완성 후 전체적인 설명을 정리한 페이지(주석 참고)
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