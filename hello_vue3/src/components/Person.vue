<template>
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="setName">修改名字</button>
    <button @click="setAge">修改年龄</button>
    <button @click="showTel">查看联系方式：</button>
  </div>
</template>

<script lang="ts">
export default {
    name: '',
    setup(){
        // begin 此时name，age，tel都不是响应式的
        let name = '张三'
        let age = 18
        let tel = '1380000000'
        // end
        function setName(){
            name = 'zhang-san'
        }
        function setAge(){
            age+=1
        }
        function showTel(){
            alert(tel)
        }
        return{
            name,
            age,
            setName,
            setAge,
            showTel,
        }
    }
}
</script>

<style scoped>

.person {
  background-color: chocolate;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
