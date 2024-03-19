<template>
  <ul class="news-list">
    <li>编号：{{id}}</li>
    <li>标题：{{title}}</li>
    <li>内容：{{content}}</li>
  </ul>
</template>

<script setup lang="ts">
import {isRef} from "vue";

let props = defineProps(['id','title','content']);
console.log(props)
</script>


<style scoped>
.news-list {
  list-style-type: none;
  padding: 0;
}

.news-list li {
  margin-bottom: 10px;
}


</style>
