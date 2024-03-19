<template>
  <ul class="news-list">
    <li>编号：{{query.id}}</li>
    <li>标题：{{query.title}}</li>
    <li>内容：{{query.content}}</li>
  </ul>
</template>

<script setup lang="ts">
import {useRoute} from "vue-router";
import {toRefs} from "vue";

const route = useRoute();
const {query} = toRefs(route);

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
