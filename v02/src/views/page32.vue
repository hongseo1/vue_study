<template>
    <div id="study32" class="study_box">
        <h3>json-server 설치하기</h3>
        <div>
            프런트엔드 개발자가 실제 백엔드 API 서버 없이도 빠르게 API를 모의(mock)하여 개발을 진행할 수 있도록 돕는 Node.js 기반의 라이브러리 <br/>

            - 터미널에서 npm install -g json-server (-g 옵션 사용 시 매번 패키지에 npm install json-server 하지 않아도 된다.)
            - 패키지 바로 아래에 db.json파일 생성 및 내용 작성 <br/>
            <!-- 
                db.json
                "member":[ member 테이블
                    {
                        "id": 1,
                        "name": "홍길동",
                        "email": "aaa@gmail.com"
                    },
                    {
                        "id": 2,
                        "name": "홍길순",
                        "email": "bbb@gmail.com"
                    }
                ]
            -->
            - 실행 방법: 터미널에서<br/>
             json-server --watch db.json 또는 <br/>
            npx json-server db.json <br/>
            - Endpoints: 링크에 들어가면 작성한 데이터 확인 가능 (링크/1 하면 해당하는 데이터만 확인 할 수 있음)
        </div>
    </div>
</template>