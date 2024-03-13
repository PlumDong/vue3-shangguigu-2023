<template>
  <div class="person">
    <h2>姓名：{{person.name}}</h2>
    <h2>年龄：{{person.age}}</h2>
    <button @click="setName">修改名字</button>
    <button @click="setAge">修改年龄</button>
    <button @click="setPerson">修改整个人</button>
  </div>
</template>
<script lang="ts" name='Person11' setup>
import {ref, watch} from "vue";

let person = ref({name:'张三',age:18})
function setName() {
    person.value.name += '~'
}
function setAge() {
    person.value.age += 1
}

function setPerson() {
    person.value = {name:'李四',age:90}
}

let stopWatch = watch(person,(newValue, oldValue)=>{
    console.log('sum旧值',oldValue,'    新值',newValue)

},{deep:true})


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
