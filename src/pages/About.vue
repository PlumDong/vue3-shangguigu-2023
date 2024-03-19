<template>
  <div class="news">
    <!--导航区-->
    <ul>
      <li v-for="news in newsList" :key="news.id">
        <RouterLink
            :to="{
              name:'详情',
              query:{
                id:news.id,
                title:news.title,
                content:news.content,
              }
            }"
            active-class="active">{{ news.title }}
        </RouterLink>
      </li>
    </ul>
    <!--展示区-->
    <div class="news-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup lang="ts">
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
  display: flex;
}

.news ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 30%;
}

.news li {
  margin-bottom: 10px;
}

.news a {
  text-decoration: none;
  color: #333;
}

.news-content {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
}
</style>
