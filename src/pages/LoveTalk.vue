<template>
  <div>
    <button @click="getTalkList">获取名句</button>
    <ul>
      <li v-for="item in loveTalkStore.talkList" :key="item.id">{{ item.title }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import {onMounted, reactive, toRefs} from "vue";
import axios from "axios";
import {nanoid} from "nanoid";
import useLoveTalkStore from "@/store/LoveTalk";

let loveTalkStore = useLoveTalkStore();


async function getTalkList() {
  // 发请求，写法：连续解构 + 重命名
  await loveTalkStore.getATalk()
}

onMounted(() => {
  for (let i = 0; i < 3; i++) {
    getTalkList()
  }
})

</script>

<style scoped>

ul {
  list-style-type: none;
  padding: 20px;
}

li {
  margin-bottom: 10px;
  list-style-type: disc;
}

button {
  padding: 5px 10px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}
</style>
