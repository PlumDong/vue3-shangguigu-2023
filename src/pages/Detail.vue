<template>
  <ul class="news-list">
    <li>编号：</li>
    <li>标题：</li>
    <li>内容：</li>
  </ul>
</template>

<script setup lang="ts">

</script>


<style scoped>
.news-list {
  list-style-type: none;
  padding: 0;
}

.news-list li {
  margin-bottom: 10px;
}

.news-list li:first-child {
  font-weight: bold;
}

.news-list li:nth-child(odd) {
  background-color: #f9f9f9;
}

.news-list li:nth-child(even) {
  background-color: #e9e9e9;
}
</style>
