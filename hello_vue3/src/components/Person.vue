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
    data() {
        return {
            name: '张三',
            age: 18,
            tel: '1380000000',
        }
    },
    methods: {
        showTel() {
            alert(this.tel)
        },
        setName() {
            this.name = 'zhang-san'
        },
        setAge() {
            this.age++
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
