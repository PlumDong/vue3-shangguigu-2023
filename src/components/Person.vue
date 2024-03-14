<template>
  <div class="person">
  <h2>当前水温：{{temp}}</h2>
  <h2>当前水位：{{height}}</h2>
    <button @click="setTemp">水温+10</button>
    <button @click="setHeight">水位+10</button>
  </div>
</template>
<script lang="ts" name='Person11' setup>
import {reactive, ref, watch, watchEffect} from "vue";

let temp = ref(0)
let height = ref(0)

function setTemp() {
    temp.value+=10
}

function setHeight() {
    height.value+=10
}

 // 1. watch 写法
// watch([temp,height],(value)=>{
//     let [newTemp,newHeight] = value
//     console.log(value)
//     if (newTemp>=60 || newHeight >= 80){
//         console.log('给服务端发请求！ ')
//     }
// })
// 2.
// 2. watchEffect 写法，自动监视变量
watchEffect(()=>{
    console.log(temp.value,height.value)
    if (temp.value>=60 || height.value >= 80){
        console.log('给服务端发请求！ ')
    }
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
