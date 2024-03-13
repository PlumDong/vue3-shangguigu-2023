<template>
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="setName">修改名字</button>
    <button @click="setAge">修改年龄</button>
  </div>
</template>
<script lang="ts" name='Person11' setup>

import {reactive, ref, toRefs} from 'vue'

// 对象类型响应数据
let student = reactive({name: '张三2', age: 19})

let {name,age} = toRefs(student)
console.log(name)
console.log(age)
function setName() {
    name.value += '~'
}

function setAge() {
    age.value += 1
}


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
