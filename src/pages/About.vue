<template>
  <div class="news">
    <!--导航区-->
    <ul>
      <li v-for="news in newsList" :key="news.id">
        <RouterLink to="/about/detail" active-class="active">{{news.title}}</RouterLink>
      </li>
    </ul>
    <!--展示区-->
    <div class="news-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script  setup lang="ts">
import {reactive} from "vue";

const newsList = reactive([
  {id: '01', title: '十种食物', content: '西兰花'},
  {id: '02', title: '如何一夜暴富', content: '学IT'},
  {id: '03', title: '震惊！！！震惊！！！', content: '明天是周一'},
  {id: '04', title: '好消息！！好消息！！', content: '过年了'},
]);


</script>

<style scoped>
.news {
  background-color: #f9f9f9;
  padding: 10px;
}

.news ul {
  list-style-type: none;
  padding: 0;
}

.news li {
  margin-bottom: 5px;
}

.news a {
  text-decoration: none;
  color: #333;
}

.news a:hover {
  text-decoration: underline;
  color: #007bff;
}

.news-content {
  width: 65%;
  padding: 10px;
  border: 1px solid #ccc;
}

</style>
