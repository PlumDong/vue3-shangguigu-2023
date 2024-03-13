<template>
  <div class="person">
    <h2>姓名：{{ student.name }}</h2>
    <h2>年龄：{{ student.age }}</h2>
    <button @click="setName">修改名字</button>
    <button @click="setAge">修改年龄</button>
    <button @click="showTel">查看联系方式：</button>
    <br>
    <h2>游戏列表：</h2>
    <ul>
      <li v-for="g in games" :key="g.id">{{ g.name }}</li>
    </ul>
    <button @click="setFirstGame">修改第一个游戏名字</button>
    <h2>测试：{{ obj.a.b.c }}</h2>
    <button @click="setObj">多层对象修改</button>
  </div>
</template>
<script lang="ts" name='Person11' setup>

import {reactive} from 'vue'

// 对象类型响应数据
let student = reactive({name: '张三2', age: 19, tel: '1380000000'})
// 数组类型响应数据
let games = reactive([{id: '01', name: '王者'}, {id: '02', name: '原神'}, {id: '03', name: '三国'},])
// 多层嵌套对象相应数据
let obj = reactive({
    a:{
        b:{
            c:666
        }
    }
})

console.log(games)
// end
function setName() {
    student.name = 'zhang-san'
}

function setAge() {
    student.age += 1
}

function showTel() {
    alert(student.tel)
}
function setFirstGame(){
    games[0].name = '英雄联盟'
    console.log(games[0])
}
function setObj(){
    obj.a.b.c = 999
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
li{
  font-size: 20px;
}
</style>
