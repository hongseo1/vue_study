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

    const getData = () => {
        axios.get('http://localhost:3000/member')
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
    };
</script>

<template>
    <div id="study35" class="study_box">
        <h3>Bootstrap 설치 및 적용하기</h3>
        <div>
            기존에 설치 되어있는 bootstrap이 있을 수 있으니깐 제거: <br/> npm nuinstall vue bootstrap bootstrap-vue <br/>
            <br/>
            bootstrap 설치: <br/>
            npm install vue bootstrap bootstrap-vue3 <br/>
            npm audit fix <br/>
            npm audit fix --force <br/>
            <br/>
            main.js에서 bootstrap관련 import하기 <br/>
            import {createApp} from 'vue' <br/>
            import App from './App.vue' <br/>
            import {BootstrapVue3} from 'bootstrap-vue-3'; //여기 <br/>
            import 'bootstrap/dist/css/bootstrap.css'; //여기 <br/>
            import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'//여기 <br/>
    
            const app = createApp(App); <br/>
            app.use(router); //여기 <br/>
            app.mount('#app'); <br/>
            <br/>
        </div>

        <button @click="inputData" class="btn btn-primary ms-3 mt-3">데이터 입력</button>
        <button @click="getData" class="btn btn-success ms-3 mt-3">데이터 가져오기</button>
        <!-- ms-3: margin start-3 margin을 시작점에서 3만큼 적용 / mt: margin top -->
        <div ref="table">
        </div>
    </div>
</template>

<style scoped>
    button{margin-bottom: 10px;}
    div{margin-top: 10px;}
</style>