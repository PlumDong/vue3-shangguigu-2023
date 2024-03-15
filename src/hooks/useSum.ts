import {onMounted, ref} from "vue";

export default () => {
    let sum = ref(0)
    function add() {
        sum.value += 1
    }
    onMounted(()=>{
        add()
    })
    return {
        sum,
        add
    }
}
