<script>
  export default{
    /* data: function(){//아래와 동일 function 생략 가능
      return{
        channel : "첫 vue 프로젝트 연습",
        subscribe : 2677, //마지막 , 생략 가능
      }
    } */
    data(){
      return{
        links: [] //라우터 링크 정보를 저장할 배열
      };
      
    },
    created() {
      //컴포넌트가 생성될 때 라우터 정보를 가져옴
      this.links = this.$router.getRoutes() //모든 등록된 라우트 정보를 가져옴
        .filter(route => route.meta && route.meta.title) // meta.title이 있는 라우트만 필터링
        .map(route => ({
        path: route.path,    // <--- 여기서 route.path가 올바른지 확인
        title: route.meta.title // 라우트의 meta 필드에 정의된 제목
      }));

      console.log('App.vue - navLinks:', this.links);
        
    }
  };
</script>

<template>
  <router-link to="/" class="link_tag">main</router-link>
  <div v-if="$route.path == '/'">
    <router-link v-for="(link, index) in links" :key="index" :to="link.path" class="link_tag">{{link.title}}</router-link>
    <!-- :이 있고 없고 차이 :to~일경우: javascript 변수(또는 표현식)의 실제 값을 가져와서 to속성에 적용 / to~일경우: 고정된 문자열 리터럴 값을 할당하겠다는 의미 -->
  </div>

  <router-view></router-view>
  

  

  

  

  

  
</template>

<style>
  .link_tag{display: block; text-decoration: none; color: #222222;}
  .link_tag:hover{text-decoration: underline;}
  button{display: block;}
</style>
