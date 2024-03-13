<template>
  <div class="person">
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <h2>汽车：{{ person.car.c1 }}、{{ person.car.c2 }}</h2>
    <button @click="setName">修改名字</button>
    <button @click="setAge">修改年龄</button>
    <button @click="setC1">修改第一台车</button>
    <button @click="setC2">修改第二台车</button>
    <button @click="setCar">修改所有车</button>
  </div>
</template>
<script lang="ts" name='Person11' setup>
import {reactive, ref, watch} from "vue";

let person = reactive({
    name: '张三', age: 18, car: {
        c1: '奔驰',
        c2: '宝马',
    }
})

function setName() {
    person.name += '~'
}

function setAge() {
    person.age += 1
}

function setC1() {
    person.car.c1 = '奥迪'
}
function setC2() {
    person.car.c2 = '大众'
}
function setCar() {
    person.car = {c1:'雅迪',c2:'爱玛'}
}

function setPerson() {
    Object.assign(person, {name: '李四', age: 90})
}

let stopWatch = watch(()=>[person.name,person.car], (newValue, oldValue) => {
    console.log('sum旧值', oldValue, '    新值', newValue)

}, {deep: true})


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
