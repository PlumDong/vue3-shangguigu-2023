<template>
  <div class="person">
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="add">点我+1</button>
    <hr>
    <img v-for="(dog,index) in dogList" :key="index" :src="dog" alt="">
    <br>
    <button @click="getDog">再来一只小狗</button>
  </div>
</template>
<script lang="ts" name='Person11' setup>
  import useDog from "@/hooks/useDog";
  import useSum from "@/hooks/useSum";

  let {dogList,getDog} = useDog();
  let {sum,add} = useSum();
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
img{
  width: 100px;
  margin-right: 10px;
}
</style>
