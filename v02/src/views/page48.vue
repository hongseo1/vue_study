<script setup>

</script>

<template>
    <div id="study48" class="study_box">
        <h3>Tailwind CSS 사용하기</h3>
        <div>
            설치: https://v2.tailwindcss.com/docs/guides/vue-3-vite
            npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
            npm install tailwindcss@latest @tailwindcss/vite@latest -D
            npm install -D tailwindcss postcss autoprefixer
            npx tailwindcss init -p = 안됨(4.0 버전 이후로 init 명령어가 안 되고 tailwind.config.css 파일이 없어졌다. )
            Tailwind CSS 4.0 버전부터 PostCSS 플러그인이 별도의 패키지로 분리. 이전 버전에서는 tailwindcss 패키지 자체가 PostCSS 플러그인 역할을 했지만, 4.0 버전부터는 구조가 변경
            npm install @tailwindcss/postcss --save-dev

            여러 방법을 찾아봤지만 버전 4.0 정보는 공식 문서를하고 제외 별로 없다..
            강의 내용처럼 하려면 버전을 낮추는 방법 밖에 없을 듯.. 
            tailwindcss의 장단점이 있으니 필요 시에 다시 공부해보자...
        </div>
    </div>
</template>