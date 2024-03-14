<template>
  <div class="person">
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="add">点我+1</button>
  </div>
</template>
<script lang="ts" name='Person11' setup>
import {onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref} from "vue";

let sum = ref(0)

function add() {
  sum.value+=1
}
// 创建
console.log('子创建')

//挂载前
onBeforeMount(()=>{
  console.log('子挂载前')
})
//挂载完毕-常用
onMounted(()=>{
  console.log('子挂载完毕')
})
// 更新前
onBeforeUpdate(()=>{
  console.log('子更新前')
})

// 更新完毕-常用
onUpdated(()=>{
  console.log('子更新完毕')
})

// 卸载前-常用
onBeforeUnmount(()=>{
  console.log('子卸载前')
})
// 卸载完毕
onUnmounted(()=>{
  console.log('子卸载完毕')
})

</script>
<style scoped>

.person {
  background-color: chocolate;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}

button {
  margin: 0 5px;
}

li {
  font-size: 20px;
}
</style>
