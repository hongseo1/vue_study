//상태관리 대상의 변수명=파일명
import { defineStore } from "pinia"; //pinia의 핵심 함수 임포트
import { computed, ref } from "vue";

export const useCntStore = defineStore('cnt', () => {
    const cnt = ref(0);
    const oddOreven = computed(() => (cnt.value%2==0) ? '짝수':'홀수');
    const inc = () => cnt.value++;
    const dec = () => cnt.value--;
    return {cnt, oddOreven, inc, dec} //외부에서 사용할 수 있도록 반환
});