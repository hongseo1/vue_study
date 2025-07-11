<!-- page19 -->
<template>
    <!-- slot 여러개 넣는 방법 -->
    <slot name="header"></slot>
    <slot></slot> <!-- slot에 name을 지정하지 않았을 경우 상위 요소의 default값이 적용 된다.(안에 적은 내용) / <slot name="default"></slot>와 동일 -->
    <slot name="footer"></slot>
</template>